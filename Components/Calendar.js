import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Datepicker, Layout, Text } from "@ui-kitten/components";

export default function DatepickerSimpleUsageShowcase({ date, setDate }) {
  return (
    <Layout style={styles.container} level="1">
      <Text>Selected date: {date.toLocaleDateString()}</Text>

      <Datepicker date={date} onSelect={(nextDate) => setDate(nextDate)} />
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 16,
    backgroundColor: 0,
    width: "80%",
  },
});
