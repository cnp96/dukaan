export const formatNumber = (n: number) => {
  if (n < 1000) return n;
  const nStr = n.toString();
  let ret = "";
  for (let i = nStr.length - 1, j = nStr.length - 3; i >= 0; i--) {
    if (i === j) {
      ret += nStr[i] + ",";
      j -= 2;
    } else {
      ret += nStr[i];
    }
  }

  return ret.split("").reverse().join("");
};
