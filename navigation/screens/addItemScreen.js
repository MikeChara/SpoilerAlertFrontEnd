import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import DatepickerSimpleUsageShowcase from "../../Components/Calendar.js";
import { useNavigation } from "@react-navigation/native";
import expiryDateConverter from "../../Functions/expiryDateConverter.js";
import { auth } from "../../firebase-config";

export default function AddItemScreen({ foodList, setFoodList }) {
  const [item, setItem] = useState();
  const [price, setPrice] = useState();
  const [date, setDate] = React.useState(new Date());

  const navigation = useNavigation();

  // function handleAdd() {
  //   navigation.navigate("Pantry");
  //   console.log(expiryDateConverter(date))
  //   setFoodList([
  //     ...foodList,
  //     { item: item, expiryDate: date },
  //   ]);
  // }
  async function addFood(price, item, date, uid) {
    const dateConvertor = expiryDateConverter(date);
    const Userthings = await fetch(`http://192.168.1.11:3000/addItem/${uid}`, {
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
    const allFood = await fetch(`http://192.168.1.11:3000/pantry/${uid}`);
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

      <TextInput
        style={styles.input}
        placeholder="Enter item"
        onChangeText={(text) => setItem(text)}
      />

      <Text style={{ fontSize: 26, fontWeight: "bold", textAlign: "left" }}>
        {" "}
        Expiry Date
      </Text>
      <DatepickerSimpleUsageShowcase setDate={setDate} date={date} />

      <Text style={{ fontSize: 26, fontWeight: "bold", textAlign: "left" }}>
        {" "}
        Add Price
      </Text>
      <TextInput
        style={styles.input}
        placeholder="£"
        onChangeText={(price) => setPrice(price)}
      />

      <Pressable
        style={styles.button}
        onPress={() => addFood(price, item, date, auth.currentUser.uid)}
      >
        <Text style={styles.text}>Add</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 20,
    elevation: 0,
    backgroundColor: "#5951B7",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  input: {
    height: 40,
    width: "80%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
