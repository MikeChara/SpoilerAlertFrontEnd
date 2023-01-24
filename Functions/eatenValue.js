export default function eatenValue(data) {
  let total = 0;
  data.payload.forEach((elem) => (total += elem.price));
  console.log("total is", total);
  console.log("eaten payload", data.payload);
  return total;
  total = 0;
}
