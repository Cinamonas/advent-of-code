import { describe, test, expect } from 'bun:test';
import { readMultilineFile } from '../../utils/file.ts';
import { solve } from './part1';

describe('day 8 (part 1)', () => {
  test('example', async () => {
    const input = [
      'RL',
      '',
      'AAA = (BBB, CCC)',
      'BBB = (DDD, EEE)',
      'CCC = (ZZZ, GGG)',
      'DDD = (DDD, DDD)',
      'EEE = (EEE, EEE)',
      'GGG = (GGG, GGG)',
      'ZZZ = (ZZZ, ZZZ)',
    ];

    expect(solve(input)).toBe(2);
  });

  test('example 2', async () => {
    const input = ['LLR', '', 'AAA = (BBB, BBB)', 'BBB = (AAA, ZZZ)', 'ZZZ = (ZZZ, ZZZ)'];

    expect(solve(input)).toBe(6);
  });

  test('solution', async () => {
    const input = await readMultilineFile(`${import.meta.dir}/input.txt`);

    expect(solve(input)).toBe(11567);
  });
});
