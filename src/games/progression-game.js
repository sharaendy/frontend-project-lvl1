import randomIntegerGenerator from '../randomIntegerGenerator.js';
import arrayGenerator from '../arrayGenerator.js';
import engine from '../index.js';

const gameRules = 'What number is missing in the progression?';

function progressionGameGenerator() {
  const sequence = arrayGenerator();
  const index = randomIntegerGenerator(2, 7);
  const trueAnswer = String(sequence[index]);
  sequence[index] = '..';
  const question = String(sequence);
  return [question, trueAnswer];
}

function brainProgressionGame() {
  return engine(gameRules, progressionGameGenerator);
}

export default brainProgressionGame;