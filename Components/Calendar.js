import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Datepicker, Layout, Text } from "@ui-kitten/components";

export default function DatepickerSimpleUsageShowcase({
  date,
  setDate,
  styles,
}) {
  return (
    <Layout style={styles.DatePickerAtRendercontainer} level="1">
      <Text>Selected date: {date.toLocaleDateString()}</Text>
      <Datepicker date={date} onSelect={(nextDate) => setDate(nextDate)} />
    </Layout>
  );
}
