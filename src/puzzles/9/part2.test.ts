import { describe, test, expect } from 'bun:test';
import { readMultilineFile } from '../../utils/file.ts';
import { solve } from './part2';

describe('day 9 (part 2)', () => {
  test('example', async () => {
    const input = ['0 3 6 9 12 15', '1 3 6 10 15 21', '10 13 16 21 30 45'];

    expect(solve(input)).toBe(2);
  });

  test('solution', async () => {
    const input = await readMultilineFile(`${import.meta.dir}/input.txt`);

    expect(solve(input)).toBe(973);
  });
});
