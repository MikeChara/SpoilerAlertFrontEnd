import { backend_link } from "@env";

    //fetches all user wasted food
    export async function getAllWasted(uid) {
      const allFood = await fetch(
        `https://spoiler-alert-backend.onrender.com/allWastedFood/${uid}`
      );
      const data = await allFood.json();
      console.log('this is the data',data.payload)
      return data.payload;
    }
