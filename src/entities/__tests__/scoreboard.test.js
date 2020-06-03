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

test('should return total score 142 when get total score given 1-9 rounds each throwing scored 5 points and two throwing scored 4 points in the 10th round', () => {
  const scoreOfThrowing = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4];
  const scoreboard = new Scoreboard();
  for (let i = 0; i < scoreOfThrowing.length; i += 1) {
    scoreboard.recordOneThrowing(scoreOfThrowing[i]);
  }

  const totalScore = scoreboard.getTotalScore();

  expect(totalScore).toEqual(142);
});
