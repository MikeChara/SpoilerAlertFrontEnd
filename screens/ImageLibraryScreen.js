import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";
import OCRStringSort from "../Functions/OCRStringstuff";
import ScanList from "../Components/ScanList";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { auth } from "../firebase-config";
import * as ImagePicker from "expo-image-picker";
import * as ModalNavigation from "../navigation/ModalNavigate.js";

function Photo({ foodList, setFoodList }) {
  // The path of the picked image
  const [pickedImagePath, setPickedImagePath] = useState("");
  const [text, setText] = useState("");
  const [foodPriceArray, setFoodPriceArray] = useState([]);

  //navigates back to pantry screen
  function backToPantry() {
    ModalNavigation.navigate("Pantry");
  }

  //posts data to database
  async function addFood(uid) {
    const Userthings = await fetch(
      `https://spoiler-alert-backend.onrender.com/addItem/${uid}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(foodPriceArray),
      }
    );
    const allFood = await fetch(
      `https://spoiler-alert-backend.onrender.com/pantry/${uid}`
    );
    const data = await allFood.json();
    const food = data.payload;
    setFoodList(food);
    backToPantry();
  }

  // This function is triggered when the "Select an image" button pressed
  const showImagePicker = async () => {
    // Ask the user for the permission to access the media library
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const { cancelled, uri, base64 } =
      await ImagePicker.launchImageLibraryAsync({ base64: true });

    // Explore the result

    if (!cancelled) {
      setPickedImagePath(uri);
      try {
        // Call the Google API here
        const result = await callGoogleVisionAsync(base64);
        setText(result);
      } catch (error) {
        setText(`Error: ${error.message}`);
      }
    }
  };

  const API_URL = `https://vision.googleapis.com/v1/images:annotate?key=AIzaSyAGJHE1OfMViyNtF3ypB07n2zn7NNw80Ak`;

  async function callGoogleVisionAsync(image) {
    const body = {
      requests: [
        {
          image: {
            content: image,
          },
          features: [
            {
              type: "TEXT_DETECTION",
              maxResults: 1,
            },
          ],
        },
      ],
    };

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const result = await response.json();
    console.log(result.responses[0].fullTextAnnotation.text);
    setFoodPriceArray(
      OCRStringSort(result.responses[0].fullTextAnnotation.text)
    );
  }
  // //This function is triggered when the "Open camera" button pressed
  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const { cancelled, uri, base64 } = await ImagePicker.launchCameraAsync({
      base64: true,
    });

    // Explore the result

    if (!cancelled) {
      setPickedImagePath(uri);
      try {
        // Call the Google API here
        const result = await callGoogleVisionAsync(base64);
        setText(result);
      } catch (error) {
        setText(`Error: ${error.message}`);
      }
    }
  };

  return (
    <View>
      <View style={styles.buttonContainer}>
        <Button onPress={showImagePicker} title="Select an image" />
        <Button onPress={openCamera} title="Open camera" />
        {/* <Button onPress={HandleText} title="Show Text" /> */}
      </View>
      {foodPriceArray === [] ? null : (
        <View>
          <FlatList
            data={foodPriceArray}
            renderItem={({ item, index }) => {
              return (
                <View style={{ flex: 1, flexDirection: "column" }}>
                  <GestureHandlerRootView>
                    <ScanList
                      name={item.name}
                      price={item.price}
                      foodPriceArray={foodPriceArray}
                      setFoodPriceArray={setFoodPriceArray}
                      index={index}
                      styles={styles}
                    />
                  </GestureHandlerRootView>
                </View>
              );
            }}
          />
          <Button title="Add" onPress={() => addFood(auth.currentUser.uid)} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: 400,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default Photo;
