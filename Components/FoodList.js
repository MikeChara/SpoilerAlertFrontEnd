import { StyleSheet, Text, View, Pressable, Button, Image } from "react-native";
import React from "react";
import { ListItem } from "@rneui/themed";
import Ionicons from "react-native-vector-icons/Ionicons";
import { auth } from "../firebase-config";
import { backend_link } from "@env";
import { getAllStats, getWeekStats } from "../Fetches/getRequests";
import { eatenFoodPatch, binnedFoodPatch } from "../Fetches/patchRequests";

export default function FoodList({
  name,
  expiry,
  id,
  setFoodList,
  index,
  foodList,
  setAllStats,
  setWeekStats
}) {
  async function userEaten(food_id, uid) {
    eatenFoodPatch(food_id)
    setFoodList([
      ...foodList.slice(0, index),
      ...foodList.slice(index + 1, foodList.length),
    ]);
    getAllStats(uid, setAllStats)
    getWeekStats(uid, setWeekStats)
  }

  async function userBinned(food_id, uid) {
    binnedFoodPatch(food_id)
    setFoodList([
      ...foodList.slice(0, index),
      ...foodList.slice(index + 1, foodList.length),
    ]);
    getAllStats(uid, setAllStats)
    getWeekStats(uid, setWeekStats)
  }

  return (
    <ListItem.Swipeable
      leftContent={(reset) => (
        <Pressable
          style={styles.icon}
          onPress={() => {
            userEaten(id, auth.currentUser.uid);
          }}
        >
          <Ionicons name="trash-bin-outline" size={30} color={"red"}></Ionicons>
        </Pressable>
      )}
      rightContent={(reset) => (
        <Pressable
          style={styles.icon}
          onPress={() => userBinned(id, auth.currentUser.uid)}
        >
          <Ionicons name="trash-bin-outline" size={30} color={"red"}></Ionicons>
        </Pressable>
      )}
    >
      <ListItem.Content>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuYW5hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
          }}
        />
      </ListItem.Content>
      <ListItem.Content>
        <ListItem.Title>{name}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Content>
        <ListItem.Title>{expiry} days left</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem.Swipeable>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 26,
  },
  icon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
