import * as React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { auth } from "../../firebase-config";
import { signOut } from "firebase/auth";
import Ionicons from "react-native-vector-icons/Ionicons";

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
      <Ionicons
        name="person-circle-outline"
        size={150}
        color={"purple"}
      ></Ionicons>
      <Pressable style={styles.button2} onPress={HandleSignOut}>
        <Text style={styles.text}>Edit Profile</Text>
      </Pressable>
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>UserName</Text>
      <Text style={{ textDecorationLine: "underline" }}>I'm underlined!</Text>
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>Email</Text>
      <Text style={{ textDecorationLine: "underline" }}>I'm underlined!</Text>
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
  button2: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 20,
    elevation: 0,
    backgroundColor: "grey",
  },
});
