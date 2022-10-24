#!/usr/bin/env node
import runGame from '../index.js';
import getRandomNumber from '../utils.js';
// ======================== CALCULATOR GAME ========================
const description = 'What is the result of the expression?';
// eslint-disable-next-line consistent-return
const calculate = (value1, value2, operand) => {
  if (operand === '+') {
    return value1 + value2;
  } if (operand === '-') {
    return value1 - value2;
  } if (operand === '*') {
    return value1 * value2;
  }
};
const getQuestionAndAnswer = () => {
  const operands = ['+', '-', '*'];
  const value1 = getRandomNumber(0, 100);
  const value2 = getRandomNumber(0, 100);
  const operand = operands[getRandomNumber(0, 2)];
  const correctAnswer = String(calculate(value1, value2, operand));
  const question = `${value1} ${operand} ${value2}`;
  return [question, correctAnswer];
};
const calcGame = () => {
  runGame(description, getQuestionAndAnswer);
};
export default calcGame;
