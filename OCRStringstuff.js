let stringArr = [
  "SWEDE",
  "SWEDE",
  "BRIQUETTES",
  "FETA QUICHE",
  "VEG SAUSAGES",
  "VEG SAUSAGES",
  "CRISPS",
  "OAT CAKES",
  "TOILET ROLLS",
  "KITCHEN TOWEL *",
  "WHITE ROLL",
  "BAKING POTATO",
  "2.970 kg @",
  "ONION LSE",
  "0.435 kg @",
  "RED PEPPER",
  "ONION RED LSE",
  "0.235 kg @ £1.00/ kg",
  "SOUP MIX",
  "SPROUTS ODO",
  "67",
  "GREEK CHEESE",
  "CHEESE",
  "£0.70/ kg",
  "£1.00/ kg",
  "SCOT CHEDDAR",
  "SCOT CHEDDAR",
  "BANANAS LOOSE",
  "0.260 kg @ £0.78/ kg",
  "ENGLISH BUTTER",
  "MIXED CHILLIES",
  "FACIAL TISSUE *",
  "GRAPES LATE",
  "BIN LINERS",
  "TOMATOES",
  "W RAISIN LOAF",
  "YOGURT DRINKS",
  "DAFFODILS",
  "DAFFODILS",
  "*",
  "£0.80",
  "£0.80",
  "£8.00",
  "£4.50",
  "£2.50",
  "£2.50",
  "£1.05",
  "£0.90",
  "£1.79",
  "£3.00",
  "£0.80",
  "£2.08",
  "£0.44",
  "£0.55",
  "£0.24",
  "£1.50",
  "£0.89",
  "£2.75",
  "€2.00",
  "£1.30",
  "£2.60",
  "£2.60",
  "£0.20",
  "£1.99",
  "£0.70",
  "£1.75",
  "£2.20",
  "£2.50",
  "£1.75",
  "£1.90",
  "£4.30",
  "£1.00",
  "£1.00",
];

// let priceArr = stringArr.filter((e)=> e.charAt(0) === '£' && Number(e.charAt(priceArr[0].length-1)) != NaN )

let priceArr = stringArr.filter(function(e) {
  let lastCharacter = e.charAt(e.length-1)
  let toNumber = Number(lastCharacter)
  // console.log('type is ',typeof(NaN))
  if (e.charAt(0) === '£' && !isNaN(lastCharacter)){
    return e
  }  
} )

let itemsArr =[]
for (let e of stringArr){
  if (e.match(/^[A-Z\s]+$/)){
    itemsArr.push(e)
  }
 else if (e.slice(0, e.length-2).match(/^[A-Z\s]+$/)) {
    itemsArr.push(e.slice(0, e.length-2))
  }
}

let masterArr = []

for (let i = 0; i < itemsArr.length; i++){
  let obj = {name: itemsArr[i], price: priceArr[i]}
  // console.log(obj)
  masterArr.push(obj)
}

// let itemsArr = stringArr.filter(function(e){ 
//   return e.match(/^[A-Z*\s]+$/) || e.slice(0, e.length-2).match(/^[A-Z\s]+$/)
// })

console.log(itemsArr,'number of items is ',itemsArr.length)
console.log('number or prices is ', priceArr.length)
console.log(Number(0))
console.log(masterArr)
