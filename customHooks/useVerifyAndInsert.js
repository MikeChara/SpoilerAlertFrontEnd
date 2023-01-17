import { StyleSheet, Text, View } from "react-native";
import React from "react";
// import * as dotenv from "dotenv";
// dotenv.config();
// import express from "express";
// const myIP = process.env.myIP;
// const PORT = process.env.PORT;
import { PORT, myIP } from "@env";

//because we're using a phone and a local host
//you must for some raison put in a IP not localhost
//ask Nick the Wizard how to do this
export default async function useVerifyAndInsert(user) {
  const Userthings = await fetch(`http://${myIP}:${PORT}/userVerify`, {
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
