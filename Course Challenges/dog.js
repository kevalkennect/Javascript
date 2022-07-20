const dogjulia = [3, 5, 2, 12, 7];
const dogKate = [4, 1, 15, 8, 3];

const checkDogs = function (arr1, arr2) {
  const newArr = arr1.slice(1, -2).concat(arr2);

  newArr.forEach((el, i) => {
    if (el < 3) {
      console.log(`Dog number ${i + 1} is still a puppy`);
    } else if (el >= 3) {
      console.log(`Dog number  ${i + 1} 
      is an adult, and is ${el} years old`);
    }
  });
};

checkDogs(dogjulia, dogKate);
