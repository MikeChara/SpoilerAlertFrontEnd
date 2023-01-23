import { StyleSheet, Text, View, Pressable, Button, Image } from "react-native";
import React from "react";
import { ListItem } from "@rneui/themed";
import Ionicons from "react-native-vector-icons/Ionicons";
import { auth } from "../firebase-config";
import { backend_link } from "@env";
import { getAllStats, getWeekStats } from "../Fetches/getRequests";
import { eatenFoodPatch, binnedFoodPatch } from "../Fetches/patchRequests";
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
            style={styles.icon}
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
            style={styles.icon}
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
        <View>
          <ListItem.Content>
            <Image
              style={styles.tinyLogo}
              source={require("../screens/Random.png")}
            />
          </ListItem.Content>
          <ListItem.Content>
            <ListItem.Title>{name}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Content>
            <ListItem.Title>{expiry} days left</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </View>
      </ListItem.Swipeable>
    </>
  );
}
