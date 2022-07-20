const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

dogs.forEach((el) => (el.recommendedFood = Math.trunc(el.weight ** 0.75 * 28)));
console.log(dogs);
const dogS = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(
  `Sarah's dog eating too ${
    dogS.curFood > dogS.recommendedFood ? "much" : "litle"
  }`
);

const ownersEatTooMuch = dogs
  .filter((el) => el.curFood > el.recommendedFood)
  .flatMap((el) => el.owners);

const ownersEatTooLittle = dogs
  .filter((el) => el.curFood < el.recommendedFood)
  .flatMap((el) => el.owners);

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little`);

console.log(dogs.some((dog) => dog.curFood == dog.recommendedFood));

const checkIfOkay = (dog) =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

console.log(dogs.some(checkIfOkay));

console.log(dogs.filter(checkIfOkay));
