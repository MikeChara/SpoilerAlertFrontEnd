//expiry dates added to database will need to have time set like these
let date1 = new Date('January 20, 2023 23:59:59 GMT+00:00')
let date2 = new Date('February 20, 2023 23:59:59 GMT+00:00')
let date3 = new Date('January 7, 2023 23:59:59 GMT+00:00')
let date4 = new Date('April 20, 2023 23:59:59 GMT+00:00')
let date5 = new Date('May 20, 2023 23:59:59 GMT+00:00')
let date6 = new Date('June 20, 2023 23:59:59 GMT+00:00')
let date7 = new Date('July 20, 2023 23:59:59 GMT+00:00')
let date8 = new Date('August 20, 2023 23:59:59 GMT+00:00')
let date9 = new Date('September 20, 2023 23:59:59 GMT+00:00')
let date10 = new Date('October 20, 2023 23:59:59 GMT+00:00')

let eatenOrBinnedDate1 = new Date('January 1, 2023 23:59:59 GMT+00:00');
let eatenOrBinnedDate2 = new Date('January 2, 2023 23:59:59 GMT+00:00');
let eatenOrBinnedDate3 = new Date('January 3, 2023 23:59:59 GMT+00:00');
let eatenOrBinnedDate4 = new Date('January 4, 2023 23:59:59 GMT+00:00');
let eatenOrBinnedDate5 = new Date('January 5, 2023 23:59:59 GMT+00:00');
let eatenOrBinnedDate6 = new Date('January 6, 2023 23:59:59 GMT+00:00');
let eatenOrBinnedDate7 = new Date('January 7, 2023 23:59:59 GMT+00:00');
let eatenOrBinnedDate8 = new Date('January 8, 2023 23:59:59 GMT+00:00');
let eatenOrBinnedDate9 = new Date('January 9, 2023 23:59:59 GMT+00:00');
let eatenOrBinnedDate10 = new Date('January 10, 2023 23:59:59 GMT+00:00');

export const data = [
  { item: 'yoghurt', expiryDate: date1, id: 1 },
  { item: 'milk', expiryDate: date2, id: 2 },
  { item: 'cheese', expiryDate: date3, id: 3 },
  { item: 'bread', expiryDate: date4, id: 4 },
  { item: 'eggs', expiryDate: date5, id: 5 },
  { item: 'meat', expiryDate: date6, id: 6 },
  { item: 'fish', expiryDate: date7, id: 7 },
  { item: 'vegetables', expiryDate: date8, id: 8 },
  { item: 'fruit', expiryDate: date9, id: 9 },
  { item: 'juice', expiryDate: date10, id: 10 }
];



// export default data = [
//   { id: 1, item: "Banana", expiryDate: "15/01/2023" },
//   { id: 2, item: "Milk", expiryDate: "17/01/2023" },
//   { id: 3, item: "Cheese", expiryDate: "19/01/2023" },
//   { id: 4, item: "Human Hand", expiryDate: "N/A" },
//   { id: 5, item: "Orange", expiryDate: "22/01/2023" },
// ];

export const expiredData = [
  { item: 'yoghurt', eaten_on: eatenOrBinnedDate1, binned_on: null },
{ item: 'milk', eaten_on: eatenOrBinnedDate2, binned_on: null },
{ item: 'cheese', eaten_on:null, binned_on: eatenOrBinnedDate3  },
{ item: 'bread', eaten_on: eatenOrBinnedDate4, binned_on: null },
{ item: 'eggs', eaten_on: eatenOrBinnedDate5, binned_on: null },
{ item: 'meat', binned_on: eatenOrBinnedDate6, eaten_on: null },
{ item: 'fish', binned_on: eatenOrBinnedDate7, eaten_on: null },
{ item: 'vegetables', binned_on: eatenOrBinnedDate8, eaten_on: null },
{ item: 'fruit', binned_on: eatenOrBinnedDate9, eaten_on: null },
{ item: 'juice', binned_on: eatenOrBinnedDate10, eaten_on: null }
]