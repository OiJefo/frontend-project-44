#!/usr/bin/env node
import greeting from '../cli.js';
import answerCheck from '../index.js';
import getRandomIntInRange from '../helper.js';
// ======================== CALCULATOR GAME ========================
greeting();
function operation(v1, v2, operand) {
  switch (operand) {
    case 0: console.log('Question: ', `${v1} + ${v2}`); return v1 + v2;
    case 1: console.log('Question: ', `${v1} - ${v2}`); return v1 - v2;
    case 2: console.log('Question: ', `${v1} x ${v2}`); return v1 * v2;
    default: return null;
  }
}
function calc() {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const v1 = getRandomIntInRange(0, 100);
    const v2 = getRandomIntInRange(0, 100);
    const operand = getRandomIntInRange(0, 2);
    const expectedAnswer = operation(v1, v2, operand);
    answerCheck(expectedAnswer);
  }
}
calc();
