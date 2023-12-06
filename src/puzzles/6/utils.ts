import { parseNumbers } from '../../utils/text.ts';

const INPUT_PATTERN = /^Time:\s+(.+)\nDistance:\s+(.+)/;

const parseInput = (line: string, { joined = false }) => {
  const [, timesStr, distancesStr] = line.match(INPUT_PATTERN) ?? [];

  const times = !joined ? parseNumbers(timesStr) : [parseNumber(timesStr)];
  const distances = !joined ? parseNumbers(distancesStr) : [parseNumber(distancesStr)];

  return times.map((time, index): [number, number] => [time, distances[index]]);
};

function parseNumber(line: string) {
  return Number(line.replace(/\s+/g, ''));
}

export { parseInput };
