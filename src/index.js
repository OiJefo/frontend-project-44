import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const getName = () => readlineSync.question('May I have your name? ');
const userName = getName();
export const greeting = () => {
  console.log(`Hello, ${userName}!`);
};
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function isEven(x) {
  return x % 2 === 0;
}
export function evenGame() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(100);
    console.log('Question: ', number);
    const userAnswer = readlineSync.question('Your answer: ');
    const expectedAnswer = isEven(number) ? 'yes' : 'no';
    if (expectedAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${expectedAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
function operation(v1, v2, operand) {
  switch (operand) {
    case 0: console.log('Question: ', `${v1} + ${v2}`); return v1 + v2;
    case 1: console.log('Question: ', `${v1} - ${v2}`); return v1 - v2;
    case 2: console.log('Question: ', `${v1} x ${v2}`); return v1 * v2;
    default: return null;
  }
}
export function calc() {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const v1 = getRandomInt(100);
    const v2 = getRandomInt(100);
    const operand = getRandomInt(3);
    const expectedAnswer = operation(v1, v2, operand);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${expectedAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
