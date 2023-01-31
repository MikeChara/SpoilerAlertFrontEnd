import * as React from "react";
import { View, Text, Image } from "react-native";
import { auth } from "../firebase-config";
import { CountUp } from "use-count-up";

import { getAllStats, getWeekStats } from "../Fetches/getRequests.js";
import { Graph } from "../Components/Graph.js";
import { useImage } from "@shopify/react-native-skia";

import { useFonts } from "expo-font";

export default function HomeScreen({
  styles,
  foodList,
  allStats,
  setAllStats,
  weekStats,
  setWeekStats,
}) {
  const dairyImage = useImage(require("../screens/DairyNoBorder.png"));
  const fruitVegImage = useImage(require("../screens/FruitVegNoBorder.png"));
  const cupboardImage = useImage(require("../screens/CupboardNoBorder.png"));
  const beveragesImage = useImage(require("../screens/BeveragesNoBorder.png"));
  const fishImage = useImage(require("../screens/FishNoBorder.png"));
  const meatImage = useImage(require("../screens/MeatNoBorder.png"));
  const data = [
    { label: "Dairy", value: 80, image: fruitVegImage },
    { label: "Fruit/Veg", value: 100, image: dairyImage },
    { label: "Cupboard", value: 65, image: cupboardImage },
  ];

  const dataTwo = [
    { label: "Beverages", value: 50, image: beveragesImage },
    { label: "Fish", value: 20, image: fishImage },
    { label: "Meat", value: 45, image: meatImage },
  ];

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
          Most Eaten vs Most Wasted
        </Text>

        {data[2].image && (
          <View style={{ flex: 1, flexDirection: "row", bottom: "4%" }}>
            <Graph color={"green"} data={data} />
            <Graph color={"red"} data={dataTwo} />
          </View>
        )}
      </View>

      <View style={styles.dashboardrowContainer}>
        <View style={{ ...styles.dashboardSquare, backgroundColor: "#0E7835" }}>
          <Text style={styles.dashboardSubtitle}>Spent Well</Text>
          <Text style={styles.dashboardPrice}>
            £
            <CountUp
              isCounting
              end={
                weekStats.spentWell
                  ? Math.round(weekStats.spentWell * 100) / 100
                  : 0
              }
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
              end={
                weekStats.moneyWasted
                  ? Math.round(weekStats.moneyWasted * 100) / 100
                  : 0
              }
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
              end={weekStats.wastedPercentage ? weekStats.wastedPercentage : 0}
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
