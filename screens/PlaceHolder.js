import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function PlaceHolder({ styles }) {
  return (
    <>
      <Image
        source={require("../assets/foodiconbg-light.png")}
        style={styles.backgroundcover}
      />
      <Text style={styles.subtitle}>Coming Soon</Text>
      <Image source={require("./Animation.gif")} style={styles.logoGif} />
      <Text style={{ ...styles.bodyText, fontSize: 20 }}>
        This page is still under construction
      </Text>
      <Text style={{ ...styles.bodyText, fontSize: 20, paddingTop: "2%" }}>
        Come back later for social features
      </Text>
    </>
  );
}
