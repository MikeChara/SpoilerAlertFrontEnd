import * as React from "react";
import { View, Text } from "react-native";
// import { getAllWasted } from "../GetRequests/GetHome";
import { auth } from '../firebase-config'
import { backend_link } from "@env";


export default function HomeScreen({ styles }) {
	const [allStats, setAllStats] = React.useState([]);
	const [weekStats, setWeekStats] = React.useState([]);

	 async function getAllStats(uid) {
		const allFood = await fetch(
		  `${backend_link}/allEatenAndWasted/${auth.currentUser.uid}`
		);
		const data = await allFood.json();
		console.log('all stats :',data.payload)
		setAllStats([...data.payload])
		return data.payload;
	  }
	  async function getWeekStats(uid) {
		const allFood = await fetch(
		  `${backend_link}/weekEatenWasted/${auth.currentUser.uid}`
		);
		const data = await allFood.json();
		console.log('week stats :',data.payload)
		setWeekStats([...data.payload])
		return data.payload;
	  }
	  console.log('state all stats :',allStats)
	  console.log('state week stats :',weekStats)

	React.useEffect( () => {
		getAllStats(auth.currentUser.uid);
		getWeekStats(auth.currentUser.uid)
	  }, []);
	return (
		<View style={styles.pagestyle}>
			<Text
				onPress={() => alert('This is the "Home" screen.')}
				style={styles.subtitle}
			>
				Home Screen
			</Text>
		</View>
	);
}
