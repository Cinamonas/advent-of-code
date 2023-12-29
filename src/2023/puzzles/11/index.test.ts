import { describe, test, expect } from 'bun:test';
import { readMultilineFile } from '../../utils/file.ts';
import { solve } from './';

describe('day 11', () => {
  describe('part 1', () => {
    test('example', async () => {
      const input = [
        '...#......',
        '.......#..',
        '#.........',
        '..........',
        '......#...',
        '.#........',
        '.........#',
        '..........',
        '.......#..',
        '#...#.....',
      ];

      expect(solve(input)).toBe(374);
    });

    test('solution', async () => {
      const input = await readMultilineFile(`${import.meta.dir}/input.txt`);

      expect(solve(input)).toBe(9445168);
    });
  });

  describe('part 2', () => {
    test('example 10x', async () => {
      const input = [
        '...#......',
        '.......#..',
        '#.........',
        '..........',
        '......#...',
        '.#........',
        '.........#',
        '..........',
        '.......#..',
        '#...#.....',
      ];

      expect(solve(input, 10)).toBe(1030);
    });

    test('solution', async () => {
      const input = await readMultilineFile(`${import.meta.dir}/input.txt`);

      expect(solve(input, 1000000)).toBe(742305960572);
    });
  });
});
