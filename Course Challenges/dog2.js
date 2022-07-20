const calcAverageHumanAge = function (arr) {
  const humanAge = arr
    .map((el) => (el <= 2 ? 2 * el : 16 + el * 4))
    .filter((el) => el >= 18); //filtering adult
  const avg = humanAge.reduce((acc, el) => acc + el, 0) / humanAge.length;
  return avg;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
