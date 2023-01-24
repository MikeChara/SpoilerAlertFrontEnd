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
    setDate(date);
    console.log(date, index);
  
    const newFoodPriceArray = [...foodPriceArray];
    newFoodPriceArray[index].expires_on = date;
    setFoodPriceArray(newFoodPriceArray);
    console.log(foodPriceArray);

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
