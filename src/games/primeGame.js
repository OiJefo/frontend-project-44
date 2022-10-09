#!/usr/bin/env node
import answerCheck from '../index.js';
import getRandomIntInRange from '../helper.js';
// ======================== PRIME GAME ========================
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) if (num % i === 0) return false;
  return num > 1;
};
function game() {
  const numberGetChecked = getRandomIntInRange(1, 100);
  const question = numberGetChecked;
  const expectedAnswer = (isPrime(numberGetChecked) === true) ? 'yes' : 'no';
  return [question, expectedAnswer];
}
export default function primeGame() {
  answerCheck(description, game);
}
