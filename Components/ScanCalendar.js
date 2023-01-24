import React, { useState } from "react";
import { Datepicker, Layout, Text } from "@ui-kitten/components";

export default function ScanCalendar({
  styles,
  foodPriceArray,
  setFoodPriceArray,
  index,
}) {
  const [item, setItem] = useState({});
  const [date, setDate] = React.useState(new Date());


  
  function onSelect(index, date) {
    setDate(date);
    console.log(date, index);
    // setItem({ ...foodPriceArray[index], expiry: date });
    // setFoodPriceArray([
    //   ...foodPriceArray.slice(0, index),
    //   item,
    //   ...foodPriceArray.slice(index + 1, foodPriceArray.length),
    // ]);
    const newFoodPriceArray = [...foodPriceArray];
    newFoodPriceArray[index].expires_on = date;
    setFoodPriceArray(newFoodPriceArray);
    console.log(foodPriceArray);

  }
  return (
    <Layout style={styles.DatePickerAtRendercontainer} level="1">
      {/* <Text>Selected date: {date.toLocaleDateString()}</Text> */}
      <Datepicker
        date={date}
        onSelect={(nextDate) => onSelect(index, nextDate)}
      />
    </Layout>
  );
}
