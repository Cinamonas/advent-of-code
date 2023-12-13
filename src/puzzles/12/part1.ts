import { parseLine, Onsen, OnsenRow } from './utils.ts';

const solve = (input: string[]) =>
  input.map(parseLine).reduce((sum, { onsens, damagedGroups }) => {
    const pattern = createValidationPattern(damagedGroups);

    return sum + getCombinations(onsens).filter((combination) => combination.match(pattern)).length;
  }, 0);

function createValidationPattern(groups: number[]) {
  const groupPatterns = groups.map((group) => `${Onsen.Damaged}{${group}}`);
  return new RegExp(`^\\.*${groupPatterns.join('\\.+')}\\.*$`);
}

function getCombinations(onsens: OnsenRow, index: number = 0): OnsenRow[] {
  if (index === onsens.length) {
    return [onsens];
  }

  if (onsens[index] === Onsen.Unknown) {
    return getCombinations(replaceAt(onsens, index, Onsen.Damaged), index + 1).concat(
      getCombinations(replaceAt(onsens, index, Onsen.Operational), index + 1),
    );
  }

  return getCombinations(onsens, index + 1);
}

function replaceAt(row: OnsenRow, index: number, char: Onsen) {
  return (row.substring(0, index) + char + row.substring(index + 1)) as OnsenRow;
}

export { solve };
