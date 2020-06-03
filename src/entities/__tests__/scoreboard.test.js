import Scoreboard from '../scoreboard';

test('should return total score 80 when get total score given each throwing scored 4 points', () => {
  const scoreOfThrowing = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
  const scoreboard = new Scoreboard();

  for (let i = 0; i < scoreOfThrowing.length; i += 1) {
    scoreboard.recordOneThrowing(scoreOfThrowing[i]);
  }

  const totalScore = scoreboard.getTotalScore();

  expect(totalScore).toEqual(80);
});
