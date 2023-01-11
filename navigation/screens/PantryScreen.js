import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import data from "../../data";
import FoodList from "../../Components/List";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Pantry() {
  return (
    <View style={{ backgroundColor: "#A4EBDA" }}>
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 30, padding: 20 }}>
          Your Storage:
        </Text>
        <Text style={{ fontSize: 20 }}> Total: ({data.length} items)</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <GestureHandlerRootView>
              <FoodList name={item.item} expiry={item.expiryDate} />
            </GestureHandlerRootView>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
