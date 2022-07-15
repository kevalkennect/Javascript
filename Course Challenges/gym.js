const team1 = (96 + 108 + 89) / 3;
const team2 = (97 + 112 + 101) / 3;

if (team1 > team2 && team1 >= 100) {
  console.log("team 1 wins");
} else if (team2 > team1 && team2 >= 100) {
  console.log("team 2 wins");
} else if (team1 === team2) {
  console.log("both wins");
}
