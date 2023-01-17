import { StyleSheet, Text, View, Pressable, Button, Image } from "react-native";
import React, {useEffect} from "react";
import { ListItem } from "@rneui/themed";
import Ionicons from "react-native-vector-icons/Ionicons";
import foodCooked from "../Functions/removeFoodItem";
import { auth } from "../firebase-config";

export default function FoodList({ name, expiry, id, setFoodList}) {


  async function userEaten(food_id, uid) {
    const Userthings = await fetch(`http://192.168.1.11:3000/eatFood/${food_id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    });
    const allFood = await fetch(`http://192.168.1.11:3000/pantry/${uid}`);
    const data = await allFood.json();
    const food = data.payload;
    console.log(food)
    console.log("food gotten", food);
    setFoodList(food);
  }
  
  return (
    <ListItem.Swipeable
      leftContent={(reset) => (
        <Pressable style={styles.icon} onPress={() => userEaten(id, auth.currentUser.uid)}>
          <Ionicons name="trash-bin-outline" size={30} color={"red"}></Ionicons>
        </Pressable>
      )}
      rightContent={(reset) => (
        <Pressable style={styles.icon}>
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
