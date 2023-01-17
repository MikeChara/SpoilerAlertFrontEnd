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

	return loggedIn ? (
		<MainContainer styles={styles} />
	) : (
		<AuthContainer styles={styles} />
	);
}

const styles = StyleSheet.create({
	purplebutton: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 12,
		paddingHorizontal: 80,
		borderRadius: 20,
		elevation: 0,
		backgroundColor: "#5951B7",
	},

	purplebuttontext: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		color: "white",
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
		backgroundColor: "white",
	},

	subtitle: {
		fontSize: 26,
		fontWeight: "bold",
		padding: 5,
	},

	displaybox: {
		backgroundColor: "white",
		borderRadius: 25,
		width: "100%",
	},

	wholepagecontainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
		paddingLeft: 8,
		paddingRight: 8,
	},

	textinput: {
		width: "100%",
		height: 40,
		borderColor: "gray",
		borderWidth: 1,
		margin: 10,
		padding: 10,
	},

	text: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		color: "white",
	},
});
