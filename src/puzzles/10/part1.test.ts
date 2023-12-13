import { describe, test, expect } from 'bun:test';
import { readMultilineFile } from '../../utils/file.ts';
import { solve } from './part1';

describe('day 10 (part 1)', () => {
  test('example', async () => {
    const input = [
      '.....', //
      '.S-┐.', //
      '.|.|.', //
      '.└-┘.', //
      '.....', //
    ];

    expect(solve(input)).toBe(4);
  });

  test('example 2', async () => {
    const input = [
      '..┌┐.', //
      '.┌┘|.', //
      'S┘.└┐', //
      '|┌--┘', //
      '└┘...', //
    ];

    expect(solve(input)).toBe(8);
  });

  test('solution', async () => {
    const input = await readMultilineFile(`${import.meta.dir}/input.txt`);

    expect(solve(input)).toBe(6875);
  });
});
