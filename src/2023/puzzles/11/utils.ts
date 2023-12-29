import _ from 'lodash';

const EMPTY = '.';
const EMPTY_LINE_PATTERN = new RegExp(`^\\${EMPTY}+$`);

const parseInput = (input: string[], emptyFactor: number = 1) => {
  input = repeatEmptyRows(input, emptyFactor);
  input = repeatEmptyCols(input, emptyFactor);

  return input.map((line) => line.split(''));
};

function repeatEmptyRows(input: string[], factor: number) {
  return input.flatMap((line) =>
    EMPTY_LINE_PATTERN.test(line) ? _.fill(Array(factor), line) : line,
  );
}

function repeatEmptyCols(input: string[], factor: number) {
  const repeated = _.repeat(EMPTY, factor - 1);

  [...input[0]]
    .map((char, colIndex) =>
      char === EMPTY && input.slice(1).every((line) => line.charAt(colIndex) === EMPTY)
        ? colIndex
        : undefined,
    )
    .filter((colIndex): colIndex is number => colIndex !== undefined)
    .forEach((colIndex, index, all) => {
      const atIndex = colIndex + index * (factor - 1);
      input = input.map((line) => line.slice(0, atIndex) + repeated + line.slice(atIndex));
    });

  return input;
}

export { parseInput };
