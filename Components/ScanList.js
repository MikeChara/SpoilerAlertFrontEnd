import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Button,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ListItem } from "@rneui/themed";
import ScanCalendar from "./ScanCalendar";

export default function ScanList({
  index,
  name,
  price,
  styles,
  foodPriceArray,
  setFoodPriceArray,
}) {
  const [displayPrice, setDisplayPrice] = React.useState("£");

  function handleRemove(index) {
    setFoodPriceArray([
      ...foodPriceArray.slice(0, index),
      ...foodPriceArray.slice(index + 1, foodPriceArray.length),
    ]);
  }
  function onNameChange(item) {
    const newFoodPriceArray = [...foodPriceArray];
    newFoodPriceArray[index].name = item;
    setFoodPriceArray(newFoodPriceArray);
  }
  function onPriceChange(item) {
    const newFoodPriceArray = [...foodPriceArray];
    newFoodPriceArray[index].price = item.slice(1, item.length);
    setFoodPriceArray(newFoodPriceArray);
  }
  return (
    <>
      <Image
        source={require("../assets/foodiconbg-light.png")}
        style={styles.backgroundcover}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ListItem.Swipeable
          leftContent={(reset) => (
            <Pressable
              style={styles.swipeIcon}
              onPress={() => {
                handleRemove(index);
              }}
            >
              <Ionicons
                name="trash-bin-outline"
                size={30}
                color={"red"}
              ></Ionicons>
            </Pressable>
          )}
        >
          <View style={styles.approveParentContainer}>
            <View
              style={{
                backgroundColor: "red",
                flex: 1,
                flexDirection: "row",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <ListItem.Content
                style={{ ...styles.textInputBox, borderRadius: 5 }}
              >
                <TextInput
                  value={foodPriceArray[index].name}
                  onChangeText={onNameChange}
                ></TextInput>
              </ListItem.Content>
              <ListItem.Content
                style={{ ...styles.textInputBox, borderRadius: 5 }}
              >
                <TextInput
                  value={displayPrice + foodPriceArray[index].price}
                  onChangeText={onPriceChange}
                  keyboardType={"decimal-pad"}
                ></TextInput>
              </ListItem.Content>
            </View>

            <ListItem.Content>
              <ScanCalendar
                styles={styles}
                foodPriceArray={foodPriceArray}
                setFoodPriceArray={setFoodPriceArray}
                index={index}
              />
            </ListItem.Content>
          </View>
        </ListItem.Swipeable>
      </TouchableWithoutFeedback>
    </>
  );
}
