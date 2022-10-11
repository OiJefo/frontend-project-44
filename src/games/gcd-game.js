#!/usr/bin/env node
import answerCheck from '../index.js';
import getRandomIntInRange from '../helper.js';
// ======================== GREATEST COMMON DIVISOR GAME ========================
const description = 'Find the greatest common divisor of given numbers.';
function getGcd(d1, d2) {
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
}
function getAnswerAndQuestion() {
  const d1 = getRandomIntInRange(0, 100);
  const d2 = getRandomIntInRange(0, 100);
  const question = `${d1} ${d2}`;
  const expectedAnswer = getGcd(d1, d2);
  return [question, String(expectedAnswer)];
}
export default function gcd() {
  answerCheck(description, getAnswerAndQuestion);
}
