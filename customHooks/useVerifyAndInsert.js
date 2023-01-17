import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { environmentVariables } from "../data.js";
const myIP = environmentVariables.myIP;
const PORT = environmentVariables.PORT;

export default async function useVerifyAndInsert(user) {
  const Userthings = await fetch(`http://${myIP}:${PORT}/userVerify`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ uid: user }),
  });
}
