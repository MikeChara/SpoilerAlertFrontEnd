// ROOT CONTAINER > MAIN CONTAINER
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { data } from "../data";
import { auth } from "../firebase-config";

// Screens
import HomeScreen from "./screens/HomeScreen";
import PantryScreen from "./screens/PantryScreen";
import AddItemScreen from "./screens/AddItemScreen";
import ProfileScreen from "./screens/ProfileScreen";

//Screen names
const pantryName = "Pantry";
const addItemName = "Add Item";
const homeName = "Home";
const profileName = "Profile";

const Tab = createBottomTabNavigator();

function MainContainer({ styles }) {
    const [foodList, setFoodList] = useState([]);
  
  useEffect(() => {
    async function getUserFood(uid) {
      const allFood = await fetch(`http://192.168.0.6:3000/pantry/${uid}`);
      const data = await allFood.json();
      const food = data.payload;
      console.log("food gotten", food);
      setFoodList(food);
    }
    getUserFood(auth.currentUser.uid);
  }, []);
  
	// Tab navigator will select one of the screens from the navbar when 'focused' is true
	return (
		<NavigationContainer>
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
					children={() => <HomeScreen styles={styles} />}
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
						<PantryScreen
							foodList={foodList}
							setFoodList={setFoodList}
							styles={styles}
						/>
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
						<AddItemScreen
							foodList={foodList}
							setFoodList={setFoodList}
							styles={styles}
						/>
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
				/>
				<Tab.Screen
					name={profileName}
					children={() => <ProfileScreen styles={styles} />}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

export default MainContainer;
