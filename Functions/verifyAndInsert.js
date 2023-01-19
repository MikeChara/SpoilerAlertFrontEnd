import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { backend_link } from "@env";

export default async function verifyAndInsert(user) {
  const Userthings = await fetch(
    `https://spoiler-alert-backend.onrender.com/userVerify`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uid: user }),
    }
  );
}
