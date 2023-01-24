// let priceArr = stringArr.filter((e)=> e.charAt(0) === '£' && Number(e.charAt(priceArr[0].length-1)) != NaN )

export default function OCRStringSort(string) {
  console.log("this is the string return from ocr", string);
  let stringArr = string.split("\n");

  let priceArr = stringArr.filter(function (e) {
    let lastCharacter = e.charAt(e.length - 1);
    if (e.charAt(0) === "£" && !isNaN(lastCharacter)) {
      return e;
    }
  });

  let itemsArr = [];
  for (let e of stringArr) {
    if (e.match(/^[A-Za-z0-9\s\/]+$/)) {
      itemsArr.push(e);
    } else if (e.slice(0, e.length - 2).match(/^[A-Za-z0-9\s\/]+$/)) {
      itemsArr.push(e.slice(0, e.length - 2));
    }
  }

  let masterArr = [];

  for (let i = 0; i < itemsArr.length; i++) {
    let obj = { name: itemsArr[i], price: priceArr[i] };
    masterArr.push(obj);
  }

  console.log("Master array", masterArr);
  console.log(itemsArr);
  return masterArr;
}
