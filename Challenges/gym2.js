const calcAvg = (num1, num2, num3) => (num1 + num2 + num3) / 3;

const team1 = calcAvg(85, 54, 41);
const team2 = calcAvg(23, 34, 27);

const checkWinner = function (avgTeam1, avgTeam2) {
  if (avgTeam1 >= 2 * avgTeam2) {
    console.log("1 wins");
  } else if (avgTeam2 >= 2 * avgTeam1) {
    console.log("2 wins");
  } else {
    console.log("no wins");
  }
};
checkWinner(team1, team2);
// console.log(data);
