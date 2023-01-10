import * as React from "react";
import { View, Text, Button, Heading, StyleSheet } from "react-native";
import { ListItem } from "@rneui/themed";

export default function PantryScreen({ navigation }) {
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
        <Button
          title="Delete"
          onPress={() => reset()}
          icon={{ name: "delete", color: "red" }}
          buttonStyle={{ minHeight: "100%", backgroundColor: "red" }}
        />
      )}
    >
      <ListItem.Content>
        <ListItem.Title>Hello Swiper</ListItem.Title>
        <ListItem.Subtitle>CEO, Example.com</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem.Swipeable>
  );
}
