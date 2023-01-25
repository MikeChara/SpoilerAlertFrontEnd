import {
  Text,
  View,
  TextInput,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase-config";

export default function SignUpScreen({ styles }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [displayName, setDisplayName] = useState();

  async function handleSignUp() {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: displayName });
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
              Create Account
            </Text>
            <Text style={styles.loginSubtitle}>
              Create a new account to use SpoilerAlert
            </Text>
            <Text style={styles.label}>Your Name</Text>
            <TextInput
              style={styles.textInputBox}
              placeholder="Name"
              value={displayName}
              onChangeText={(text) => setDisplayName(text)}
            />
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
            <Text style={styles.bodyTextItalic}>
              Currently only accepting .com emails and password must be 8
              characters or longer.
            </Text>
            <Pressable
              style={{ ...styles.greenButton, margin: "3%" }}
              onPress={handleSignUp}
            >
              <Text style={styles.greenButtonText}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}
