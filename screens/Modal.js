import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
} from "react-native";

function ManualModal({ setModalVisible, modalVisible }) {
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
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add Item</Text>
            <Text style={styles.modalText}> Item</Text>
            <TextInput
              style={{
                width: "80%",
                height: "6%",
                borderColor: "gray",
                borderWidth: 1,
                padding: 20,
                margin: 20,
              }}
              placeholder="Enter item"
              // onChangeText={(text) => setItem(text)}
            />
            <Text style={styles.modalText}> Expiry</Text>
            <TextInput
              style={{
                width: "80%",
                height: "6%",
                borderColor: "gray",
                borderWidth: 1,
                padding: 20,
                margin: 20,
              }}
              placeholder="Enter item"
              // onChangeText={(text) => setItem(text)}
            />
            <Text style={styles.modalText}> Price</Text>
            <TextInput
              style={{
                width: "80%",
                height: "6%",
                borderColor: "gray",
                borderWidth: 1,
                padding: 20,
                margin: 20,
              }}
              placeholder="Enter item"
              // onChangeText={(text) => setItem(text)}
            />

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Add</Text>
            </Pressable>
          </View>
        </View>
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
  },
});

export default ManualModal;
