#!/usr/bin/env node
import greeting from '../cli.js';
import answerCheck from '../index.js';
import getRandomIntInRange from '../helper.js';
// ======================== GREATEST COMMON DIVISOR GAME ========================
greeting();
function divisor(d1, d2) {
  const result1 = [];
  const result2 = [];
  const result3 = [];
  for (let i = 0; i <= d1; i += 1) {
    if (d1 % i === 0) {
      result1.push(i);
    }
  }
  for (let i = 0; i <= d2; i += 1) {
    if (d2 % i === 0) {
      result2.push(i);
    }
  }
  for (let i = 0; i < result1.length; i += 1) {
    if (result2.includes(result1[i])) {
      result3.push(result1[i]);
    }
  }
  return (result3[result3.length - 1]);
}
function gcd() {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const d1 = getRandomIntInRange(0, 100);
    const d2 = getRandomIntInRange(0, 100);
    console.log('Question: ', `${d1} ${d2}`);
    const expectedAnswer = divisor(d1, d2);
    answerCheck(expectedAnswer);
  }
}
gcd();
