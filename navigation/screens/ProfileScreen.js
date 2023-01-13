import * as React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { auth } from "../../firebase-config";
import { signOut } from "firebase/auth";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Input, Layout } from "@ui-kitten/components";

export default function ProfileScreen({ navigation }) {
  async function HandleSignOut() {
    await signOut(auth);
  }
  const center = "flex-1 items-center ";
  const [value, setValue] = React.useState("");
  return (
    <View className={center}>
      <Image
        source={require("./Cranks-1.png")}
        style={{ width: 120, height: 120 }}
      />
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>Tom Saver</Text>
      <Text style={{ fontSize: 14, padding: 5 }}>@TomSaver</Text>

      <Pressable style={styles.editButton}>
        <Text style={styles.editText}>Edit Profile</Text>
      </Pressable>
      <Text style={styles.subtitle}>Username</Text>
      <Input style={styles.input} disabled={true} placeholder="TomSaver" />

      <Text style={styles.subtitle}>Email</Text>
      <Input
        style={styles.input}
        disabled={true}
        placeholder="tomsaver@gmail.com"
      />
      <Text style={styles.subtitle}>Full name</Text>
      <Input style={styles.input} disabled={true} placeholder="Tom Saver" />
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
    width: "80%",
    height: 40,
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

  editText: {
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
  },
  editButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 170,
    height: 30,
    borderRadius: 10,
    elevation: 0,
    backgroundColor: "lightgrey",
  },

  input: {
    margin: 2,
    width: "80%",
  },

  subtitle: {
    margin: 2,
    width: "80%",
    fontWeight: "bold",
    padding: 6,
  },
});
