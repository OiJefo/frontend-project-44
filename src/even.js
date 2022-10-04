import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const getName = () => readlineSync.question('May I have your name? ');
const userName = getName();
export const greeting = () => {
  console.log(`Hello, ${userName}!`);
};
function getRandomInt() {
  return Math.floor(Math.random() * 100);
}
function isEven(x) {
  return x % 2 === 0;
}
export function evenGame() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt();
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
