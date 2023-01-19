import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen({ styles }) {
  return (
    <View style={styles.dashboardContainer}>
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
