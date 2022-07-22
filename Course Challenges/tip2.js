var arr = [125, 55, 44];
var tip = [];
const calcTip = (value) =>
  value >= 50 && value <= 300 ? (value * 15) / 100 : (value * 20) / 100;

for (let index = 0; index < arr.length; index++) {
  tip.push(calcTip(arr[index]));
}

var tip2 = arr.map((el) => calcTip(el));

// const tip = [calcTip(arr[0]), calcTip(arr[1]), calcTip(arr[2])];
console.log(tip, tip2);
