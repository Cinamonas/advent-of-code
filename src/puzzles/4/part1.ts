import { parseLine } from './utils.ts';

const solve = (input: string[]) =>
  input.map(parseLine).reduce((sum, matches) => {
    const cardSum = matches.reduce((worth, _, index) => (worth || 1) * (index > 0 ? 2 : 1), 0);
    return sum + cardSum;
  }, 0);

export { solve };
