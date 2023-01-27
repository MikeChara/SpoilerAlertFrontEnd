import React, { useState } from "react";
import {
  View,
  Button,
  FlatList,
  Text,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import OCRStringSort from "../Functions/OCRStringstuff";
import ScanList from "../Components/ScanList";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { auth } from "../firebase-config";
import * as ImagePicker from "expo-image-picker";
import * as ModalNavigation from "../navigation/ModalNavigate.js";
import { SafeAreaView } from "react-native-safe-area-context";

function Photo({ foodList, setFoodList, styles }) {
  // The path of the picked image
  const [pickedImagePath, setPickedImagePath] = useState("");
  const [text, setText] = useState("");
  const [foodPriceArray, setFoodPriceArray] = useState([]);
  const priceRegex = /^\d+(\.\d{1,2})?$/;

  function addFoodButtonHandle(uid) {
    let pass = true;
    for (let i = 0; i < foodPriceArray.length; i++) {
      if (!priceRegex.test(foodPriceArray[i].price)) {
        pass = false;
        break;
      }
    }
    if (pass) {
      addFood(uid);
      ModalNavigation.navigate("Pantry");
    } else {
      alert("Please ensure all prices are valid to submit");
    }
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
    <>
      <Image
        source={require("../assets/foodiconbg-light.png")}
        style={styles.backgroundcover}
      />
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View style={{ flex: 1, flexDirection: "column" }}>
          {foodPriceArray.length > 0 ? null : (
            <>
              <Pressable
                onPress={showImagePicker}
                style={{
                  ...styles.greenButton,
                  width: "40%",
                  marginBottom: "15%",
                }}
              >
                <Text style={styles.greenButtonText}>Select an image</Text>
              </Pressable>

              <Pressable
                onPress={openCamera}
                style={{ ...styles.greenButton, width: "40%" }}
              >
                <Text style={styles.greenButtonText}>Open Camera</Text>
              </Pressable>
            </>
          )}
        </View>
        {foodPriceArray.length === 0 ? null : (
          <View>
            <FlatList
              style={{ height: "82%" }}
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
            <View
              style={{ position: "absolute", bottom: 20, alignSelf: "center" }}
            >
              <TouchableOpacity
                onPress={() => addFoodButtonHandle(auth.currentUser.uid)}
                style={styles.greenButton}
              >
                <Text style={styles.greenButtonText}>Add to Pantry</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
      {/* { foodPriceArray.length === 0 ? null : (<Image source={require("./Animation.gif")} style={{...styles.logoGif, marginBottom:'10%'}}  />)}     */}
    </>
  );
}

export default Photo;
