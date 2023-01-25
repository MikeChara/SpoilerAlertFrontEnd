// APP > ROOT CONTAINER > AUTH CONTAINER >
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//imported Screens
import SignInScreen from "../screens/SignInScreen.js";
import SignUpScreen from "../screens/SignUpScreen.js";
import WelcomeScreen from "../screens/WelcomeScreen.js";

const Stack = createStackNavigator();

export default function AuthContainer({ styles }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          children={() => <WelcomeScreen styles={styles} />}
        />
        <Stack.Screen
          name="Log In"
          children={() => <SignInScreen styles={styles} />}
        />
        <Stack.Screen
          name="Sign Up"
          children={() => <SignUpScreen styles={styles} />}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
