//sql format : 2023-01-12 15:28:40 +0000
//date obj console-log : 2023-01-15T00:00:00.000Z
export default function expiryDateConverter(annoyingDate) {
  const goodDate =
    '0' +
    (annoyingDate.getMonth() + 1).toString().slice(-2) +
    `/${annoyingDate.getDate()}/
    ${annoyingDate.getFullYear()} 23:59:`;
  return goodDate;
}
