import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Keyboard,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

export default function SignInScreen({ styles }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handleSignIn() {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <Image
        source={require("../assets/foodiconbg-light.png")}
        style={styles.backgroundcover}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ ...styles.wholepagecontainer, marginBottom: "30%" }}>
          <View style={styles.whitecontainerWelcome}>
            <Text style={styles.loginTitle}>Log In</Text>
            <Text style={styles.loginSubtitle}>Login to use SpoilerAlert</Text>
            <Text style={styles.label}>Your Email</Text>
            <TextInput
              style={styles.textInputBox}
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.textInputBox}
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
            />
            <Pressable
              style={{ ...styles.greenButton, height: "9%" }}
              onPress={handleSignIn}
            >
              <Text style={styles.greenButtonText}>Login</Text>
            </Pressable>

            <Pressable
              style={{ ...styles.greenButtonInvert, height: "9%" }}
              onPress={handleSignIn}
            >
              <Text style={styles.greenButtonTextInvert}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}
