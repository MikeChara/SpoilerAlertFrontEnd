import * as React from "react";
import { View, Text } from "react-native";
import { auth } from '../firebase-config'
import { backend_link } from "@env";
import { getAllStats, getWeekStats } from "../Fetches/getRequests";
import Graph from "../Components/Graph";


export default function HomeScreen({ styles, foodList, allStats, setAllStats, weekStats, setWeekStats }) {
	
  
	React.useEffect( () => {
		getAllStats(auth.currentUser.uid, setAllStats);
		getWeekStats(auth.currentUser.uid, setWeekStats)
	  }, [foodList]);

	return (
    <View style={styles.dashboardContainer}>
      <Text style={styles.dashboardWelcome}>
        Hi {auth.currentUser.displayName}!
      </Text>
      <Text style={styles.dashboardProgresstitle}>Your progress so far...</Text>
      <View style={styles.dashboardrowContainer}>
        <View style={styles.dashboardSquare1}>
          <Text style={styles.dashboardSubtitle}>Total Savings</Text>
          <Text style={styles.textGray}>Last week</Text>
          <Text style={styles.dashboardPrice}>£32</Text>
        </View>
        <View style={styles.dashboardSquare2}>
          <Text style={styles.dashboardSubtitle}>Total Savings</Text>
          <Text style={styles.textGray}>All time</Text>
          <Text style={styles.dashboardPrice}>£264</Text>
        </View>
      </View>
      <View style={styles.dashboardrowContainer}>
        <View style={styles.dashboardSquare3}>
          <Text style={styles.dashboardSubtitle}>Items Wasted</Text>
          <Text style={styles.textGray}>Last week</Text>
          <Text style={styles.dashboardPrice}>{weekStats?.eatenPercentage}%</Text>
        </View>
        <View style={styles.dashboardSquare4}>
          <Text style={styles.dashboardSubtitle}>Items Wasted</Text>
          <Text style={styles.textGray}>All time</Text>
          <Text style={styles.dashboardPrice}>{weekStats?.wastedPercentage}%</Text>
        </View>
      </View>
    </View>
  );
}
