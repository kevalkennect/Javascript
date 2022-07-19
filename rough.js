const weekdays = ["mon", "tue", "wed"];

const obj = {
  [weekdays[2]]: {
    open: 12,
    close: 20,
  },
};
// const obj

const obj2 = {
  weekends: {
    mon: {
      open: 12,
      close: 20,
    },
    tue: {
      open: 12,
      close: 20,
    },
    wed: {
      open: 12,
      close: 20,
    },
    thu: {
      open: 12,
      close: 20,
    },
    fri: {
      open: 12,
      close: 20,
    },
    sat: {
      open: 12,
      close: 20,
    },
    sun: {
      open: 12,
      close: 20,
    },
  },
};

console.log(Object.entries(obj2.weekends));
// for (const day of Object.keys(obj2.weekends)) {
//   console.log(day);
// }

const obj3 = {};
/////////👇destructering👇//////👇Enteries will give array///
for (const [key, { open, close }] of Object.entries(obj2.weekends)) {
  obj3[key] = {
    open,
    close,
  };
}
console.log(obj3, "new object");
//set 

new Set(['sadsf','dsvgdfsgbv','v'])
//maps 

const map = new Map()
map.set('name','keval panchal')
map.set(1,'india')
console.log(map);