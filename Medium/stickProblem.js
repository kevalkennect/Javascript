

function matchHouses(step) {
    if (step === 0) {
      return 0
    } else if (step < 0 || typeof step !== "number") {
      return "The input (step) will always be a non-negative integer."
    } else {
          return (step * 6) - (step - 1);
      }
  }
  
  
console.log(matchHouses(87))
