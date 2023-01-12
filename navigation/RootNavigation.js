import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import MainContainer from "./MainContainer";
import AuthContainer from "./AuthContainer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";
import useVerifyAndInsert from "../customHooks/useVerifyAndInsert";

export default function RootNavigation() {
  const [loggedIn, setLoggedIn] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // user is signed in
      console.log(user);
      console.log(user.displayName);
      setLoggedIn(true);
      useVerifyAndInsert(user.uid);
    } else {
      // User is signed out
      // ...
      setLoggedIn(false);
    }
  });

  return loggedIn ? <MainContainer /> : <AuthContainer />;
}

const styles = StyleSheet.create({});
