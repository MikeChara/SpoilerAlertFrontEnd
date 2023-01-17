import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase-config";

export default function SignUpScreen({ styles }) {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [displayName, setDisplayName] = useState();

	async function handleSignUp() {
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			await updateProfile(auth.currentUser, { displayName: displayName });
		} catch (error) {
			console.log(error.message);
		}
	}

	return (
		<View style={styles.wholepagecontainer}>
			<Text>Sign Up Here...</Text>
			<TextInput
				style={styles.textinput}
				placeholder='Name'
				value={displayName}
				onChangeText={(text) => setDisplayName(text)}
			/>
			<TextInput
				style={styles.textinput}
				placeholder='Email'
				value={email}
				onChangeText={(text) => setEmail(text)}
			/>
			<TextInput
				style={styles.textinput}
				placeholder='Password'
				value={password}
				onChangeText={(text) => setPassword(text)}
				secureTextEntry
			/>
			<Pressable style={styles.purplebutton} onPress={handleSignUp}>
				<Text style={styles.purplebuttontext}>Sign Up</Text>
			</Pressable>
		</View>
	);
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   input: {
//     width: "90%",
//     height: 40,
//     borderColor: "gray",
//     borderWidth: 1,
//     margin: 10,
//     padding: 10,
//   },
//   button: {
//     alignItems: "center",
//     justifyContent: "center",
//     paddingVertical: 12,
//     paddingHorizontal: 80,
//     borderRadius: 20,
//     elevation: 0,
//     backgroundColor: "#5951B7",
//   },
//   text: {
//     fontSize: 16,
//     lineHeight: 21,
//     fontWeight: "bold",
//     letterSpacing: 0.25,
//     color: "white",
//   },
// });
