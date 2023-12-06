import { describe, test, expect } from 'bun:test';
import { solve } from './';

describe('day 6', () => {
  describe('part 1', () => {
    test('example', async () => {
      const input = `Time:      7  15   30
Distance:  9  40  200`;

      expect(solve(input)).toBe(288);
    });

    test('solution', async () => {
      const input = `Time:        49     78     79     80
Distance:   298   1185   1066   1181`;

      expect(solve(input)).toBe(2269432);
    });
  });

  describe('part 2', () => {
    test('example', async () => {
      const input = `Time:      7  15   30
Distance:  9  40  200`;

      expect(solve(input, { joined: true })).toBe(71503);
    });

    test('solution', async () => {
      const input = `Time:        49     78     79     80
Distance:   298   1185   1066   1181`;

      expect(solve(input, { joined: true })).toBe(35865985);
    });
  });
});
