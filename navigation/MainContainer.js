import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { PORT, myIP } from "@env";
import { auth } from "../firebase-config";
import Tabs from "./Tabs";
import ManualModal from "../screens/Modal";

function MainContainer({ styles }) {
  const [foodList, setFoodList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    async function getUserFood(uid) {
      const allFood = await fetch(`http://${myIP}:${PORT}/pantry/${uid}`);
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
