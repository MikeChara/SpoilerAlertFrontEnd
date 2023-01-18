import * as React from "react";
import { View, Text } from "react-native";
// import { getAllWasted } from "../GetRequests/GetHome";
import { auth } from '../firebase-config'

export default function HomeScreen({ styles, foodList, setFoodList }) {
	const [allWasted, setAllWasted] = React.useState([]);
	const [allEaten, setAllEaten] = React.useState([]);
	console.log('this is the home screen rendering')
	 async function getAllWasted(uid) {
		const allFood = await fetch(
		  `https://spoiler-alert-backend.onrender.com/allWastedFood/303Ut9TLrAQjyq5hlJrmlsB66Tl2`
		);
		const data = await allFood.json();
		console.log('this is the data',data.payload)
		setFoodList([...data.payload])
		return data.payload;
	  }
	React.useEffect( () => {
		getAllWasted(auth.currentUser.uid)
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
