import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import DatepickerSimpleUsageShowcase from "../../Components/Calendar.js";
import data from "../../data";

export default function AddItemScreen({ navigation }) {
  const [item, setItem] = useState();
  const [price, setPrice] = useState();
  const [date, setDate] = React.useState(new Date());

  function handleAdd() {
    console.log(item, price, date);
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

      <Pressable style={styles.button} onPress={handleAdd}>
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
