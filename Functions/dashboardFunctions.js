//the functions here are written using dummy data and will be used to calculate the ratios of food eat to food wasted and ouputted in percentges

import { expiredData } from "../data";

 const numberOfEaten = expiredData.filter((e)=> e.eaten_on)
 const numOfWasted = expiredData.filter((e)=> e.binned_on)

 console.log('eaten : ', numberOfEaten)