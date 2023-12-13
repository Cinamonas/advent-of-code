import { parseInput, travel } from './utils.ts';

const solve = (input: string[]) => {
  const grid = parseInput(input);

  return travel(grid) / 2;
};

export { solve };
