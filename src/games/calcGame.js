#!/usr/bin/env node
import answerCheck from '../index.js';
import getRandomIntInRange from '../helper.js';
// ======================== CALCULATOR GAME ========================
const description = 'What is the result of the expression?';
// eslint-disable-next-line consistent-return
function operation(value1, value2, operand) {
  if (operand === '+') {
    return value1 + value2;
  } if (operand === '-') {
    return value1 - value2;
  } if (operand === '*') {
    return value1 * value2;
  }
}
function game() {
  const operands = ['+', '-', '*'];
  const value1 = getRandomIntInRange(0, 100);
  const value2 = getRandomIntInRange(0, 100);
  const operand = operands[getRandomIntInRange(0, 2)];
  const expectedAnswer = operation(value1, value2, operand);
  const question = `${value1} ${operand} ${value2}`;
  return [question, String(expectedAnswer)];
}
export default function calcGame() {
  answerCheck(description, game);
}
