export async function eatenFoodPatch(food_id) {
  await fetch(`https://spoiler-alert-backend.onrender.com/eatFood/${food_id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

export async function binnedFoodPatch(food_id) {
    await fetch(`https://spoiler-alert-backend.onrender.com/binFood/${food_id}`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
}