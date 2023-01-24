import * as React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
import { Input, Layout } from "@ui-kitten/components";
import { getUserDetails } from "../Fetches/getRequests.js";
import { useState, useEffect } from "react";

export default function ProfileScreen({ styles }) {
  const [userDetails, setUserDetails] = useState([]);
  async function HandleSignOut() {
    await signOut(auth);
  }
  useEffect(() => {
    getUserDetails(auth.currentUser.uid, setUserDetails);
  }, []);

  // const pageColor = "green";

  return (
    <>
      <Image
        source={require("../assets/foodiconbg-light.png")}
        style={styles.backgroundcover}
      />

      <View style={{ ...styles.inputPageContainer, top: "3%" }}>
        <Image
          source={require("./Cranks-1.png")}
          style={styles.profilepicture}
        />

        <Text style={{ ...styles.title, marginTop: "2%" }}>
          {auth.currentUser.displayName}
        </Text>
        <Pressable style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </Pressable>
        <Text style={{ ...styles.subtitle, paddingTop: "10%" }}>Username</Text>
        <Input
          style={styles.textInputBox}
          disabled={true}
          placeholder={auth.currentUser.displayName}
        />
        <Text style={styles.subtitle}>Email</Text>
        <Input
          style={styles.textInputBox}
          disabled={true}
          placeholder={auth.currentUser.email}
        />
        <Text style={styles.subtitle}>House</Text>
        <Input
          style={styles.textInputBox}
          disabled={true}
          placeholder={userDetails[0]?.name}
        />
        <Pressable
          style={{ ...styles.greenButton, marginTop: 120 }}
          onPress={HandleSignOut}
        >
          <Text style={styles.greenButtonText}>Sign Out</Text>
        </Pressable>
      </View>
    </>
  );
}
