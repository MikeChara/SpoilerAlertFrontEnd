import { StyleSheet, Text, View, Pressable, Button, Image } from "react-native";
import React from "react";
import { ListItem } from "@rneui/themed";
import Ionicons from "react-native-vector-icons/Ionicons";
import { auth } from "../firebase-config";
import { backend_link } from "@env";
import { getAllStats, getWeekStats } from "../Fetches/getRequests.js";
import { eatenFoodPatch, binnedFoodPatch } from "../Fetches/patchRequests.js";
import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

export default function FoodList({
  name,
  expiry,
  id,
  setFoodList,
  index,
  foodList,
  setAllStats,
  setWeekStats,
  styles,
}) {
  async function userEaten(food_id, uid) {
    eatenFoodPatch(food_id);
    setFoodList([
      ...foodList.slice(0, index),
      ...foodList.slice(index + 1, foodList.length),
    ]);
    getAllStats(uid, setAllStats);
    getWeekStats(uid, setWeekStats);
  }

  async function userBinned(food_id, uid) {
    binnedFoodPatch(food_id);
    setFoodList([
      ...foodList.slice(0, index),
      ...foodList.slice(index + 1, foodList.length),
    ]);
    getAllStats(uid, setAllStats);
    getWeekStats(uid, setWeekStats);
  }

  return (
    <>
      <ListItem.Swipeable
        leftContent={(reset) => (
          <Pressable
            style={styles.swipeIcon}
            onPress={() => {
              userEaten(id, auth.currentUser.uid);
            }}
          >
            <Ionicons
              name="trash-bin-outline"
              size={30}
              color={"red"}
            ></Ionicons>
          </Pressable>
        )}
        rightContent={(reset) => (
          <Pressable
            style={styles.swipeIcon}
            onPress={() => userBinned(id, auth.currentUser.uid)}
          >
            <Ionicons
              name="trash-bin-outline"
              size={30}
              color={"red"}
            ></Ionicons>
          </Pressable>
        )}
      >
        <View style={styles.pantryItemParentContainer}>
          <ListItem.Content>
            <Image
              style={styles.tinyCategoryIcon}
              source={require("../screens/Random.png")}
            />
          </ListItem.Content>
          <ListItem.Content style={styles.pantryItemName}>
            <ListItem.Title>{name}</ListItem.Title>
          </ListItem.Content>

          <ListItem.Content
            style={{
              ...styles.pantryExpiryDate,
              paddingBottom: "3%",
              paddingTop: "3%",
            }}
          >
            <ListItem.Title>{expiry} days left</ListItem.Title>

            {expiry < 1 && (
              <View
                style={{
                  ...styles.pantryExpiryDate,
                  backgroundColor: "gray",
                }}
              />
            )}
            {expiry >= 1 && expiry < 3 && (
              <View
                style={{
                  ...styles.pantryExpiryDate,
                  backgroundColor: "#DE4D28",
                }}
              />
            )}
            {expiry >= 3 && expiry < 5 && (
              <View
                style={{
                  ...styles.pantryExpiryDate,
                  backgroundColor: "#FEA62A",
                }}
              />
            )}
            {expiry >= 5 && (
              <View
                style={{
                  ...styles.pantryExpiryDate,
                  backgroundColor: "#0E7835",
                }}
              />
            )}
          </ListItem.Content>

          {/* <ListItem.Chevron /> */}
        </View>
      </ListItem.Swipeable>
    </>
  );
}
