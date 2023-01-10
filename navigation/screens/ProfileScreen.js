import * as React from "react";
import { View, Text } from "react-native";

export default function ProfileScreen({ navigation }) {
  const center = "flex-1 items-center justify-center";
  return (
    <View className={center}>
      <Text
        onPress={() => navigation.navigate("Home")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Profile
      </Text>
    </View>
  );
}
