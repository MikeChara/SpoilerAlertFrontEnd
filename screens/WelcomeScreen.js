import { Text, View, Pressable, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen({ styles }) {
  const navigation = useNavigation();
  return (
    <View style={styles.wholepagecontainer}>
      <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 26 }}>
        SpoilerAlert!
      </Text>
      <Image
        source={require("./Animation.gif")}
        style={{ width: 400, height: 400, opacity: 0.3, alignSelf: "center" }}
      />
      <Text style={{ fontSize: 16, textAlign: "center" }}>
        Sign in or sign up to use Spoiler Alert!
      </Text>
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
