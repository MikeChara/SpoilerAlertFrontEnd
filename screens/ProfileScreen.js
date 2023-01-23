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

	// const pageColor = "green";

	return (
		<>
			<Image
				source={require("../assets/foodiconbg-light.png")}
				style={styles.backgroundcover}
			/>

			<View style={styles.profilepagecontainer}>
				<Image source={require("./Cranks-1.png")} style={styles.profilepicture} />

				<Text style={{ fontSize: 26, fontWeight: "bold", alignSelf: "center" }}>
					{auth.currentUser.displayName}
				</Text>
				<Pressable style={styles.editbutton}>
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
				<Text style={styles.subtitle}>House</Text>
				<Input
					style={styles.textinput}
					disabled={true}
					placeholder={userDetails[0]?.name}
				/>
				<Pressable
					style={{ ...styles.purplebutton, marginTop: 120 }}
					onPress={HandleSignOut}
				>
					<Text style={styles.purplebuttontext}>Sign Out</Text>
				</Pressable>
			</View>
		</>
	);
}
