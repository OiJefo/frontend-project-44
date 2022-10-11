#!/usr/bin/env node
import answerCheck from '../index.js';
import getRandomIntInRange from '../helper.js';
// ======================== PROGRESSION GAME ========================
let hiddenNumber;
const progressionLength = 10;
const description = 'What number is missing in the progression?';
function getProgression(value1, value2) {
  const array = [];
  let accum = value1;
  for (let i = 0; i < progressionLength; i += 1) {
    accum += value2;
    array.push(accum);
  }
// вот эту часть перенеси пожалуйста в соседнюю функцию 
// попробуй сгенерить индекс исходя из длины массива для 
// скрытого элемента, сохранить сам ответ (скрытый элемент), 
// отдельно сохранить вопрос (прогрессию со скрытым элементом)

  const hiddenNumberPos = getRandomIntInRange(0, progressionLength);
  hiddenNumber = array[hiddenNumberPos];
  array[hiddenNumberPos] = '..';
  return array.join(' ');
}
function getAnswerAndQuestion() {
  const start = getRandomIntInRange(0, 100);
  const step = getRandomIntInRange(1, 10);
  const question = getProgression(start, step);
  const expectedAnswer = hiddenNumber;
  return [question, String(expectedAnswer)];
}
export default function progressionGame() {
  answerCheck(description, getAnswerAndQuestion);
}
