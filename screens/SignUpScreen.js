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
        <View style={styles.wholepagecontainer}>
          <View style={styles.whitecontainerWelcome}>
            <Text style={styles.loginTitle}>Create Account</Text>
            <Text style={styles.loginSubtitle}>Login to use SpoilerAlert</Text>
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
            <Text>
              Currently only accepting .com emails. Passwords must be 8
              characters or longer.
            </Text>
          </View>
          <Pressable style={styles.greenButton} onPress={handleSignUp}>
            <Text style={styles.greenButtonText}>Sign Up</Text>
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}
