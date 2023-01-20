import React, { useState, useEffect } from "react";
import { auth } from "../firebase-config";
import Tabs from "./Tabs";
import ManualModal from "../screens/Modal";
import { View } from "react-native";
import { backend_link } from "@env";
import { getUserFood } from "../Fetches/getRequests";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Photo from "../screens/ImageLibraryScreen";
import { navigationRef } from "./ModalNavigate.js";

function MainContainer({ styles }) {
  const [foodList, setFoodList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [allStats, setAllStats] = useState([]);
  const [weekStats, setWeekStats] = useState([]);

  useEffect(() => {
    getUserFood(auth.currentUser.uid, setFoodList);
  }, []);
  const Stack = createStackNavigator();


  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen
            name="Tabs"
            children={() => (
              <Tabs
                styles={styles}
                foodList={foodList}
                setFoodList={setFoodList}
                setModalVisible={setModalVisible}
                allStats={allStats}
                setAllStats={setAllStats}
                weekStats={weekStats}
                setWeekStats={setWeekStats}
              />
            )}
            options={{ headerShown: false }}
          />

          <Stack.Screen name="Scan" component={Photo} />
        </Stack.Navigator>
        <View style={styles.modalContainer}>
          <ManualModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            styles={styles}
            navigation={Tabs}
          />
        </View>
      </NavigationContainer>
    </View>
  );
}
export default MainContainer;
