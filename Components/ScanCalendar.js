import React from "react";
import { Datepicker, Layout, Text } from "@ui-kitten/components";

export default function ScanCalendar({
  styles,
  foodPriceArray,
  setFoodPriceArray,
  index,
}) {
  const [date, setDate] = React.useState(new Date());


  
  function onSelect(index, date) {
    date.setHours(23)
    setDate(date);
  
    const newFoodPriceArray = [...foodPriceArray];
    newFoodPriceArray[index].expires_on = date;
    setFoodPriceArray(newFoodPriceArray);

  }
  return (
    <Layout style={styles.DatePickerAtRendercontainer} level="1">
      <Datepicker
        date={date}
        onSelect={(nextDate) => onSelect(index, nextDate)}
      />
    </Layout>
  );
}
