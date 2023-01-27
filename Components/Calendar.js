import React from "react";
import { Datepicker, Layout, Text } from "@ui-kitten/components";

export default function DatepickerSimpleUsageShowcase({
  date,
  setDate,
  styles,
}) {
  return (
    <Layout style={styles.DatePickerAtRendercontainer} level="1">
      <Datepicker date={date}  onSelect={(nextDate) => setDate(nextDate)} />
    </Layout>
  );
}
