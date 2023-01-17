import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";

export default function SignInScreen({ styles }) {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	async function handleSignIn() {
		try {
			await signInWithEmailAndPassword(auth, email, password);
		} catch (error) {
			console.log(error.message);
		}
	}

	return (
		<View style={styles.wholepagecontainer}>
			<Text>Sign In Here..</Text>
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
			<Pressable style={styles.purplebutton} onPress={handleSignIn}>
				<Text style={styles.text}>Sign In</Text>
			</Pressable>
		</View>
	);
}
