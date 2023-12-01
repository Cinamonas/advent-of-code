import { describe, test, expect } from 'bun:test';
import { solve } from './';
import { readMultilineFile } from '../../utils/file.ts';

describe('day 1', () => {
  test('example (part 1)', async () => {
    const input = ['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet'];

    expect(solve(input)).toBe(142);
  });

  test('example (part 2)', async () => {
    const input = [
      'two1nine',
      'eightwothree',
      'abcone2threexyz',
      'xtwone3four',
      '4nineeightseven2',
      'zoneight234',
      '7pqrstsixteen',
    ];

    expect(solve(input)).toBe(281);
  });

  test('word fusion', async () => {
    const input = ['twone' /*21*/, 'sevenine' /*79*/, 'threeight' /*38*/];

    expect(solve(input)).toBe(138);
  });

  test('solution', async () => {
    const input = await readMultilineFile(`${import.meta.dir}/input.txt`);

    expect(solve(input)).toBe(56017);
  });
});
