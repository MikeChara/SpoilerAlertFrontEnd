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
      // console.log("whole arse user", user);
      // console.log("user uid", user.uid);
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

async function handleClick() {
  await fetch("http://localhost:3000/api/posts", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      post_title: title,
      post_content: contentText,
    }),
  }).then(() => {
    props.onPostCreated();
    setContentText("");
    setTitle("");
  });
}
