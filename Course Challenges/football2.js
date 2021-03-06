const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (const [i, el] of game?.scored.entries())
  console.log(`Goal ${i + 1} : ${el}`);

let avg = 0;
for (const odd of Object.values(game.odds)) {
  avg += odd;
}
avg /= Object.values(game.odds).length;

console.log(avg);

for (const [key, value] of Object.entries(game.odds)) {
  const tstr = key === "x" ? "draw" : `victory ${game[key]}`;
  console.log(`Odd of ${tstr}  ${value}`);
}
game.scores = {};
for (const player of game.scored) {
  game.scores[player] ? game.scores[player]++ : (game.scores[player] = 1);
}
console.log(game.scores);
