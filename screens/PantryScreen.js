import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";
import FoodList from "../Components/FoodList";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { auth } from "../firebase-config";

export default function Pantry({
  setFoodList,
  foodList,
  styles,
  setAllStats,
  setWeekStats,
}) {
  //this is a mutable change without using setState - seems dodgy no?
  let todaysDate = new Date();
  return (
    <View style={styles.pagestyle}>
      <Image
        source={require("../assets/foodiconbg.png")}
        style={{ position: "absolute", opacity: 0.1, resizemode: "cover" }}
      />
      <View>
        <Text style={styles.subtitle}> Total: ({foodList.length} items)</Text>
        <FlatList
          data={foodList}
          renderItem={({ item, index }) => {
            //calculates days left until expiry
            let expiryDate = new Date(item.expires_on);
            let msleft = expiryDate.getTime() - todaysDate.getTime();
            let daysLeft = msleft / 1000 / 60 / 60 / 24;
            let daysLeftRounded = Math.floor(daysLeft);
            return (
              <GestureHandlerRootView>
                <FoodList
                  name={item.name}
                  expiry={daysLeftRounded}
                  foodList={foodList}
                  setFoodList={setFoodList}
                  id={item.id}
                  index={index}
                  setAllStats={setAllStats}
                  setWeekStats={setWeekStats}
                />
              </GestureHandlerRootView>
            );
          }}
        />
      </View>
    </View>
  );
}
