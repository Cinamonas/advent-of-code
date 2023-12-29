import _ from 'lodash';
import { parseInput } from './utils.ts';

type Position = [number, number];

type Galaxy = {
  id: number;
  pos: Position;
};

const BASE_GROWTH_FACTOR = 2;

const solve = (input: string[], growthFactor = 2) => {
  const grid = parseInput(input, BASE_GROWTH_FACTOR);
  const baseDistances = sumDistances(grid);

  let step = 0;

  if (growthFactor > BASE_GROWTH_FACTOR) {
    const stepGrid = parseInput(input);
    step = baseDistances - sumDistances(stepGrid);
  }

  return baseDistances + step * (growthFactor - BASE_GROWTH_FACTOR);
};

function sumDistances(galaxies: string[][]) {
  return _.chain(galaxies)
    .reduce<Galaxy[]>(
      (galaxies, row, y) =>
        row.reduce(
          (galaxies, char, x) =>
            galaxies.concat(char === '#' ? [{ id: galaxies.length + 1, pos: [x, y] }] : []),
          galaxies,
        ),
      [],
    )
    .flatMap((galaxy, _, galaxies) => Array.from(galaxies).map((other) => [galaxy, other]))
    .filter(([galaxyA, galaxyB]) => galaxyA !== galaxyB)
    .uniqBy(([galaxyA, galaxyB]) => `${[galaxyA.id, galaxyB.id].sort().join('-')}`)
    .sumBy(([galaxyA, galaxyB]) => calculateManhattanDistance(galaxyA.pos, galaxyB.pos))
    .value();
}

function calculateManhattanDistance([x1, y1]: Position, [x2, y2]: Position) {
  return Math.abs(x2 - x1) + Math.abs(y2 - y1);
}

export { solve };
