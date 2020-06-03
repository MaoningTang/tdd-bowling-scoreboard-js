import Round from '../round';

export default class Scoreboard {
  constructor() {
    this.rounds = [new Round()];
  }

  recordOneThrowing(number) {
    if (this.rounds[this.rounds.length - 1].isFinished) {
      this.rounds[this.rounds.length] = new Round();
    }
    this.rounds[this.rounds.length - 1].recordOneThrowing(number);
  }

  getTotalScore() {
    return this.rounds.map((round, index, rounds) => {
      let totalScore = round.getTotalScore();
      if (rounds[index + 1] && round.requiredBonusCount !== 0) {
        totalScore += rounds[index + 1].scoreOfThrowing[0];
      }
      return totalScore;
    })
      .reduce((prev, curr) => prev + curr);
  }
}
