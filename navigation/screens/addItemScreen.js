// MAIN CONTAINER > ADDITEMSCREEN

import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import DatepickerSimpleUsageShowcase from "../../Components/Calendar.js";
import { useNavigation } from "@react-navigation/native";
import expiryDateConverter from "../../Functions/expiryDateConverter.js";
import { auth } from "../../firebase-config";


//props coming from MainContainer
export default function AddItemScreen({ foodList, setFoodList, styles }) {
	const [item, setItem] = useState();
	const [price, setPrice] = useState();
	const [date, setDate] = React.useState(new Date());

	const navigation = useNavigation();
  async function addFood(price, item, date, uid) {
    const dateConvertor = expiryDateConverter(date);
    const Userthings = await fetch(`http://192.168.0.6:3000/addItem/${uid}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: price,
        name: item,
        expires_on: dateConvertor,
      }),
    });
    console.log("userthings was gotten?", Userthings);
    const allFood = await fetch(`http://192.168.0.6:3000/pantry/${uid}`);
    const data = await allFood.json();
    const food = data.payload;
    console.log("food gotten", food);
    setFoodList(food);
  }
  return (
    <View style={{ flex: 1, alignItems: "center", textAlign: "left" }}>
      <Text style={{ fontSize: 26, fontWeight: "bold", textAlign: "left" }}>
        {" "}
        Item
      </Text>

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
      <Pressable
        style={styles.purplebutton}
        onPress={() => addFood(price, item, date, auth.currentUser.uid)}
      >
        <Text style={styles.purplebuttontext}>Add</Text>
      </Pressable>
    </View>
  );
}

