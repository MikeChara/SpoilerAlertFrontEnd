import React, { useState, useEffect } from "react";
import { auth } from "../firebase-config";
import Tabs from "./Tabs";
import ManualModal from "../screens/Modal";
import { View } from "react-native";
import { backend_link } from "@env";
import { getUserFood } from "../Fetches/getRequests";

function MainContainer({ styles }) {
	const [foodList, setFoodList] = useState([]);
	const [modalVisible, setModalVisible] = useState(false);
	const [allStats, setAllStats] = useState([]);
	const [weekStats, setWeekStats] = useState([]);

	useEffect(() => {
		getUserFood(auth.currentUser.uid, setFoodList);
	}, []);

	return (
		<View style={{ flex: 1 }}>
			<Tabs
				styles={styles}
				foodList={foodList}
				setFoodList={setFoodList}
				setModalVisible={setModalVisible}
				allStats={allStats}
				setAllStats={setAllStats}
				weekStats={weekStats}
				setWeekStats={setWeekStats}
			/>
			<View style={styles.modalContainer}>
				<ManualModal
					modalVisible={modalVisible}
					setModalVisible={setModalVisible}
					styles={styles}
					navigation={Tabs}
				/>
			</View>
		</View>
	);
}
export default MainContainer;
