import _ from 'lodash';
import Lazy from 'lazy.js';
import { parseInput, isInRange, type Range } from './utils.ts';

const solve = async (input: string) => {
  const { seeds: seedConfig, maps } = parseInput(input);
  const mapsReverse = [...maps].reverse();

  const seedRanges = _(seedConfig)
    .chunk(2)
    .map(([seedStart, length]): Range => [seedStart, seedStart + length])
    .value();

  const isInSeedRange = (seed: number) => seedRanges.some((range) => isInRange(range, seed));

  return Lazy.generate((index) => index++).find((candidate) => {
    const seed = mapsReverse.reduce((location, map) => {
      const ranges = map.find(({ destination }) => isInRange(destination, location));
      return ranges ? ranges.source[0] + location - ranges.destination[0] : location;
    }, candidate);

    return isInSeedRange(seed);
  });
};

export { solve };
