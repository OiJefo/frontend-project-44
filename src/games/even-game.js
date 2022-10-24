#!/usr/bin/env node
import runGame from '../index.js';
import getRandomNumber from '../utils.js';
// ======================== EVEN GAME ========================
const description = 'Answer "yes" if the number is even, otherwise answer "no".';
function isEven(number) {
  return number % 2 === 0;
}
const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = (isEven(question)) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const evenGame = () => {
  runGame(description, getQuestionAndAnswer);
};
export default evenGame;
