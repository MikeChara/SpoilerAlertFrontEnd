import * as React from "react";
import { View, Text, Image } from "react-native";
import { auth } from "../firebase-config";
import { backend_link } from "@env";
import { getAllStats, getWeekStats } from "../Fetches/getRequests.js";

export default function HomeScreen({
  styles,
  foodList,
  allStats,
  setAllStats,
  weekStats,
  setWeekStats,
}) {
  React.useEffect(() => {
    getAllStats(auth.currentUser.uid, setAllStats);
    getWeekStats(auth.currentUser.uid, setWeekStats);
  }, [foodList]);

  return (
    <>
      <Image
        source={require("../assets/foodiconbg-light.png")}
        style={styles.backgroundcover}
      />
      <View style={styles.dashboardContainer}>
        <Text style={styles.dashboardWelcome}>
          Hi {auth.currentUser.displayName}!
        </Text>
        <Text style={styles.dashboardProgresstitle}>
          Your progress so far...
        </Text>
        <View style={styles.dashboardrowContainer}>
          <View
            style={{ ...styles.dashboardSquare, backgroundColor: "lightblue" }}
          >
            <Text style={styles.dashboardSubtitle}>Bar Cool Thing Here</Text>
          </View>
        </View>

        <View style={styles.dashboardrowContainer}>
          <View
            style={{ ...styles.dashboardSquare, backgroundColor: "#0E7835" }}
          >
            <Text style={styles.dashboardSubtitle}>Spent Well</Text>
            <Text style={styles.dashboardPrice}>£32</Text>
            <Text style={styles.dashboardText}>Last week</Text>
          </View>
          <View
            style={{ ...styles.dashboardSquare, backgroundColor: "#E0358A" }}
          >
            <Text style={styles.dashboardSubtitle}>Spent Well</Text>
            <Text style={styles.dashboardPrice}>£264</Text>
            <Text style={styles.dashboardText}>All time</Text>
          </View>
        </View>
        <View style={styles.dashboardrowContainer}>
          <View
            style={{ ...styles.dashboardSquare, backgroundColor: "#FEA62A" }}
          >
            <Text style={styles.dashboardSubtitle}>Items Spoiled</Text>
            <Text style={styles.dashboardPrice}>
              {weekStats?.eatenPercentage}%
            </Text>
            <Text style={styles.dashboardText}>Last week</Text>
          </View>
          <View
            style={{ ...styles.dashboardSquare, backgroundColor: "#DE4D28" }}
          >
            <Text style={styles.dashboardSubtitle}>Items Spoiled</Text>
            <Text style={styles.dashboardPrice}>
              {weekStats?.wastedPercentage}%
            </Text>
            <Text style={styles.dashboardText}>All time</Text>
          </View>
        </View>
      </View>
    </>
  );
}
