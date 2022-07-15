var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52],
  tip = [],
  totals = [];
const calcTip = (value) =>
  value >= 50 && value <= 300 ? (value * 15) / 100 : (value * 20) / 100;

for (let index = 0; index < bills.length; index++) {
  tip.push(calcTip(bills[index]));
  totals.push(tip[index] + bills[index]);
}

function calcAverage(arr) {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log("avg", sum / arr.length);
}
console.log(tip, "tip");
console.log(totals, "totals");

calcAverage(totals);
