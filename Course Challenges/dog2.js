const calcAverageHumanAge = function (arr) {
  return arr
    .map((el) => (el <= 2 ? 2 * el : 16 + el * 4))
    .filter((el) => el >= 18) //filtering adult
    .reduce((acc, el, i, arr) => acc + el / arr.length, 0);
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
