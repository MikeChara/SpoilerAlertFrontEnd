import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { auth } from "../../firebase-config";
import { signOut } from "firebase/auth";

export default function ProfileScreen({ navigation }) {
  async function HandleSignOut() {
    await signOut(auth);
  }
  const center = "flex-1 items-center justify-center";
  return (
    <View className={center}>
      <Text
        onPress={() => navigation.navigate("Home")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Profile
      </Text>
      <Pressable style={styles.button} onPress={HandleSignOut}>
        <Text style={styles.text}>Sign Out</Text>
      </Pressable>
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
});
