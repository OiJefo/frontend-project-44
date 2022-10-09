#!/usr/bin/env node
import answerCheck from '../index.js';
import getRandomIntInRange from '../helper.js';
// ======================== EVEN GAME ========================
const description = 'Answer "yes" if the number is even, otherwise answer "no".';
function game() {
  const question = getRandomIntInRange(1, 100);
  const expectedAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, expectedAnswer];
}
export default function evenGame() {
  answerCheck(description, game);
}
