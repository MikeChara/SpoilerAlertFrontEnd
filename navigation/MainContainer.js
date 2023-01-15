import React, { useState } from "react";
import { Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import data from "../data";

// Screens
import HomeScreen from "./screens/HomeScreen";
import PantryScreen from "./screens/PantryScreen";
import AddItemScreen from "./screens/AddItemScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ScanScreen from "./screens/ScanScreen";

//Screen names
const pantryName = "Pantry";
const addItemName = "Add Item";
const homeName = "Home";
const profileName = "Profile";

//Navigtion
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Tabs() {
  const [foodList, setFoodList] = useState([...data]);
  const navigation = useNavigation();
  const handleAddItemPress = () => {
    Alert.alert(
      "Select Option",
      "Please select how you would like to add your item",
      [
        {
          text: "Manual",
          onPress: () => navigation.navigate("Add Item"),
        },
        {
          text: "Scan",
          onPress: () => navigation.navigate("Scan"),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === addItemName) {
            iconName = focused ? "add-circle" : "add-circle-outline";
          } else if (rn === pantryName) {
            iconName = focused ? "fast-food" : "fast-food-outline";
          } else if (rn === profileName) {
            iconName = focused ? "person" : "person-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "purple",
        inactiveTintColor: "grey",
        labelStyle: { paddingBottom: 4, fontSize: 10 },
        style: { padding: 10, height: 70 },
      }}
    >
      <Tab.Screen
        name={homeName}
        component={HomeScreen}
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: "#ADC8EB",
            height: 150,
          },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 35,
          },
        }}
      />

      <Tab.Screen
        name={pantryName}
        children={() => (
          <PantryScreen foodList={foodList} setFoodList={setFoodList} />
        )}
        options={{
          title: "Pantry",
          headerStyle: {
            backgroundColor: "#D9EEEB",
            height: 150,
          },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 35,
          },
        }}
      />
      <Tab.Screen
        name={addItemName}
        children={() => (
          <AddItemScreen foodList={foodList} setFoodList={setFoodList} />
        )}
        options={{
          title: "Add Item",
          headerStyle: {
            backgroundColor: "#D9EEEB",
            height: 150,
          },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 35,
          },
        }}
        listeners={{
          tabPress: handleAddItemPress,
        }}
      />
      <Tab.Screen name={profileName} component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Scan" component={ScanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
