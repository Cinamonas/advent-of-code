import Lazy from 'lazy.js';
import { parseInput } from './utils.ts';

const START_NODE = 'AAA';
const END_NODE = 'ZZZ';

const solve = (input: string[]) => {
  const { directions, nodes } = parseInput(input);

  let currentNode = START_NODE;

  return Lazy.generate((index) => ++index).find((steps) => {
    const direction = directions[(steps - 1) % directions.length];

    currentNode = nodes[currentNode][direction];

    return currentNode === END_NODE;
  });
};

export { solve };
