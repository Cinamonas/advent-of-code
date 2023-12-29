type Number = {
  value: number;
  index: number;
};

const NUMBER_PATTERN = /\d+/g;

const findNumbers = (line: string): Number[] =>
  [...line.matchAll(NUMBER_PATTERN)].map((match) => ({
    value: Number(match[0]),
    index: match.index!,
  }));

export { findNumbers };
export type { Number };
