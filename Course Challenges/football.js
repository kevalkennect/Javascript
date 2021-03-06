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
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [[gk, ...fieldPlayers], players2] = game.players;
const allPlayers = [gk, ...fieldPlayers, ...players2];

const players1Final = [gk, ...fieldPlayers, "Thiago", "Coutinho", "Perisic"];

const {
  odds: { team1, x: draw, team2 },
} = game;

const printGoals = (...players) => {
  console.log(players.length, "goals were scored");
};

printGoals(...game.scored);

team1 < team2 && console.log("Team 1 is more likly to win");
team1 > team2 && console.log("Team 2 is more likly to win");

const kaustubh = {
  salary: 12345678,
  getSalary() {
    console.log(this.salary);
  },
};
kaustubh.getSalary();
