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
import { registerIndieID } from "native-notify";

export default function SignInScreen({ styles }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function yourLoginFunction(uid) {
    // Native Notify Indie Push Registration Code
    registerIndieID(`${uid}`, 6107, "RscfdJGUHSLru74JJd6STe");
    console.log(uid);
    // End of Native Notify Code
  }

  async function handleSignIn() {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      yourLoginFunction(auth.currentUser?.uid);
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
        <View style={{ ...styles.wholepagecontainer, marginBottom: "50%" }}>
          <View style={styles.whitecontainerWelcome}>
            <Text style={{ ...styles.loginTitle, marginTop: "5%" }}>
              Log In
            </Text>
            <Text style={styles.loginSubtitle}>Log in to use SpoilerAlert</Text>
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
              style={{ ...styles.greenButton, margin: "2%" }}
              onPress={handleSignIn}
            >
              <Text style={styles.greenButtonText}>Log In</Text>
            </Pressable>

            <Pressable style={styles.greenButtonInvert} onPress={handleSignIn}>
              <Text style={styles.greenButtonTextInvert}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}
