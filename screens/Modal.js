import React, { useState } from "react";
// import * as ModalNavigation from "../navigation/ModalNavigate.js";
import {
  Alert,
  // Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";



function ManualModal({ setModalVisible, modalVisible }) {
  const onPressAddManually = () => {
    setModalVisible(!modalVisible);
    ModalNavigation.navigate("Home");
  };
  return (
    <View 
    style={styles.centeredView}
    >
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
            <View 
            style={styles.modalView}
            >
              <Text 
              style={styles.modalText}
              >Update Options</Text>
              <Pressable
               style={[styles.button, styles.buttonClose]}
               >
                <Text 
                style={styles.textStyle}
                >Scan Receipt</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text 
                style={styles.textStyle}
                >Upload Receipt</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={onPressAddManually}
              >
                <Text 
                style={styles.textStyle}
                >Add Manually</Text>
              </Pressable>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    height: "80%",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    paddingVertical: 12,
    paddingHorizontal: 60,
    margin: 10,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default ManualModal;
