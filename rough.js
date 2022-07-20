// const weekdays = ["mon", "tue", "wed"];

// const obj = {
//   [weekdays[2]]: {
//     open: 12,
//     close: 20,
//   },
// };
// // const obj

// const obj2 = {
//   weekends: {
//     mon: {
//       open: 12,
//       close: 20,
//     },
//     tue: {
//       open: 12,
//       close: 20,
//     },
//     wed: {
//       open: 12,
//       close: 20,
//     },
//     thu: {
//       open: 12,
//       close: 20,
//     },
//     fri: {
//       open: 12,
//       close: 20,
//     },
//     sat: {
//       open: 12,
//       close: 20,
//     },
//     sun: {
//       open: 12,
//       close: 20,
//     },
//   },
// };

// console.log(Object.entries(obj2.weekends));
// // for (const day of Object.keys(obj2.weekends)) {
// //   console.log(day);
// // }

// const obj3 = {};
// /////////👇destructering👇//////👇Enteries will give array///
// for (const [key, { open, close }] of Object.entries(obj2.weekends)) {
//   obj3[key] = {
//     open,
//     close,
//   };
// }
// console.log(obj3, "new object");
// //set

// new Set(["sadsf", "dsvgdfsgbv", "v"]);
// //maps

// const map = new Map();
// map.set("name", "keval panchal");
// map.set(1, "india");
// console.log(map);

///strings

//function

// const heyFunction = function (str) {
//   return function (name) {
//     console.log(`${str} ${name}`);
//   };
// };

// heyFunction("keval")("whatsup");

// const newFunction = str => value => console.log(`${str} ${value}`);

// newFunction("keval")("keval1")

// const obj = {
//   name: "keval",
//   fn: function (str) {
//     console.log(`${str} by ${this.name}`);
//   },
// };

// obj.fn("hii");

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.forEach((el, i, arr) => {
  console.log(`${i} : ${el} ===> from ${arr}`);
});
