export default function foodCooked(setFoodList, foodList, index){
    setFoodList([...foodList.slice(0, index), ...foodList.slice(index+1, foodList.length)])
  }