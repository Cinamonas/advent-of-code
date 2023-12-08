import Lazy from 'lazy.js';
import { parseInput } from './utils.ts';

const START_NODE_LAST_CHAR = 'A';
const END_NODE_LAST_CHAR = 'Z';

const solve = (input: string[]) => {
  const { directions, nodes } = parseInput(input);

  let currentNodes = Object.keys(nodes).filter(isStartingNode);
  const endSteps: number[] = [];

  Lazy.generate((index) => ++index).some((steps) => {
    const direction = directions[(steps - 1) % directions.length];

    currentNodes = currentNodes
      .map((node) => {
        const nextNode = nodes[node][direction];
        return !isEndingNode(nextNode) ? nextNode : undefined;
      })
      .filter((node): node is string => {
        if (node === undefined) {
          endSteps.push(steps);
        }
        return !!node;
      });

    return !currentNodes.length;
  });

  return calcLCM(endSteps);
};

function calcLCM(numbers: number[]) {
  return numbers.reduce((a, b) => Math.abs(a * b) / calcGCD(a, b), 1);
}

function calcGCD(a: number, b: number): number {
  return b > 0 ? calcGCD(b, a % b) : a;
}

function isStartingNode(node: string) {
  return node.charAt(2) === START_NODE_LAST_CHAR;
}

function isEndingNode(node: string) {
  return node.charAt(2) === END_NODE_LAST_CHAR;
}

export { solve };
