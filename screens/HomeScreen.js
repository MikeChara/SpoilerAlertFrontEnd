import * as React from "react";
import { View, Text } from "react-native";
// import { getAllWasted } from "../GetRequests/GetHome";
import { auth } from "../firebase-config";
import { backend_link } from "@env";

export default function HomeScreen({ styles }) {
  const [allStats, setAllStats] = React.useState([]);
  const [weekStats, setWeekStats] = React.useState([]);

  async function getAllStats(uid) {
    const allFood = await fetch(
      `${backend_link}/allEatenAndWasted/${auth.currentUser.uid}`
    );
    const data = await allFood.json();
    console.log("all stats :", data.payload);
    setAllStats([...data.payload]);
    return data.payload;
  }
  async function getWeekStats(uid) {
    const allFood = await fetch(
      `${backend_link}/weekEatenWasted/${auth.currentUser.uid}`
    );
    const data = await allFood.json();
    console.log("week stats :", data.payload);
    setWeekStats([...data.payload]);
    return data.payload;
  }
  console.log("state all stats :", allStats);
  console.log("state week stats :", weekStats);

  React.useEffect(() => {
    getAllStats(auth.currentUser.uid);
    getWeekStats(auth.currentUser.uid);
  }, []);
  return (
    <View style={styles.dashboardContainer}>
      <Text style={styles.dashboardWelcome}>Hi, [username here]</Text>
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
          <Text style={styles.dashboardPrice}>13%</Text>
        </View>
        <View style={styles.dashboardSquare4}>
          <Text style={styles.dashboardSubtitle}>Items Wasted</Text>
          <Text style={styles.textGray}>All time</Text>
          <Text style={styles.dashboardPrice}>25%</Text>
        </View>
      </View>
    </View>
  );
}
