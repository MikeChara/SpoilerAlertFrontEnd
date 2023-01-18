import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { auth } from "../firebase-config";
import { backend_link } from "@env";
import Tabs from "./Tabs";
import ManualModal from "../screens/Modal";
import { StyleSheet, View } from "react-native";

// Screens
import HomeScreen from "../screens/HomeScreen";
import PantryScreen from "../screens/PantryScreen";
import AddItemScreen from "../screens/AddItemScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { applyActionCode } from "firebase/auth";

//Screen names
const pantryName = "Pantry";
const addItemName = "Add Item";
const homeName = "Home";
const profileName = "Profile";



function MainContainer({ styles }) {
  const [foodList, setFoodList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    async function getUserFood(uid) {
      const allFood = await fetch(
        `${backend_link}/pantry/${uid}`
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
        />
      </View>
    </View>
  );
}

export default MainContainer;

const styles = StyleSheet.create({
  modalContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
});
