import React, { useState, useEffect } from "react";
import { auth } from "../firebase-config";
import Tabs from "./Tabs";
import ManualModal from "../screens/Modal.js";
import { View } from "react-native";
import { backend_link } from "@env";
import { getUserFood } from "../Fetches/getRequests.js";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Photo from "../screens/ImageLibraryScreen.js";
import { navigationRef } from "./ModalNavigate.js";

function MainContainer({ styles, fontsLoaded }) {
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

          <Stack.Screen
            name="Scan"
            children={() => (
              <Photo foodList={foodList} setFoodList={setFoodList} />
            )}
          />
        </Stack.Navigator>
        <View>
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
