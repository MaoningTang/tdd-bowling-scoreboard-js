export default class Round {
  constructor(isLastRound) {
    this.isFinished = false;
    this.scoreOfThrowing = [];
    this.requiredBonusCount = 0;
    this.isLastRound = isLastRound;
  }

  recordOneThrowing(score) {
    this.scoreOfThrowing[this.scoreOfThrowing.length] = score;
    const strikeNotInLastRound = !this.isLastRound && score === 10;
    if (strikeNotInLastRound) {
      this.isFinished = true;
      this.requiredBonusCount = 2;
      return;
    }
    if (!this.isLastRound && this.getTotalScore() === 10) {
      this.requiredBonusCount = 1;
    }
    const numberOfThrowing = this.scoreOfThrowing.length;
    this.isFinished = this.isLastRound ? numberOfThrowing === 3 : numberOfThrowing === 2;
  }

  getTotalScore() {
    return this.scoreOfThrowing.reduce((prev, curr) => prev + curr);
  }
}
