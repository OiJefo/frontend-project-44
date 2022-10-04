
import readlineSync from 'readline-sync';
 
console.log('Welcome to the Brain Games!');

const getName = () => readlineSync.question('May I have your name? ');
const userName = getName();
 
export const greeting = () => {
  console.log(`Hello, ${userName}!`);
};
 
const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};
 
export const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
 
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(100);
    console.log('Question: ', number);
    const answerUser = readlineSync.question('Your answer: ');
 
    const checking1 = ((number % 2 === 0) && (answerUser === 'yes'));
    const checking2 = ((number % 2 !== 0) && (answerUser === 'no'));
 
    if ((checking1 === true) || (checking2 === true)) {
      console.log('Correct!');
    } else {
      const opposite = (answerUser === 'yes' ? 'no' : 'yes');
      return (`${answerUser} is wrong answer ;(. Correct answer was ${opposite}. Let's try again, ${userName}!`);
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
