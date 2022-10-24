import readlineSync from 'readline-sync';
// ======================== COMMON LOGIC ========================
const iterations = 3;
const runGame = (description, game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = 0; i < iterations; i += 1) {
    const [question, correctAnswer] = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log(`Congratulations, ${userName}!`);
  }
};
export default runGame;
