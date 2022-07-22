// // const weekdays = ["mon", "tue", "wed"];

// // const obj = {
// //   [weekdays[2]]: {
// //     open: 12,
// //     close: 20,
// //   },
// // };
// // // const obj

// // const obj2 = {
// //   weekends: {
// //     mon: {
// //       open: 12,
// //       close: 20,
// //     },
// //     tue: {
// //       open: 12,
// //       close: 20,
// //     },
// //     wed: {
// //       open: 12,
// //       close: 20,
// //     },
// //     thu: {
// //       open: 12,
// //       close: 20,
// //     },
// //     fri: {
// //       open: 12,
// //       close: 20,
// //     },
// //     sat: {
// //       open: 12,
// //       close: 20,
// //     },
// //     sun: {
// //       open: 12,
// //       close: 20,
// //     },
// //   },
// // };

// // console.log(Object.entries(obj2.weekends));
// // // for (const day of Object.keys(obj2.weekends)) {
// // //   console.log(day);
// // // }

// // const obj3 = {};
// // /////////👇destructering👇//////👇Enteries will give array///
// // for (const [key, { open, close }] of Object.entries(obj2.weekends)) {
// //   obj3[key] = {
// //     open,
// //     close,
// //   };
// // }
// // console.log(obj3, "new object");
// // //set

// // new Set(["sadsf", "dsvgdfsgbv", "v"]);
// // //maps

// // const map = new Map();
// // map.set("name", "keval panchal");
// // map.set(1, "india");
// // console.log(map);

// ///strings

// //function

// // const heyFunction = function (str) {
// //   return function (name) {
// //     console.log(`${str} ${name}`);
// //   };
// // };

// // heyFunction("keval")("whatsup");

// // const newFunction = str => value => console.log(`${str} ${value}`);

// // newFunction("keval")("keval1")

// // const obj = {
// //   name: "keval",
// //   fn: function (str) {
// //     console.log(`${str} by ${this.name}`);
// //   },
// // };

// // obj.fn("hii");

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // // arr.forEach((el, i, arr) => {
// // //   console.log(`${i} : ${el} ===> from ${arr}`);
// // // });

// // const newArr = arr.map((el, i) => i * el);

// // console.log(newArr);

// //computing username
// // const str = "Keval Panchal";

// // const userName = str
// //   .toLowerCase()
// //   .split(" ")
// //   .map((el) => el[0])
// //   .join('')

// // console.log(userName);

// // console.log(arr.findIndex((el) => el === 8));

// // console.log(arr.some((el) => el === 15));

// const arr2 = [1, 2, [3, [4, 5]], 6, 7, 8, [9, 10, [11, [12, 13]]]];

// console.log(arr2.flat(4));

// function toArray(obj) {
//   const arr = [];
//   for (let [key, value] of Object.entries(obj)) {
//     arr.push([key, value]);
//   }
//   console.log(arr);
// }

// toArray({ shrimp: 15, tots: 12 });

// function concat(...arr) {
//   return arr.flat();
// }
// console.log(concat([1, 2, 3], [4, 5], [6, 7]));

// f

// quarter: 25 cents / $0.25
// dime: 10 cents / $0.10
// nickel: 5 cents / $0.05
// penny: 1 cent / $0.01

// function changeEnough(arr, check) {
//   const sum = arr.reduce((acc, el) => acc + el, 0);
//   console.log(sum);
//   if (sum > check) {
//     return true;
//   } else {
//     false;
//   }
// }

// console.log(changeEnough([10, 0, 0, 50], 3.85));

const checkSeven = function (arr) {
  return arr.includes(7) ? "Boom" : " no 7 found";
};

// console.log(checkSeven([1, 2, 3, 4, 5, 6]));

const oddishOrEvenish = function (num) {
  let temp = Array.from(String(num), Number);
  return temp.reduce((acc, el, i, arr) => acc + el, temp[0]) % 2 === 0
    ? "evenish"
    : "oddish";
};

// console.log(oddishOrEvenish(43));

const getDays = function (date1, date2) {
  return Math.abs((date1 - date2) / (1000 * 60 * 60 * 24));
};

// console.log(getDays(new Date("June 14, 2019"), new Date("June 25, 2019")));

const getLength = (...arr) => {
  return arr.flat(5).length;
};
// console.log(getLength([1, [2, [3, [4, [5, 6]]]]]));

const getTotalPrice = (arr) => {
  //   return arr.reduce((acc, el, i, arr) => acc.price + el.price, arr[0]);
  // return arr.forEach((el,i,arr)=>el)
  return arr
    .map((el, i, arr) => el.price)
    .reduce((acc, el, i, arr) => (arr.length > 0 ? acc + el : el));
};
// console.log(
//   getTotalPrice([
//     { product: "Milk", quantity: 1, price: 1.5 },
//     { product: "Cereals", quantity: 1, price: 2.5 },
//   ])
// );

const arrayOfMultiples = (num1, num2) => {
  let arr = [];
  for (let i = 1; i <= num2; i++) {
    arr.push(num1 * i);
  }
  return arr;
};

// const ar = [1, 2, 3, 4, 5, 6, 7];
// ar.reverse;
// console.log(arrayOfMultiples(7, 5));

const mirror = (arr) => {
  return [...arr, ...arr.reverse()];
};

// console.log(mirror([0, 2, 4, 6]) );

const isPrime = (num) => {
  if (num < 2) return false;
  for (var i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
};

const isPrime2 = (num) => {
  if (num < 2) return false;
  for (var i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
};

for (var i = 0; i < 100; i++) {
  // if (isPrime2(i)) console.log(i);
}

// for (var i = 0; i < 100; i++) {
//   if (isPrime(i)) console.log(i);
// }

// const getData = () => {
//   const res = fetch("http://localhost:3000/res")
//     .then((el) => el.json())
//     .then((el) => console.log(el));
// };
// getData();

const myPromis = new Promise((resolve, reject) => {
  if (Math.random() >= 0.5) {
    resolve("You won");
  } else {
    reject("you lost");
  }
});

myPromis.then((el) => console.log(el)).catch((err) => console.log(err));
