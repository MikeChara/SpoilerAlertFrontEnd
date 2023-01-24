export default function eatenValue(data) {
  let total = 0;
  data.payload.forEach((elem) => (total += +elem.price));
  return total;
}

export function eatenValueAll(data) {
  let total = 0;
  console.log(data);
  data.payload.forEach((elem) => (total += +elem.price));
  return total;
}
