import { parseInput, isFinalSequence } from './utils.ts';

const solve = (input: string[]) => {
  const extrapolateNextValue = (sequence: number[]): number =>
    !isFinalSequence(sequence)
      ? sequence[sequence.length - 1] + extrapolateNextValue(calcDifferences(sequence))
      : 0;

  return parseInput(input).reduce((sum, sequence) => sum + extrapolateNextValue(sequence), 0);
};

function calcDifferences(sequence: number[]) {
  return sequence.map((value, index) => sequence[index + 1] - value).slice(0, -1);
}

export { solve };
