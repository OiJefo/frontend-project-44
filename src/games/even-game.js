#!/usr/bin/env node
import answerCheck from '../index.js';
import getRandomIntInRange from '../helper.js';
// ======================== EVEN GAME ========================
const description = 'Answer "yes" if the number is even, otherwise answer "no".';
function isEven(number) {
  return number % 2 === 0 ? 'yes' : 'no';
}
function getAnswerAndQuestion() {
  const question = getRandomIntInRange(1, 100);
  const expectedAnswer = isEven(question);
  return [question, expectedAnswer];
}
export default function evenGame() {
  answerCheck(description, getAnswerAndQuestion);
}
