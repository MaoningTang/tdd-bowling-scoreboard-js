export default class Scoreboard {
  constructor() {
    this.scoreOfThorwings = [];
  }

  recordOneThrowing(number) {
    this.scoreOfThorwings[this.scoreOfThorwings.length] = number;
  }

  getTotalScore() {
    return this.scoreOfThorwings.reduce((prev, curr) => prev + curr);
  }
}
