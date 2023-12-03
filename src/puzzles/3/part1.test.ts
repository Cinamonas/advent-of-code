import { describe, test, expect } from 'bun:test';
import { solve } from './part1';
import { readMultilineFile } from '../../utils/file.ts';

describe('day 3 (part 1)', () => {
  test('example', async () => {
    const input = [
      '467..114..',
      '...*......',
      '..35..633.',
      '......#...',
      '617*......',
      '.....+.58.',
      '..592.....',
      '......755.',
      '...$.*....',
      '.664.598..',
    ];

    expect(solve(input)).toBe(4361);
  });

  test('solution', async () => {
    const input = await readMultilineFile(`${import.meta.dir}/input.txt`);

    expect(solve(input)).toBe(520019);
  });
});
