import readlineSync from 'readline-sync';

// ======================== EVEN GAME ========================
console.log('Welcome to the Brain Games!');
const getName = () => readlineSync.question('May I have your name? ');
const userName = getName();
export const greeting = () => {
  console.log(`Hello, ${userName}!`);
};
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function getRandomIntInRange(min,max) {
  return Math.floor(Math.random() * (max - min) + min);
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
// ======================== CALCULATOR GAME ========================
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
    if (+userAnswer === +expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${expectedAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
// ======================== GREATEST COMMON DIVISOR GAME ========================
}
function divisor(d1, d2) {
  const result1 = [];
  const result2 = [];
  const result3 = [];
  for (let i = 0; i <= d1; i += 1) {
    if (d1 % i === 0) {
      result1.push(i);
    }
  }
  for (let i = 0; i <= d2; i += 1) {
    if (d2 % i === 0) {
      result2.push(i);
    }
  }
  for (let i = 0; i < result1.length; i += 1) {
    if (result2.includes(result1[i])) {
      result3.push(result1[i]);
    }
  }
  return (result3[result3.length - 1]);
}
export function gcd() {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const d1 = getRandomInt(100);
    const d2 = getRandomInt(100);
    console.log('Question: ', `${d1} ${d2}`);
    const expectedAnswer = divisor(d1, d2);
    const userAnswer = readlineSync.question('Your answer: ');
    if (+userAnswer === +expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${expectedAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
// ======================== PROGRESSION GAME ========================
let numbers, hiddenNumber;
function hideNumberInString(x,y) {
  let array = [];
  for (let i=0; i < 10; i +=1) {
    x += y;
    array.push(x);
  }
  let hiddenNumberPos = getRandomInt(10);
  hiddenNumber = array[hiddenNumberPos];
  array[hiddenNumberPos] = "..";
  numbers = array.join(" ");
}
export function progression() {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const start = getRandomInt(100);
    const step = getRandomIntInRange(1,10);
    hideNumberInString(start,step);
    console.log('Question: ', numbers);
    const expectedAnswer = hiddenNumber;
    const userAnswer = readlineSync.question('Your answer: ');
    if (+userAnswer === +expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${expectedAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
