const bill = 275;
var tip = bill >= 50 && bill <= 300 ? (bill * 15 / 100) : (bill * 20 / 100);

console.log(bill + tip, bill, tip);                     
