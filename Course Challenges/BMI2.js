const mark = {
  fullName: "Mark",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI; 
  },
};

const john = {
  fullName: "John",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

console.log(
  mark.calcBMI() > john.calcBMI()
    ? `Mark's BMI (${mark.BMI}) is higher than John's (${john.BMI})!` 
    : `John's BMI (${john.BMI}) is higher than Mark's (${mark.BMI})!`
);
