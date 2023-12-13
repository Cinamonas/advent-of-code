import _ from 'lodash';
import { parseNumbers } from '../../utils/text.ts';

const LINE_PATTERN = /^Card\s+\d+:\s+(.+?)\s+\|\s+(.+)$/;

const parseLine = (line: string) => {
  const [, winningNumbers, drawnNumbers] = line.match(LINE_PATTERN) ?? [];

  return _.intersection(parseNumbers(drawnNumbers), parseNumbers(winningNumbers));
};

export { parseLine };
