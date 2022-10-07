#!/usr/bin/env node
import greeting from '../src/cli.js';
import answerCheck from '../src/index.js';
import getRandomIntInRange from '../src/helper.js';

// ======================== EVEN GAME ========================

greeting();
function evenGame() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomIntInRange(0, 100);
    console.log('Question: ', number);
    const expectedAnswer = number % 2 === 0 ? 'yes' : 'no';
    answerCheck(expectedAnswer);
  }
}
evenGame();
