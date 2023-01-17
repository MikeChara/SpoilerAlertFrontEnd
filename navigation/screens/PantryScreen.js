import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
// import { data } from "../../data";
import FoodList from "../../Components/FoodList";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { auth } from "../../firebase-config";

export default function Pantry({ setFoodList, foodList }) {
  
  // async function userEaten(food_id, uid) {
  //   const Userthings = await fetch(`http://192.168.1.11:3000/eatFood/${food_id}`, {
  //     method: "PATCH",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     }
  //   });
  //   const allFood = await fetch(`http://192.168.1.11:3000/pantry/${uid}`);
  //   const data = await allFood.json();
  //   const food = data.payload;
  //   console.log(food)
  //   console.log("food gotten", food);
  //   setFoodList(food);
  // }
  //this is a mutable change without using setState - seems dodgy no?
  //it orders the list by expiry with most recent first
  console.log(auth.currentUser.uid);
  // foodList.length === 0
  //   ? null
  //   : foodList.sort((a, b) => a.expiryDate.getTime() - b.expiryDate.getTime());
  //gets todays date (and time)
  let todaysDate = new Date();
  return (
    <View style={{ backgroundColor: "#D9EEEB" }}>
      <View style={{ backgroundColor: "white", borderRadius: 25 }}>
        <View>
          <Text style={{ fontSize: 20, padding: 5 }}>
            {" "}
            Total: ({foodList.length} items)
          </Text>
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
                  <FoodList name={item.name} expiry={daysLeftRounded} index={index} foodList={foodList} setFoodList={setFoodList} id={item.id}/>
                </GestureHandlerRootView>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
