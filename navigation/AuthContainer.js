// APP > ROOT CONTAINER > AUTH CONTAINER >

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//imported Screens
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

const Stack = createStackNavigator();

export default function AuthContainer() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='Welcome' component={WelcomeScreen} />
				<Stack.Screen name='Sign In' component={SignInScreen} />
				<Stack.Screen name='Sign Up' component={SignUpScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({});
