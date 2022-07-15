const numberOfStick = 6;

function matchHouses(step) {
  return step * numberOfStick - (step - 1);
}

console.log(matchHouses(87))
