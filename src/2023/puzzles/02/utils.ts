enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

const SET_PATTERN = new RegExp(`\\d+ (${Object.values(Color).join('|')})`, 'g');

function parseLine(line: string) {
  const [, game, sets] = line.match(/^Game (\d+): (.+)/) ?? [];

  return {
    game: Number(game),
    sets: sets
      .match(SET_PATTERN)!
      .map((set) => set.split(' '))
      .map(([count, color]) => ({
        count: Number(count),
        color: color as Color,
      })),
  };
}

export { parseLine };
