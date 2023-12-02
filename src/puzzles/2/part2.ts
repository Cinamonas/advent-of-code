import { parseLine } from './utils.ts';

const solve = (input: string[]) =>
  input.reduce((sum, line) => {
    const { sets } = parseLine(line);

    const maxByColor = sets.reduce(
      (max, { color, count }) => {
        if (count > max[color]) {
          max[color] = count;
        }
        return max;
      },
      { red: 0, green: 0, blue: 0 },
    );

    return sum + maxByColor.red * maxByColor.green * maxByColor.blue;
  }, 0);

export { solve };
