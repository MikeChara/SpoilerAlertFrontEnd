import * as React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
import { Input, Layout } from "@ui-kitten/components";
import { getUserDetails } from "../Fetches/getRequests";
import { useState, useEffect } from "react";

export default function ProfileScreen({ styles }) {
	const [userDetails, setUserDetails] = useState([]);
	async function HandleSignOut() {
		await signOut(auth);
	}
	useEffect(() => {
		getUserDetails(auth.currentUser.uid, setUserDetails);
	}, []);

	return (
		<>
			<View style={styles.profilepagecontainer}>
				<View style={{ backgroundColor: "red", top: 0, margin: 0 }}>
					<Image
						source={require("../assets/foodiconbg.png")}
						style={styles.profilescreenbanner}
					/>
				</View>
				<Image
					source={require("./Cranks-1.png")}
					style={styles.profilepicture}
				/>
			</View>
			<View style={{ ...styles.profilepagecontainer, top: 70 }}>
				<Text style={{ fontSize: 26, fontWeight: "bold" }}>
					{auth.currentUser.displayName}
				</Text>
				<Pressable style={styles.purplebutton}>
					<Text style={styles.purplebuttontext}>Edit Profile</Text>
				</Pressable>
				<Text style={styles.subtitle}>Username</Text>
				<Input
					style={styles.textinput}
					disabled={true}
					placeholder={auth.currentUser.displayName}
				/>
				<Text style={styles.subtitle}>Email</Text>
				<Input
					style={styles.textinput}
					disabled={true}
					placeholder={auth.currentUser.email}
				/>
				<Text style={styles.subtitle}>Your House</Text>
				<Input
					style={styles.textinput}
					disabled={true}
					placeholder={userDetails[0]?.name}
				/>
				<Pressable
					style={{ ...styles.purplebutton, marginTop: 8 }}
					onPress={HandleSignOut}
				>
					<Text style={styles.purplebuttontext}>Sign Out</Text>
				</Pressable>
			</View>
		</>
	);
}
