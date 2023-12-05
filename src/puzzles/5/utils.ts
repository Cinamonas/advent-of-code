type Range = [number, number];

const INPUT_PATTERN =
  /^seeds: ([\d\s]+)\n\nseed-to-soil map:\n([\d\s]+)\n\nsoil-to-fertilizer map:\n([\d\s]+)\n\nfertilizer-to-water map:\n([\d\s]+)\n\nwater-to-light map:\n([\d\s]+)\n\nlight-to-temperature map:\n([\d\s]+)\n\ntemperature-to-humidity map:\n([\d\s]+)\n\nhumidity-to-location map:\n([\d\s]+)/;

const parseInput = (input: string) => {
  const [, seeds, ...maps] = input.match(INPUT_PATTERN) ?? [];

  return {
    seeds: seeds.split(' ').map(Number),
    maps: maps.map((mapConfigs) =>
      mapConfigs
        .trim()
        .split('\n')
        .map((mapConfig): { source: Range; destination: Range } => {
          const [destinationStart, sourceStart, length] = mapConfig.split(' ').map(Number);
          return {
            source: [sourceStart, sourceStart + length],
            destination: [destinationStart, destinationStart + length],
          };
        }),
    ),
  };
};

const isInRange = (range: Range, value: number) => range[0] <= value && value <= range[1];

export { parseInput, isInRange };
export type { Range };
