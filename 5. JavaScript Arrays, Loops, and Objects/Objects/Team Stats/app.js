const team = {
  _players: [
    {firstName: 'Kim', lastName: 'Jinho', age: 23},
    {firstName: 'Pablo', lastName: 'Sanchez', age: 21}
  ],
  
  _games: [
    {opponent: 'Broncos', teamPoints: 42, opponentPoints: 27}, 
    {opponent: 'korea', teamPoints: 36, opponentPoints: 25}
  ],

  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },

  addPlayer(firstName, lastName, age) {
    let player = {
      firstName,
      lastName,
      age
    };
    this.players.push(player);
  },

  addGame(oppName, points, oppPoints) {
    let game = {
      oppName,
      points,
      oppPoints
    };
    this.games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players)

team.addGame('china', 3, 2);
team.addGame('japan', 4, 1);
team.addGame('brazil', 1, 3);
console.log(team.games)
