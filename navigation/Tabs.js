// ROOT CONTAINER > MAIN CONTAINER

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { navigationRef } from "./ModalNavigate.js";

// Screens
import PlaceHolder from "../screens/PlaceHolder";
import HomeScreen from "../screens/HomeScreen";
import PantryScreen from "../screens/PantryScreen";
import AddItemScreen from "../screens/AddItemScreen";
import ProfileScreen from "../screens/ProfileScreen";

//Screen names
const socialName = "Social";
const pantryName = "Pantry";
const addItemName = "Add Item";
const homeName = "Home";
const profileName = "Profile";
const Tab = createBottomTabNavigator();

function Tabs({ styles, foodList, setFoodList, setModalVisible }) {
  // Tab navigator will select one of the screens from the navbar when 'focused' is true
  return (
    <NavigationContainer ref={navigationRef}>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "#0E7835",
          tabBarInactiveTintColor: "grey",
          tabBarLabelStyle: {
            paddingBottom: 4,
            fontSize: 10,
          },
          tabBarStyle: [
            {
              display: "flex",
            },
            null,
          ],
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
            } else if (rn === socialName) {
              iconName = focused
                ? "game-controller"
                : "game-controller-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name={homeName}
          children={() => <HomeScreen styles={styles} />}
          options={{
            title: "Home",
            headerStyle: {
              backgroundColor: "#F5F5F5",
              height: 150,
            },
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 35,
              color: "#0E7835",
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
              backgroundColor: "#F5F5F5",
              height: 150,
            },
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 35,
              color: "#0E7835",
            },
          }}
        />
        <Tab.Screen
          name={addItemName}
          children={() => (
            <AddItemScreen setFoodList={setFoodList} styles={styles} />
          )}
          options={{
            title: "Add Item",
            headerStyle: {
              backgroundColor: "#F5F5F5",
              height: 150,
            },
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 35,
              color: "#0E7835",
            },
          }}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              setModalVisible(true);
            },
          }}
        />
        <Tab.Screen
          name={socialName}
          children={() => <PlaceHolder styles={styles} />}
        />
        <Tab.Screen
          name={profileName}
          children={() => <ProfileScreen styles={styles} />}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Tabs;
