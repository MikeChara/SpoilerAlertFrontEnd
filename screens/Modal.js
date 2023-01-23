import React, { useState } from "react";
import * as ModalNavigation from "../navigation/ModalNavigate.js";
import { useNavigation } from "@react-navigation/native";
import {
	Alert,
	Modal,
	Text,
	Pressable,
	View,
	TouchableOpacity,
	Image,
} from "react-native";

function ManualModal({ setModalVisible, modalVisible, styles }) {
	const onPressAddManually = () => {
		setModalVisible(!modalVisible);
		ModalNavigation.navigate("Add Item");
	};
	const onPressAddScan = () => {
		setModalVisible(!modalVisible);
		ModalNavigation.navigate("Scan");
	};

	return (
		<View>
			<Modal
				animationType='slide'
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert("Modal has been closed.");
					setModalVisible(!modalVisible);
				}}
			>
				<TouchableOpacity
					style={styles.modalTouchableOpacity}
					activeOpacity={1}
					onPressOut={() => {
						setModalVisible(false);
					}}
				>
					<View
						style={styles.modalCenteredView}
						onPress={() => setModalVisible(!modalVisible)}
					>
						<View style={styles.modalParentView}>
							<Text style={styles.modalText}>Add New Item</Text>
							<View style={styles.modalIcons}>
								<Pressable
									style={[styles.modalButtons, styles.buttonClose]}
									onPress={onPressAddScan}
								>
									<Image
										style={{
											...styles.tinyCategoryIcon,
											alignSelf: "center",
										}}
										source={require("../screens/Camera.png")}
									/>
									<Text style={styles.modalSmallText}>Scan Receipt</Text>
								</Pressable>
								<View style={styles.modalLine}></View>
								<Pressable
									style={[styles.modalButtons, styles.buttonClose]}
									onPress={onPressAddManually}
								>
									<Image
										style={{
											...styles.tinyCategoryIcon,
											alignSelf: "center",
										}}
										source={require("../screens/Form.png")}
									/>
									<Text style={styles.modalSmallText}>Add Manually</Text>
								</Pressable>
							</View>
						</View>
					</View>
				</TouchableOpacity>
			</Modal>
		</View>
	);
}

export default ManualModal;
