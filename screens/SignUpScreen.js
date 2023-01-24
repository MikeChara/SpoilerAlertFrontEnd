import {
  Text,
  View,
  TextInput,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.wholepagecontainer}>
        <Text>Sign Up Here...</Text>
        <TextInput
          style={styles.textInputBox}
          placeholder="Name"
          value={displayName}
          onChangeText={(text) => setDisplayName(text)}
        />
        <TextInput
          style={styles.textInputBox}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.textInputBox}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <Pressable style={styles.greenButton} onPress={handleSignUp}>
          <Text style={styles.greenButtonText}>Sign Up</Text>
        </Pressable>
        <Text>
          Currently only accepting .com emails. Passwords must be 8 characters
          or longer.
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
