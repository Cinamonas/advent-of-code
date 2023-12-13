import { parseInput, isFinalSequence } from './utils.ts';

const solve = (input: string[]) => {
  const extrapolatePreviousValue = (sequence: number[]): number =>
    !isFinalSequence(sequence)
      ? sequence[0] - extrapolatePreviousValue(calcDifferencesBackwards(sequence))
      : 0;

  return parseInput(input).reduce((sum, sequence) => sum + extrapolatePreviousValue(sequence), 0);
};

function calcDifferencesBackwards(sequence: number[]) {
  return sequence.map((value, index) => value - sequence[index - 1]).slice(1);
}

export { solve };
