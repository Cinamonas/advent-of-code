import { describe, test, expect } from 'bun:test';
import { solve } from './';
import { readMultilineFile } from '../../utils/file.ts';

describe('day 7', () => {
  describe('part 1', () => {
    test('example', async () => {
      const input = ['32T3K 765', 'T55J5 684', 'KK677 28', 'KTJJT 220', 'QQQJA 483'];

      expect(solve(input)).toBe(6440);
    });

    test('solution', async () => {
      const input = await readMultilineFile(`${import.meta.dir}/input.txt`);

      expect(solve(input)).toBe(250254244);
    });
  });

  describe('part 2', () => {
    test('example', async () => {
      const input = ['32T3K 765', 'T55J5 684', 'KK677 28', 'KTJJT 220', 'QQQJA 483'];

      expect(solve(input, { withJokers: true })).toBe(5905);
    });

    test('solution', async () => {
      const input = await readMultilineFile(`${import.meta.dir}/input.txt`);

      expect(solve(input, { withJokers: true })).toBe(250087440);
    });
  });
});
