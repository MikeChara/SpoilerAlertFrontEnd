import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function PlaceHolder() {
  return (
    <View style={{ backgroundColor: "white" }}>
      <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 26 }}>
        Coming Soon
      </Text>
      <Image
        source={require("./Animation.gif")}
        style={{ width: 400, height: 400, opacity: 0.3, alignSelf: "center" }}
      />
      <Text style={{ alignSelf: "center", fontSize: 16, textAlign: "center" }}>
        This page is still under construction, Come back later for Social
        features
      </Text>
    </View>
  );
}
