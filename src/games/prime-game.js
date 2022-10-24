#!/usr/bin/env node
import runGame from '../index.js';
import getRandomNumber from '../utils.js';
// ======================== PRIME GAME ========================
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) if (num % i === 0) return false;
  return num > 1;
};
const getQuestionAndAnswer = () => {
  const numberGetChecked = getRandomNumber(1, 100);
  const question = numberGetChecked;
  const correctAnswer = (isPrime(numberGetChecked) === true) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const primeGame = () => {
  runGame(description, getQuestionAndAnswer);
};
export default primeGame;
