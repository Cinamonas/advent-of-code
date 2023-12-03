import _ from 'lodash';
import { findNumbers, type Number } from './utils.ts';

const GEAR_SYMBOL = '*';

const solve = (input: string[]) => {
  const getGearAt = (x: number, y: number) =>
    input[y]?.[x] === GEAR_SYMBOL ? `${x},${y}` : undefined;

  const createGearFinderForLine =
    (lineIndex: number) =>
    ({ value, index }: Number) =>
      [...String(value)].reduce<string | undefined>((gear, _, digitIndex) => {
        const charIndex = index + digitIndex;
        return (
          gear ??
          (getGearAt(charIndex, lineIndex - 1) ||
            getGearAt(charIndex, lineIndex + 1) ||
            getGearAt(charIndex - 1, lineIndex) ||
            getGearAt(charIndex + 1, lineIndex) ||
            getGearAt(charIndex - 1, lineIndex + 1) ||
            getGearAt(charIndex - 1, lineIndex - 1) ||
            getGearAt(charIndex + 1, lineIndex - 1) ||
            getGearAt(charIndex + 1, lineIndex + 1))
        );
      }, undefined);

  return _(input)
    .flatMap((line, lineIndex) => {
      const findGear = createGearFinderForLine(lineIndex);

      return findNumbers(line).reduce<(Number & { gear: string })[]>((gearedParts, number) => {
        const gear = findGear(number);
        return gear ? gearedParts.concat({ ...number, gear }) : gearedParts;
      }, []);
    })
    .groupBy('gear')
    .filter((parts) => parts.length > 1)
    .map((parts) => parts.reduce((ratio, { value }) => ratio * value, 1))
    .sum();
};

export { solve };
