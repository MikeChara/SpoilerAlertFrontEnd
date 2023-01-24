import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  FlatList,
  TextInput,
} from "react-native";
import OCRStringSort from "../OCRStringstuff";
import DatepickerSimpleUsageShowcase from "../Components/Calendar";
// import { RadioButton } from "react-native-paper";
import RadioButtonRN from "radio-buttons-react-native";
import ScanList from "../Components/ScanList";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import * as ImagePicker from "expo-image-picker";

function Photo({}) {
  // The path of the picked image
  const [pickedImagePath, setPickedImagePath] = useState("");
  const [text, setText] = useState("");
  const [foodPriceArray, setFoodPriceArray] = useState([]);

  const radiotButtondata = [
    {
      label: "data 1",
      accessibilityLabel: "Your label",
    },
    {
      label: "data 2",
      accessibilityLabel: "Your label",
    },
  ];

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

    setFoodPriceArray(
      OCRStringSort(result.responses[0].fullTextAnnotation.text)
    );

    return result.responses[0].fullTextAnnotation.text;
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

  const handleExpiry = (index, expiry) => {
    const newFoodPriceArray = [...foodPriceArray];
    newFoodPriceArray[index].expiry = expiry;
    setFoodPriceArray(newFoodPriceArray);
    console.log(newFoodPriceArray);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.buttonContainer}>
        <Button onPress={showImagePicker} title="Select an image" />
        <Button onPress={openCamera} title="Open camera" />
        {/* <Button onPress={HandleText} title="Show Text" /> */}
      </View>
      {foodPriceArray === [] ? null : (
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
      )}
    </View>
  );
}

// Kindacode.com
// Just some styles
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
  // imageContainer: {
  //   padding: 30,
  // },
  // image: {
  //   width: 400,
  //   height: 300,
  //   resizeMode: "cover",
  // },
});

export default Photo;
