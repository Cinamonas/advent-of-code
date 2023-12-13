import { parseLine } from './utils.ts';

const LIMITS = {
  red: 12,
  green: 13,
  blue: 14,
} as const;

const solve = (input: string[]) =>
  input.reduce((sum, line) => {
    const { game, sets } = parseLine(line);
    const possible = sets.some(({ count, color }) => count > LIMITS[color]);

    return sum + (possible ? 0 : Number(game));
  }, 0);

export { solve };
