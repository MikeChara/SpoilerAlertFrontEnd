import * as React from "react";
import { View, Text } from "react-native";

export default function HomeScreen({ styles }) {
	return (
		<View style={styles.pagestyle}>
			<Text
				onPress={() => alert('This is the "Home" screen.')}
				style={styles.subtitle}
			>
				Home Screen
			</Text>
		</View>
	);
}
