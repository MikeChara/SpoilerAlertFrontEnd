// MAIN CONTAINER > ADDITEMSCREEN

import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import DatepickerSimpleUsageShowcase from "../../Components/Calendar.js";
import { useNavigation } from "@react-navigation/native";
import expiryDateConverter from "../../Functions/expiryDateConverter.js";

//props coming from MainContainer
export default function AddItemScreen({ foodList, setFoodList, styles }) {
	const [item, setItem] = useState();
	const [price, setPrice] = useState();
	const [date, setDate] = React.useState(new Date());

	const navigation = useNavigation();

	function handleAdd() {
		navigation.navigate("Pantry");
		setFoodList([...foodList, { item: item, expiryDate: date }]);
	}
	return (
		<View style={styles.pagestyle}>
			<Text style={styles.addpagetext}> Item</Text>

			<TextInput
				style={styles.textinput}
				placeholder='Enter item'
				onChangeText={(text) => setItem(text)}
			/>

			<Text style={styles.addpagetext}> Expiry Date</Text>

			<DatepickerSimpleUsageShowcase setDate={setDate} date={date} />

			<Text style={styles.addpagetext}> Add Price</Text>

			<TextInput
				style={styles.textinput}
				placeholder='£'
				onChangeText={(price) => setPrice(price)}
			/>

			<Pressable style={styles.purplebutton} onPress={handleAdd}>
				<Text style={styles.purplebuttontext}>Add</Text>
			</Pressable>
		</View>
	);
}
