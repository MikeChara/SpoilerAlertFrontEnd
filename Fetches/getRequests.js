import eatenValue from "../Functions/eatenValue.js";

//gets users in date food for pantry screen
export async function getUserFood(uid, setFoodList) {
  const allFood = await fetch(
    `https://spoiler-alert-backend.onrender.com/pantry/${uid}`
  );
  const data = await allFood.json();
  const food = data.payload;
  setFoodList([...food]);
  return food;
}

//gets users all-time stats for dashboard
export async function getAllStats(uid, setWeekStats) {
  const allFood = await fetch(
    `https://spoiler-alert-backend.onrender.com/allEatenAndWasted/${uid}`
  );
  const data = await allFood.json();
  setWeekStats({ ...data.payload });
  return data.payload;
}

//gets all users weeks stats for dahsboard
export async function getWeekStats(uid, setAllStats) {
  const allFood = await fetch(
    `https://spoiler-alert-backend.onrender.com/weekEatenWasted/${uid}`
  );
  const data = await allFood.json();
  setAllStats({ ...data.payload });
  return data.payload;
}

//gets user DB details
export async function getUserDetails(uid, setUserDetails) {
  const userDetails = await fetch(
    `https://spoiler-alert-backend.onrender.com/userDetailsRouter/${uid}`
  );
  const data = await userDetails.json();
  setUserDetails({ ...data.payload });
  return data.payload;
}

//gets all eaten and wasted data for a user, for the dashboard
export async function getLastWeeksEatenFood(uid, setLastWeekEaten) {
  const allFood = await fetch(
    `https://spoiler-alert-backend.onrender.com/lastWeekEaten/${uid}`
  );
  const data = await allFood.json();
  const lastWeekEatenDisplay = await eatenValue(data);
  setLastWeekEaten(lastWeekEatenDisplay);
  return lastWeekEatenDisplay;
}
export async function getAllEatenFood(uid, setAllEaten) {
  const allFood = await fetch(
    `https://spoiler-alert-backend.onrender.com/allEatenFood/${uid}`
  );
  const data = await allFood.json();
  const eatenDisplay = eatenValue(data);
  setAllEaten(eatenDisplay);
  return eatenDisplay;
}
