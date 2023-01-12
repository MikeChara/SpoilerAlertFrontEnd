import * as React from "react";
import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import DatepickerSimpleUsageShowcase from "../../Components/Calendar.js";

export default function AddItemScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", textAlign: "left" }}>
      <Text style={{ fontSize: 26, fontWeight: "bold", textAlign: "left" }}>
        {" "}
        Item
      </Text>

      <TextInput style={styles.input} placeholder="Enter item" />

      <Text style={{ fontSize: 26, fontWeight: "bold", textAlign: "left" }}>
        {" "}
        Expiry Date
      </Text>
      <DatepickerSimpleUsageShowcase />

      <Text style={{ fontSize: 26, fontWeight: "bold", textAlign: "left" }}>
        {" "}
        Add Price
      </Text>
      <TextInput style={styles.input} placeholder="£" />

      <Pressable style={styles.button}>
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
