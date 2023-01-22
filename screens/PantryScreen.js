import { StyleSheet, Text, View, FlatList, Image, Animated } from "react-native";
import React from "react";
import FoodList from "../Components/FoodList";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { auth } from "../firebase-config";
import { NavigationActions, SafeAreaView } from 'react-navigation';

export default function Pantry({
	setFoodList,
	foodList,
	styles,
	setAllStats,
	setWeekStats,
}) {
	const scrollY = React.useRef(new Animated.Value(0)).current
	// const ITEM_SIZE = 
	let todaysDate = new Date();
	return (
			<View>
			<Image
				source={require("../assets/foodiconbg.png")}
				style={{ position: "absolute", opacity: 0.1, resizemode: "cover" }}
			/>
				<Text style={styles.subtitle}> Total: ({foodList.length} items)</Text>
				<Animated.FlatList
					data={foodList}
					// contentContainerStyle={{styl}}
					onScroll={Animated.event(
						[{nativeEvent: {contentOffset: {y: scrollY}}}],
						{useNativeDriver:true}
					)}
					renderItem={({ item, index }) => {
						// const inputRange = [
						// 	-1,
						// 	0,
						// 	ITEM_SIZE * index,
						// 	ITEM_SIZE * (index + 2)
						// ]
						//calculates days left until expiry
						let expiryDate = new Date(item.expires_on);
						let msleft = expiryDate.getTime() - todaysDate.getTime();
						let daysLeft = msleft / 1000 / 60 / 60 / 24;
						let daysLeftRounded = Math.floor(daysLeft);
						return (
							<GestureHandlerRootView
							>
								<FoodList
									name={item.name}
									expiry={daysLeftRounded}
									foodList={foodList}
									setFoodList={setFoodList}
									id={item.id}
									index={index}
									setAllStats={setAllStats}
									setWeekStats={setWeekStats}
									styles={styles}
								/>
							</GestureHandlerRootView>
							

						);
					}}
				/>
			</View>
	);
}


