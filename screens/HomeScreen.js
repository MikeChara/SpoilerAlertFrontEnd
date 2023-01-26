import * as React from "react";
import { View, Text, Image } from "react-native";
import { auth } from "../firebase-config";
import { CountUp } from "use-count-up";
import { getAllStats, getWeekStats } from "../Fetches/getRequests.js";
import { Graph } from "../Components/Graph.js";

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

  console.log(weekStats);
  return (
    <>
      <Image
        source={require("../assets/foodiconbg-light.png")}
        style={styles.backgroundcover}
      />
      <Text style={styles.dashboardWelcome}>
        Hi {auth.currentUser.displayName}!
      </Text>
      <Text style={styles.dashboardProgresstitle}>Your progress so far...</Text>
      <Image
        source={require("./Cranks-1.png")}
        style={styles.smallProfilePicture}
      />
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          margin: "6%",
          marginBottom: "10%",
          backgroundColor: "lightblue",
          borderRadius: 10,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            color: "white",
            paddingTop: "3%",
          }}
        >
          Best vs Worst
        </Text>
        <View style={{ flex: 1, flexDirection: "row", bottom: "4%" }}>
          <Graph color={'green'} />
          <Graph color={'red'}/>
        </View>
      </View>

      <View style={styles.dashboardrowContainer}>
        <View style={{ ...styles.dashboardSquare, backgroundColor: "#0E7835" }}>
          <Text style={styles.dashboardSubtitle}>Spent Well</Text>
          <Text style={styles.dashboardPrice}>
            £
            <CountUp
              isCounting
              end={weekStats.spentWell ? weekStats.spentWell : 0}
              duration={3.2}
            />
          </Text>
          <Text style={styles.dashboardText}>last 7 days</Text>
        </View>
        <View style={{ ...styles.dashboardSquare, backgroundColor: "#E0358A" }}>
          <Text style={styles.dashboardSubtitle}>In The Bin</Text>
          <Text style={styles.dashboardPrice}>
            £
            <CountUp
              isCounting
              end={weekStats.moneyWasted ? weekStats.moneyWasted : 0}
              duration={3.2}
            />
          </Text>
          <Text style={styles.dashboardText}>last 7 days</Text>
        </View>
      </View>
      <View style={styles.dashboardrowContainer}>
        <View style={{ ...styles.dashboardSquare, backgroundColor: "#FEA62A" }}>
          <Text style={styles.dashboardSubtitle}>Items Spoiled</Text>
          <Text style={styles.dashboardPrice}>
            <CountUp
              isCounting
              end={weekStats.eatenPercentage ? weekStats.eatenPercentage : 0}
              duration={3.2}
            />
            %
          </Text>
          <Text style={styles.dashboardText}>last 7 days</Text>
        </View>
        <View style={{ ...styles.dashboardSquare, backgroundColor: "#DE4D28" }}>
          <Text style={styles.dashboardSubtitle}>Items Spoiled</Text>
          <Text style={styles.dashboardPrice}>
            <CountUp
              isCounting
              end={allStats.wastedPercentage ? allStats.wastedPercentage : 0}
              duration={3.2}
            />
            %
          </Text>
          <Text style={styles.dashboardText}>All time</Text>
        </View>
      </View>
    </>
  );
}