#!/usr/bin/env node
import greeting from '../src/cli.js';
import answerCheck from '../src/index.js';
import getRandomIntInRange from '../src/helper.js';
// ======================== PROGRESSION GAME ========================
greeting();
let numbers;
let hiddenNumber;
const start = getRandomIntInRange(0, 100);
const step = getRandomIntInRange(1, 10);
function hideNumberInString(value1, value2) {
  const array = [];
  let accum = value1;
  for (let i = 0; i < 10; i += 1) {
    accum += value2;
    array.push(accum);
  }
  const hiddenNumberPos = getRandomIntInRange(0, 10);
  hiddenNumber = array[hiddenNumberPos];
  array[hiddenNumberPos] = '..';
  numbers = array.join(' ');
}
function progression() {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    hideNumberInString(start, step);
    console.log('Question: ', numbers);
    const expectedAnswer = hiddenNumber;
    answerCheck(expectedAnswer);
  }
}
progression();
