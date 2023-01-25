// let priceArr = stringArr.filter((e)=> e.charAt(0) === '£' && Number(e.charAt(priceArr[0].length-1)) != NaN )

export default function OCRStringSort(string) {
  let stringArr = string.split("\n");
  const date = new Date();
  date.setHours(23)

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

  let mainArr = [];

  for (let i = 0; i < itemsArr.length; i++) {
    let newPrice = priceArr[i] ? priceArr[i]?.replace("£", "") : "0.00";
    let obj = {
      name: itemsArr[i],
      price: newPrice,
      expires_on: date,
    };

    mainArr.push(obj);
  }
  return mainArr;
}
