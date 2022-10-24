#!/usr/bin/env node
import runGame from '../index.js';
import getRandomNumber from '../utils.js';
// ======================== GREATEST COMMON DIVISOR GAME ========================
const description = 'Find the greatest common divisor of given numbers.';
const getGcd = (d1, d2) => {
  if (d1 === 0) { return d2; }
  while (d2 !== 0) {
    if (d1 > d2) {
      // eslint-disable-next-line no-param-reassign
      d1 -= d2;
    } else {
      // eslint-disable-next-line no-param-reassign
      d2 -= d1;
    }
  }
  return d1;
};
const getQuestionAndAnswer = () => {
  const d1 = getRandomNumber(0, 100);
  const d2 = getRandomNumber(0, 100);
  const question = `${d1} ${d2}`;
  const correctAnswer = String(getGcd(d1, d2));
  return [question, correctAnswer];
};
const gcdGame = () => {
  runGame(description, getQuestionAndAnswer);
};
export default gcdGame;
