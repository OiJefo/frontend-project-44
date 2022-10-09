#!/usr/bin/env node
import answerCheck from '../index.js';
import getRandomIntInRange from '../helper.js';
// ======================== PROGRESSION GAME ========================
let numbers; let
  hiddenNumber;
const description = 'What number is missing in the progression?';
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
function game() {
  const start = getRandomIntInRange(0, 100);
  const step = getRandomIntInRange(1, 10);
  hideNumberInString(start, step);
  const question = numbers;
  const expectedAnswer = hiddenNumber;
  return [question, String(expectedAnswer)];
}
export default function progressionGame() {
  answerCheck(description, game);
}
