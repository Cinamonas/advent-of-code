import _ from 'lodash';
import { parseInput } from './utils.ts';

const solve = (input: string, { joined = false } = {}) =>
  parseInput(input, { joined }).reduce((result, [time, distance]) => {
    const waysToWin = _(1)
      .range(time + 1)
      .filter((chargeTime) => {
        const speed = chargeTime;
        const remainingTime = time - chargeTime;
        const travelledDistance = remainingTime * speed;
        return travelledDistance > distance;
      })
      .sumBy(() => 1);

    return result * waysToWin;
  }, 1);

export { solve };
