import _ from 'lodash';

const LINE_PATTERN = /^Card\s+\d+:\s+(.+?)\s+\|\s+(.+)$/;

const parseLine = (line: string) => {
  const [, winningNumbers, drawnNumbers] = line.match(LINE_PATTERN) ?? [];

  return _.intersection(parseNumbers(drawnNumbers), parseNumbers(winningNumbers));
};

function parseNumbers(str: string) {
  return str.split(/\s+/);
}

export { parseLine };
