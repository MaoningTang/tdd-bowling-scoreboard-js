import Round from '../round';

export default class Scoreboard {
  constructor() {
    this.rounds = [new Round()];
  }

  recordOneThrowing(number) {
    if (this.rounds[this.rounds.length - 1].isFinished) {
      const isLastRound = this.rounds.length === 9;
      this.rounds[this.rounds.length] = new Round(isLastRound);
    }
    this.rounds[this.rounds.length - 1].recordOneThrowing(number);
  }

  getTotalScore() {
    return this.rounds.map((round, index, rounds) => {
      let totalScore = round.getTotalScore();
      const nextRound = rounds[index + 1];
      if (!nextRound) {
        return totalScore;
      }
      if (round.requiredBonusCount === 1) {
        totalScore += nextRound.scoreOfThrowing[0];
      }
      if (round.requiredBonusCount === 2) {
        if (nextRound.scoreOfThrowing.length > 1) {
          totalScore += nextRound.scoreOfThrowing[0] + nextRound.scoreOfThrowing[1];
        } else {
          totalScore += nextRound.scoreOfThrowing[0] + rounds[index + 2].scoreOfThrowing[0];
        }
      }
      return totalScore;
    })
      .reduce((prev, curr) => prev + curr);
  }
}
