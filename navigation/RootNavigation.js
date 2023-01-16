import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import MainContainer from "./MainContainer";
import AuthContainer from "./AuthContainer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";
import useVerifyAndInsert from "../customHooks/useVerifyAndInsert";

export default function RootNavigation() {
	const [loggedIn, setLoggedIn] = useState(false);

	onAuthStateChanged(auth, (user) => {
		if (user) {
			// user is signed in
			setLoggedIn(true);
			useVerifyAndInsert(user.uid);
		} else {
			// User is signed out
			setLoggedIn(false);
		}
	});

	return loggedIn ? <MainContainer /> : <AuthContainer />;
}

const styles = StyleSheet.create({
	addbutton: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 12,
		paddingHorizontal: 80,
		borderRadius: 20,
		elevation: 0,
		backgroundColor: "#5951B7",
	},

	buttontext: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		color: "white",
	},

	additeminput: {
		height: 40,
		width: "80%",
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},

	addpagetext: {
		fontSize: 26,
		fontWeight: "bold",
		textAlign: "left",
	},

	pagestyle: {
		flex: 1,
		alignItems: "center",
		textAlign: "left",
	},
});
