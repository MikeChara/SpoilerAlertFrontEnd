import React, { useState } from "react";
import * as ModalNavigation from "../navigation/ModalNavigate.js";
import { useNavigation } from "@react-navigation/native";
import {
	Alert,
	Modal,
	Text,
	Pressable,
	View,
	TouchableOpacity,
} from "react-native";

function ManualModal({ setModalVisible, modalVisible, styles }) {
	const onPressAddManually = () => {
		setModalVisible(!modalVisible);
		ModalNavigation.navigate("Add Item");
	};
	const onPressAddScan = () => {
		setModalVisible(!modalVisible);
		ModalNavigation.navigate("Scan");
	};

	return (
		<View>
			<Modal
				animationType='slide'
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert("Modal has been closed.");
					setModalVisible(!modalVisible);
				}}
			>
				<TouchableOpacity
					style={styles.modalTouchableOpacity}
					activeOpacity={1}
					onPressOut={() => {
						setModalVisible(false);
					}}
				>
					<View
						style={styles.modalCenteredView}
						onPress={() => setModalVisible(!modalVisible)}
					>
						<View style={styles.modalView}>
							<Text style={styles.modalText}>Add New Item</Text>

							<View style={{ flex: 1, flexDirection: "row" }}>
								<Pressable
									style={[styles.modalButtons, styles.buttonClose]}
									onPress={onPressAddScan}
								>
									<Text style={styles.textStyle}>Scan Receipt</Text>
								</Pressable>
								<Pressable
									style={[styles.modalButtons, styles.buttonClose]}
									onPress={onPressAddManually}
								>
									<Text style={styles.textStyle}>Add Manually</Text>
								</Pressable>
							</View>
						</View>
					</View>
				</TouchableOpacity>
			</Modal>
		</View>
	);
}

export default ManualModal;
