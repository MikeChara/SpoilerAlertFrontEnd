import { StyleSheet, Text, View } from "react-native";
import React from "react";

//because we're using a phone and a local host
//you must for some raison put in a IP not localhost
//ask Nick the Wizard how to do this
export default async function useVerifyAndInsert(user) {
  const Userthings = await fetch("http://192.168.0.13:3000/userVerify", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ uid: user }),
  });
  console.log("userthings was gotten?", Userthings);
}
// console.log("return about to fire?");
// return backendReply ? null : alert("please try again later");

const styles = StyleSheet.create({});
