// MAIN CONTAINER > ADDITEMSCREEN
import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import DatepickerSimpleUsageShowcase from "../Components/Calendar.js";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase-config";

//props coming from MainContainer
export default function AddItemScreen({ foodList, setFoodList, styles }) {
  const [item, setItem] = useState();
  const [price, setPrice] = useState();
  const [date, setDate] = React.useState(new Date());
  const priceRegex = /^\d+(\.\d{1,2})?$/;

  const navigation = useNavigation();
  async function addFood(price, item, date, uid) {
    const Userthings = await fetch(
      `https://spoiler-alert-backend.onrender.com/addItem/${uid}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          price: price,
          name: item,
          expires_on: date,
        }),
      }
    );

    const allFood = await fetch(
      `https://spoiler-alert-backend.onrender.com/pantry/${uid}`
    );
    const data = await allFood.json();
    const food = data.payload;
    setFoodList(food);
  }

  return (
    <View style={styles.pagestyle}>
      <Text style={styles.addpagetext}> Item</Text>

      <TextInput
        style={styles.textinput}
        placeholder="Enter item"
        onChangeText={(text) => setItem(text)}
      />

      <Text style={styles.addpagetext}> Expiry Date</Text>

      <DatepickerSimpleUsageShowcase setDate={setDate} date={date} />
      <Text style={styles.addpagetext}> Add Price</Text>

      <TextInput
        style={styles.textinput}
        placeholder="£"
        keyboardType={"decimal-pad"}
        onChangeText={(price) =>
          priceRegex.test(price)
            ? setPrice(price)
            : alert("Please enter valid price")
        }
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
