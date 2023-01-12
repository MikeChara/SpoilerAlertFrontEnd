import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>WelcomeScreen</Text>
      <View style={styles.spacing}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Sign In")}
        >
          <Text style={styles.text}>Sign In</Text>
        </Pressable>
      </View>
      <View style={styles.spacing}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Sign Up")}
        >
          <Text style={styles.text}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 20,
    elevation: 0,
    backgroundColor: "#5951B7",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  spacing: {
    padding: 20,
  },
});
