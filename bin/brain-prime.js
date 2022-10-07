#!/usr/bin/env node
import greeting from '../src/cli.js';
import answerCheck from '../src/index.js';
import getRandomIntInRange from '../src/helper.js';

// ======================== PRIME GAME ========================

greeting();
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) if (num % i === 0) return false;
  return num > 1;
};
function prime() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const numberGetChecked = getRandomIntInRange(0, 100);
    console.log('Question: ', numberGetChecked);
    const expectedAnswer = (isPrime(numberGetChecked) === true) ? 'yes' : 'no';
    answerCheck(expectedAnswer);
  }
}
prime();
