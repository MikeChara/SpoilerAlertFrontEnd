import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default async function useVerifyAndInsert(user) {
  const backendReply = await fetch("http://localhost:3000/userVerify", {
    method: "POST",
    headers: { "content-type": "application/json" },
    mode: "cors",
    body: JSON.stringify(user),
  });
  return backendReply.error ? alert("please try again later") : null;
}

const styles = StyleSheet.create({});
