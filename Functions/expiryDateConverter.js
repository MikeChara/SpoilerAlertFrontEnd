export default function expiryDateConverter(annoyingDate) {
  //sql format : 2023-01-12 15:28:40 +0000
  //date obj console-log : 2023-01-15T00:00:00.000Z
  const goodDate =
    `${annoyingDate.getFullYear()}-` +
    ('0' + (annoyingDate.getMonth() + 1)).slice(-2) +
    `-${annoyingDate.getDate()} 23:59:59 +0000`;
  return goodDate;
}
