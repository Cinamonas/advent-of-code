import _ from 'lodash';
import { findNumbers, type Number } from './utils.ts';

const SYMBOL_PATTERN = /[^\d.]/;

const solve = (input: string[]) => {
  const isSymbolAt = (x: number, y: number) => {
    const char = input[y]?.[x];
    return char !== undefined && SYMBOL_PATTERN.test(char);
  };

  const createPartCheckerForLine =
    (lineIndex: number) =>
    ({ value, index }: Number) =>
      [...String(value)].some((_, digitIndex) => {
        const charIndex = index + digitIndex;
        return (
          isSymbolAt(charIndex, lineIndex - 1) ||
          isSymbolAt(charIndex, lineIndex + 1) ||
          isSymbolAt(charIndex - 1, lineIndex) ||
          isSymbolAt(charIndex + 1, lineIndex) ||
          isSymbolAt(charIndex - 1, lineIndex - 1) ||
          isSymbolAt(charIndex - 1, lineIndex + 1) ||
          isSymbolAt(charIndex + 1, lineIndex - 1) ||
          isSymbolAt(charIndex + 1, lineIndex + 1)
        );
      });

  return input.reduce((sum, line, lineIndex) => {
    const isPart = createPartCheckerForLine(lineIndex);

    return sum + _(findNumbers(line)).filter(isPart).sumBy('value');
  }, 0);
};

export { solve };
