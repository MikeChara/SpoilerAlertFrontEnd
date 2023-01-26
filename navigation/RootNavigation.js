import React, { useState } from "react";
import MainContainer from "./MainContainer";
import AuthContainer from "./AuthContainer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";
import verifyAndInsert from "../Functions/verifyAndInsert";
import { useFonts } from "expo-font";

export default function RootNavigation({ styles }) {
  const [loggedIn, setLoggedIn] = useState(false);

  const [fontsLoaded] = useFonts({
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
  });

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // user is signed in
      setLoggedIn(true);
      verifyAndInsert(user.uid);
    } else {
      // User is signed out
      setLoggedIn(false);
    }
  });

  return loggedIn ? (
    <MainContainer fontsLoaded={fontsLoaded} styles={styles} />
  ) : (
    <AuthContainer styles={styles} />
  );
}
