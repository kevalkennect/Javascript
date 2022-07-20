const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const data = prompt(
      "What is your favourite programming language? \n 0: JavaScript \n 1: Python \n 2: Rust\n 3: C++"
    );
    if (data < 4) this.answers[data] = 1;
    console.log(data);
  },
};

poll.registerNewAnswer();
console.log(poll);
