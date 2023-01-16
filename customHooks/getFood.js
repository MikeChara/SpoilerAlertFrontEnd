export default async function useVerifyAndInsert(uid) {
  const allFood = await fetch(`http://192.168.0.6:3000/pantry/${uid}`);
  const data = await allFood.json();
  console.log("food gotten", data);
  return data;
}
