import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import data from "../../data";
import FoodList from "../../Components/List";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Pantry() {
  return (
    <View style={{ backgroundColor: "#D9EEEB" }}>
      <View style={{ backgroundColor: "white", borderRadius: 25 }}>
        <View>
          <Text style={{ fontSize: 20, padding: 5 }}>
            {" "}
            Total: ({data.length} items)
          </Text>
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
    </View>
  );
}

const styles = StyleSheet.create({});
