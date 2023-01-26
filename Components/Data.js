import { useImage } from "@shopify/react-native-skia";

const dairyImage = useImage(require("../screens/Dairy.png"));
const fruitVegImage = useImage(require("../screens/FruitVeg.png"));
const cupboardImage = useImage(require("../screens/Cupboard.png"));
const beveragesImage = useImage(require("../screens/Beverages.png"));
const fishImage = useImage(require("../screens/Fish.png"));
const meatImage = useImage(require("../screens/Meat.png"));

export const data = [
  { label: "Dairy", value: 80, image: fruitVegImage },
  { label: "Fruit/Veg", value: 100, image: dairyImage },
  { label: "Cupboard", value: 65, image: cupboardImage },
];

export const dataTwo = [
  { label: "Beverages", value: 80, image: beveragesImage },
  { label: "Fish", value: 100, image: fishImage },
  { label: "Meat", value: 65, image: meatImage },
];
