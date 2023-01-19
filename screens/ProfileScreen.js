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
    <View style={styles.wholepagecontainer}>
      <Image
        source={require("./Cranks-1.png")}
        style={{ width: 120, height: 120, backgroundColor: "red" }}
      />
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>
        {auth.currentUser.displayName}
      </Text>
      {/* <Text style={{ fontSize: 14, padding: 5 }}>
        @{auth.currentUser.displayName}
      </Text> */}
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
      {/* <Text style={styles.subtitle}>Full name</Text>
      <Input
        style={styles.textinput}
        disabled={true}
        placeholder={auth.currentUser.displayName}
      /> */}
      <Pressable
        style={{ ...styles.purplebutton, marginTop: 8 }}
        onPress={HandleSignOut}
      >
        <Text style={styles.purplebuttontext}>Sign Out</Text>
      </Pressable>
    </View>
  );
}
