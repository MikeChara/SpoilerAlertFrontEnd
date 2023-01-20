import * as React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
import { Input, Layout } from "@ui-kitten/components";

export default function ProfileScreen({ styles }) {
  async function HandleSignOut() {
    await signOut(auth);
  }

  return (
    <>
      <View style={styles.profilepagecontainer}>
        <View style={{ backgroundColor: "red", top: 0, margin: 0 }}>
          <Image
            source={require("../assets/foodiconbg.png")}
            style={{
              width: 400,
              height: 100,
              opacity: 0.5,
            }}
          />
        </View>
        <Image
          source={require("./Cranks-1.png")}
          style={{
            width: 120,
            height: 120,
            top: 40,
            position: "absolute",
          }}
        />
      </View>
      <View style={{ ...styles.profilepagecontainer, top: 70 }}>
        <Text style={{ fontSize: 26, fontWeight: "bold" }}>
          {auth.currentUser.displayName}
        </Text>
        <Pressable style={styles.purplebutton}>
          <Text style={styles.purplebuttontext}>Edit Profile</Text>
        </Pressable>
        <Text style={styles.subtitle}>Username</Text>
        <Input
          style={styles.textinput}
          disabled={true}
          placeholder={auth.currentUser.displayName}
        />
        <Text style={styles.subtitle}>Email</Text>
        <Input
          style={styles.textinput}
          disabled={true}
          placeholder={auth.currentUser.email}
        />
        <Pressable
          style={{ ...styles.purplebutton, marginTop: 8 }}
          onPress={HandleSignOut}
        >
          <Text style={styles.purplebuttontext}>Sign Out</Text>
        </Pressable>
      </View>
    </>
  );
}
