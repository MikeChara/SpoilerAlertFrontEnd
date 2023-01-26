import { useEffect } from "react";
import {
  Canvas,
  Path,
  runTiming,
  Skia,
  Text,
  useComputedValue,
  useFont,
  useValue,
  Image,
  useImage,
} from "@shopify/react-native-skia";
import React from "react";
import { Button, Easing, StyleSheet, View } from "react-native";

import * as d3 from "d3";

const GRAPH_MARGIN = 20;
const GRAPH_BAR_WIDTH = 8;

const CanvasHeight = 120;
const CanvasWidth = 170;
const graphHeight = CanvasHeight - 2 * GRAPH_MARGIN;
const graphWidth = CanvasWidth - 2;
9;

export const Graph = ({color, data}) => {
  const dairyImage = useImage(require("../screens/Dairy.png"));
  const fruitVegImage = useImage(require("../screens/FruitVeg.png"));
  const cupboardImage = useImage(require("../screens/Cupboard.png"));

  // const data = [
  //   { label: "Dairy", value: 80, image: fruitVegImage },
  //   { label: "Fruit/Veg", value: 100, image: dairyImage },
  //   { label: "Cupboard", value: 65, image: cupboardImage },
  // ];

  const font = useFont(require("../assets/Roboto-Bold.ttf"), 10);
  const animationState = useValue(0);

  const xDomain = data.map((dataPoint) => dataPoint.label);
  const xRange = [0, graphWidth];
  const x = d3.scalePoint().domain(xDomain).range(xRange).padding(1); //scales the words (domain) across a range (width of graph)

  const yDomain = [
    0, //where graph animation starts
    d3.max(data, (yDataPoint) => yDataPoint.value), //gets mx value of data.value array
  ];
  const yRange = [0, graphHeight];
  const y = d3.scaleLinear().domain(yDomain).range(yRange); //scales the values keeping their value relationships (raitos)

  function animate() {
    animationState.current = 0;

    runTiming(animationState, 1, {
      duration: 2000,
      easing: Easing.inOut(Easing.exp), //animates over a period of 1.6 seconds with exponential speed
    });
  }

  useEffect(() => animate(), []);
  const path = useComputedValue(() => {
    const newPath = Skia.Path.Make();

    data.forEach((dataPoint) => {
      const rect = Skia.XYWHRect(
        //hover over blue for explanation!
        65, //where x starts
        x(dataPoint.label) - 1.3 * GRAPH_BAR_WIDTH, //where y starts (spread over the array of categories)
        y(dataPoint.value * animationState.current) * 1, //negative value dictates direction
        GRAPH_BAR_WIDTH
      );

      const rrect = Skia.RRectXY(rect, 8, 8); //how rounded the graph bars are
      newPath.addRRect(rrect);
    });

    return newPath;
  }, [animationState]);

  if (!font) {
    return <View />;
  }

  // <Image source={data[0].source}        style={{ width: 20, height: 20,}}/>
  return (
    <View style={styles.container}>
      <Canvas style={styles.canvas}>
        <Path path={path} color={color} />
        {data?.map((dataPoint) => (
          <Image
            image={dataPoint?.image}
            fit="contain"
            x={25}
            y={x(dataPoint?.label) - 21.5}
            width={30}
            height={30}
          />
        ))}
      </Canvas>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    // justifyContent: "center",
    top: "5%",
    alignItems: "center",
    flex: 1,
  },
  canvas: {
    height: CanvasHeight,
    width: CanvasWidth,
    flex: 1,
  },
});