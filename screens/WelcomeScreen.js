import { Text, View, Pressable, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen({ styles }) {
  const navigation = useNavigation();
  return (
    <>
      <Image
        source={require("../assets/foodiconbg-light.png")}
        style={styles.backgroundcover}
      />
      <View style={styles.wholepagecontainer}>
        <Text style={{ ...styles.title, marginBottom: "15%" }}>
          SpoilerAlert!
        </Text>
        <Text style={{ ...styles.bodyText, marginBottom: "5%" }}>
          Log in or sign up to use Spoiler Alert!
        </Text>
        <Pressable
          style={{ ...styles.greenButton, marginBottom: "5%" }}
          onPress={() => navigation.navigate("Log In")}
        >
          <Text style={styles.greenButtonText}>Log In</Text>
        </Pressable>

        <Pressable
          style={styles.greenButton}
          onPress={() => navigation.navigate("Sign Up")}
        >
          <Text style={styles.greenButtonText}>Sign Up</Text>
        </Pressable>
        <Image source={require("./Animation.gif")} style={styles.logoGif} />
      </View>
    </>
  );
}
