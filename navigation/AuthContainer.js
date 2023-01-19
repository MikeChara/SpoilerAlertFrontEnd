// APP > ROOT CONTAINER > AUTH CONTAINER >
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//imported Screens
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

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
          name="Sign In"
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
