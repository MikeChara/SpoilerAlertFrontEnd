// MAIN CONTAINER > ADDITEMSCREEN
import React, { useState } from "react";
import * as ModalNavigation from "../navigation/ModalNavigate.js";
import {
  View,
  Text,
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import DatepickerSimpleUsageShowcase from "../Components/Calendar.js";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase-config";
import { backend_link } from "@env";

//props coming from MainContainer
export default function AddItemScreen({ foodList, setFoodList, styles }) {
  const [item, setItem] = useState();
  const [price, setPrice] = useState();
  const [date, setDate] = React.useState(new Date());

  const priceRegex = /^\d+(\.\d{1,2})?$/;

  function addPriceButtonHandle() {
    if (priceRegex.test(price)) {
      addFood(price, item, date, auth.currentUser.uid);
      ModalNavigation.navigate("Pantry");
    }
    if (!priceRegex.test(price)) {
      alert("Please enter a valid price.");
    }
  }

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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.pagestyle}>
        <Text style={styles.addpagetext}> Item</Text>

        <TextInput
          style={styles.textinput}
          placeholder="Enter item"
          onChangeText={(text) => setItem(text)}
        />

        <Text style={styles.addpagetext}> Expiry Date</Text>

        <DatepickerSimpleUsageShowcase
          styles={styles}
          setDate={setDate}
          date={date}
        />
        <Text style={styles.addpagetext}> Add Price</Text>

        <TextInput
          style={styles.textinput}
          placeholder="£"
          keyboardType={"decimal-pad"}
          onChangeText={(price) => setPrice(price)}
        />
        <Pressable style={styles.purplebutton} onPress={addPriceButtonHandle}>
          <Text style={styles.purplebuttontext}>Add Item Pantry</Text>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
}
