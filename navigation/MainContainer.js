import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { auth } from "../firebase-config";
import { myIP } from "@env";
import Tabs from "./Tabs";
import ManualModal from "../screens/Modal";
import { StyleSheet, View } from "react-native";

function MainContainer({ styles }) {
  const [foodList, setFoodList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    async function getUserFood(uid) {
      const allFood = await fetch(
        `https://spoiler-alert-backend.onrender.com/pantry/${uid}`
      );
      const data = await allFood.json();
      const food = data.payload;
      setFoodList(food);
    }
    getUserFood(auth.currentUser.uid);
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Tabs
        styles={styles}
        foodList={foodList}
        setFoodList={setFoodList}
        setModalVisible={setModalVisible}
      />
      <View style={styles.modalContainer}>
        <ManualModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          styles={styles}
        />
      </View>
    </View>
  );
}

export default MainContainer;
