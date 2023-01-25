// ROOT CONTAINER > MAIN CONTAINER

// import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import PlaceHolder from "../screens/PlaceHolder.js";
import HomeScreen from "../screens/HomeScreen.js";
import PantryScreen from "../screens/PantryScreen.js";
import AddItemScreen from "../screens/AddItemScreen.js";
import ProfileScreen from "../screens/ProfileScreen.js";

//Screen names
const socialName = "Social";
const pantryName = "Pantry";
const addItemName = "Add Item";
const homeName = "Home";
const profileName = "Profile";
const Tab = createBottomTabNavigator();
const TabHeight = 100;
const tabFontSize = 25;
function Tabs({
  styles,
  foodList,
  setFoodList,
  setModalVisible,
  allStats,
  setAllStats,
  weekStats,
  setWeekStats,
}) {
  // Tab navigator will select one of the screens from the navbar when 'focused' is true
  return (
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
            iconName = focused ? "game-controller" : "game-controller-outline";
          }


          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={homeName}
        children={() => (
          <HomeScreen
            styles={styles}
            allStats={allStats}
            setAllStats={setAllStats}
            weekStats={weekStats}
            setWeekStats={setWeekStats}
           

          />
        )}
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: "#F5F5F5",
            height: TabHeight,
          },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: tabFontSize,
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
            allStats={allStats}
            setAllStats={setAllStats}
            weekStats={weekStats}
            setWeekStats={setWeekStats}
          />
        )}
        options={{
          title: "Pantry",
          headerStyle: {
            backgroundColor: "#F5F5F5",
            height: TabHeight,
          },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: tabFontSize,
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
            height: TabHeight,
          },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: tabFontSize,
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
        options={{
          title: "Social",
          headerStyle: {
            backgroundColor: "#F5F5F5",
            height: TabHeight,
          },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: tabFontSize,
            color: "#0E7835",
          },
        }}
      />
      <Tab.Screen
        name={profileName}
        children={() => <ProfileScreen styles={styles} />}
        options={{
          title: "Profile",
          headerStyle: {
            backgroundColor: "#F5F5F5",
            height: TabHeight,
          },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: tabFontSize,
            color: "#0E7835",
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
