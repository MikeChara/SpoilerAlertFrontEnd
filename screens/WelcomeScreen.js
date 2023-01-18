import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen({ styles }) {
  const navigation = useNavigation();
  return (
    <View style={styles.wholepagecontainer}>
      <Pressable
        style={{ ...styles.purplebutton, marginBottom: 8 }}
        onPress={() => navigation.navigate("Sign In")}
      >
        <Text style={styles.purplebuttontext}>Sign In</Text>
      </Pressable>

      <Pressable
        style={styles.purplebutton}
        onPress={() => navigation.navigate("Sign Up")}
      >
        <Text style={styles.purplebuttontext}>Sign Up</Text>
      </Pressable>
    </View>
  );
}
