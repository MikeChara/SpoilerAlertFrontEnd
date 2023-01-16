import { StyleSheet, Text, View, Pressable, Button, Image } from "react-native";
import React from "react";
import { ListItem } from "@rneui/themed";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function FoodList({ name, expiry }) {
  return (
    <ListItem.Swipeable
      leftContent={(reset) => (
        <Button
          title="Info"
          onPress={() => reset()}
          icon={{ name: "info", color: "white" }}
          buttonStyle={{ minHeight: "100%" }}
        />
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