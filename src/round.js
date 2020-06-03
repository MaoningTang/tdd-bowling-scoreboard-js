export default class Round {
  constructor() {
    this.isFinished = false;
    this.scoreOfThrowing = [];
    this.requiredBonusCount = 0;
  }

  recordOneThrowing(score) {
    this.scoreOfThrowing[this.scoreOfThrowing.length] = score;
    if (this.scoreOfThrowing.length === 2) {
      this.isFinished = true;
    }
    if (this.getTotalScore() === 10) {
      this.requiredBonusCount = 1;
    }
  }

  getTotalScore() {
    return this.scoreOfThrowing.reduce((prev, curr) => prev + curr);
  }
}
