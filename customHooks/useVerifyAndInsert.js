import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default async function useVerifyAndInsert(user) {
  await fetch("http://localhost:3000/userVerify", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ uid: user }),
  });
}
// console.log("return about to fire?");
// return backendReply ? null : alert("please try again later");

const styles = StyleSheet.create({});
