import { describe, test, expect } from 'bun:test';
import { readMultilineFile } from '../../utils/file.ts';
import { solve } from './part1';

describe('day 12 (part 1)', () => {
  test('example', async () => {
    const input = [
      '???.### 1,1,3',
      '.??..??...?##. 1,1,3',
      '?#?#?#?#?#?#?#? 1,3,1,6',
      '????.#...#... 4,1,1',
      '????.######..#####. 1,6,5',
      '?###???????? 3,2,1',
    ];

    expect(solve(input)).toBe(21);
  });

  test('solution', async () => {
    const input = await readMultilineFile(`${import.meta.dir}/input.txt`);

    expect(solve(input)).toBe(8180);
  });
});
