import _ from 'lodash';

const WORD_NUMBER_MAP: Record<string, string> = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
};

const NUMBERS = [..._.range(1, 10).map(String), ...Object.keys(WORD_NUMBER_MAP)];

const solve = (input: string[]) =>
  input.reduce((sum, line) => {
    const [[firstDigit], [lastDigit]] = NUMBERS.reduce(
      ([first, last], number) => {
        const index = line.indexOf(number);

        if (index === -1) {
          return [first, last];
        }

        const lastIndex = line.lastIndexOf(number);
        number = WORD_NUMBER_MAP[number] ?? number;

        return [
          index < first[1] ? [number, index] : first,
          lastIndex > last[1] ? [number, lastIndex] : last,
        ];
      },
      [
        ['0', Infinity],
        ['0', -1],
      ],
    );

    return sum + Number(firstDigit + lastDigit);
  }, 0);

export { solve };
