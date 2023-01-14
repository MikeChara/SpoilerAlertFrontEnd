//the functions here are written using dummy data and will be used to calculate the ratios of food eat to food wasted and ouputted in percentges

import { expiredData } from '../data.js';

const numberOfEaten = expiredData.filter((e) => e.eaten_on).length;
const numberOfWasted = expiredData.filter((e) => e.binned_on).length;

console.log('eaten : ', numberOfEaten);
console.log('wasted :', numberOfWasted);

const eatenPercentage =
  (numberOfEaten / (numberOfWasted + numberOfEaten)) * 100;
const wastedPercentage =
  (numberOfWasted / (numberOfEaten + numberOfWasted)) * 100;

console.log(eatenPercentage);
console.log(wastedPercentage);
