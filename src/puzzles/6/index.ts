import _ from 'lodash';
import { parseInput } from './utils.ts';

const solve = (input: string, { joined = false } = {}) =>
  parseInput(input, { joined })
    .map(([time, distance]) =>
      _(1)
        .range(time + 1)
        .filter((chargeTime) => {
          const speed = chargeTime;
          const remainingTime = time - chargeTime;
          return speed * remainingTime > distance;
        })
        .size(),
    )
    .reduce((result, waysToWin) => result * waysToWin, 1);

export { solve };
