import _ from 'lodash';
import { isInRange, parseInput } from './utils.ts';

const solve = (input: string) => {
  const { seeds, maps } = parseInput(input);

  return _(seeds)
    .map((seed) =>
      maps.reduce((location, map) => {
        const ranges = map.find(({ source }) => isInRange(source, location));
        return ranges ? ranges.destination[0] + (location - ranges.source[0]) : location;
      }, seed),
    )
    .min();
};

export { solve };
