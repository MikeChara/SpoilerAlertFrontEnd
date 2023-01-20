export function findRank(eatenPercentage) {
  switch (eatenPercentage) {
    case eatenPercentage >= 80:
      return "goldRank";
    case eatenPercentage >= 50 && eatenPercentage < 80:
      return "silverRank";
    default:
      return "bronzeRank";
  }
}
