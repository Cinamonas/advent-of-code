import _ from 'lodash';
import { parseLine } from './utils.ts';

const solve = (input: string[]) =>
  input
    .map((line, index) => [parseLine(line)])
    .flatMap((stack, index, cards) =>
      stack.map((matches) => {
        _.range(matches.length).map((offset) => {
          const targetStack = cards[index + offset + 1];
          targetStack.push(targetStack[0]);
        });
        return matches;
      }),
    ).length;

export { solve };
