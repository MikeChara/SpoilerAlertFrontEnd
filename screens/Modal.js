import React, { useState } from "react";
import * as ModalNavigation from "../navigation/ModalNavigate.js";
import { useNavigation } from "@react-navigation/native";
import {
	Alert,
	Modal,
	Text,
	Pressable,
	View,
	TouchableOpacity,
} from "react-native";

function ManualModal({ setModalVisible, modalVisible, styles }) {
  const onPressAddManually = () => {
    setModalVisible(!modalVisible);
    ModalNavigation.navigate("Add Item");
  };
  const onPressAddScan = () => {
    setModalVisible(!modalVisible);
    ModalNavigation.navigate("Scan");
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity
          style={styles.centeredView}
          activeOpacity={1}
          onPressOut={() => {
            setModalVisible(false);
          }}
        >
          <View
            style={styles.centeredView}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Update Options</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={onPressAddScan}
              >
                <Text style={styles.textStyle}>Scan Receipt</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Upload Receipt</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={onPressAddManually}
              >
                <Text style={styles.textStyle}>Add Manually</Text>
              </Pressable>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );


}

export default ManualModal;
