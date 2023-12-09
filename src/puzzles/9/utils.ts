import { parseNumbers } from '../../utils/text.ts';

const parseInput = (input: string[]) => input.map(parseNumbers);

const isFinalSequence = (sequence: number[]) => sequence.every((value) => value === 0);

export { parseInput, isFinalSequence };
