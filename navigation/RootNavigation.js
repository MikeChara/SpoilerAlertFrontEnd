import React, { useState } from "react";
import MainContainer from "./MainContainer";
import AuthContainer from "./AuthContainer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";
import verifyAndInsert from "../Functions/verifyAndInsert";

export default function RootNavigation({ styles }) {
  const [loggedIn, setLoggedIn] = useState(false);

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
    <MainContainer styles={styles} />
  ) : (
    <AuthContainer styles={styles} />
  );
}
