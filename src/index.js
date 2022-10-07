import readlineSync from 'readline-sync';
import { getUser } from './cli.js';
// ======================== COMMON LOGIC ========================
export default function answerCheck(expectedAnswer) {
  const name = getUser();
  let userAnswer = readlineSync.question('Your answer: ');
  userAnswer = typeof expectedAnswer === 'number' ? Number(userAnswer) : userAnswer;
  if (expectedAnswer === userAnswer) {
    console.log('Correct!');
  } else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${expectedAnswer}.`);
    console.log(`Let's try again, ${name}!`);
    return;
  }
  console.log(`Congratulations, ${name}!`);
}
