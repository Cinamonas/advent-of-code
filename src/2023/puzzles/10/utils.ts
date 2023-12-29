import _ from 'lodash';
import Lazy from 'lazy.js';

enum Tile {
  Starting = 'S',
  Vertical = '|',
  Horizontal = '-',
  NorthEast = '└',
  NorthWest = '┘',
  SouthEast = '┌',
  SouthWest = '┐',
  Ground = '.',
}

type Grid = Tile[][];

type Position = [number, number];

const DIRECTIONS = ['up', 'right', 'down', 'left'] as const;

type Direction = (typeof DIRECTIONS)[number];

const DIRECTION_OFFSET: Record<Direction, Position> = {
  up: [0, -1],
  right: [1, 0],
  down: [0, 1],
  left: [-1, 0],
};

const NEXT_DIRECTION: Partial<Record<Tile, Partial<Record<Direction, Direction>>>> = {
  [Tile.Vertical]: {
    up: 'up',
    down: 'down',
  },
  [Tile.Horizontal]: {
    right: 'right',
    left: 'left',
  },
  [Tile.NorthEast]: {
    down: 'right',
    left: 'up',
  },
  [Tile.NorthWest]: {
    down: 'left',
    right: 'up',
  },
  [Tile.SouthEast]: {
    up: 'right',
    left: 'down',
  },
  [Tile.SouthWest]: {
    up: 'left',
    right: 'down',
  },
};

const parseInput = (input: string[]): Grid =>
  input.map((row) => row.split('').map((tile) => tile as Tile));

const travel = (grid: Grid, onStep: (pos: Position, tile: Tile) => void = _.noop) => {
  let steps = 0;

  let [x, y] = findStartingPosition(grid);
  let direction: Direction = DIRECTIONS[0];

  const getTileAt = ([x, y]: Position) => grid[y]?.[x];

  Lazy.generate((index) => index++).find(() => {
    const [dx, dy] = DIRECTION_OFFSET[direction];

    const nextPos: Position = [x + dx, y + dy];
    const nextTile = getTileAt(nextPos);

    if (nextTile === Tile.Starting) {
      return true;
    }

    const nextDirection = NEXT_DIRECTION[nextTile]?.[direction];
    direction = nextDirection ?? rotateDirection(direction);

    const travelling = !!nextDirection;
    if (travelling) {
      [x, y] = nextPos;
      steps += 1;

      onStep(nextPos, nextTile);
    }

    return false;
  });

  return steps + 1;
};

function findStartingPosition(grid: Grid): Position {
  let startPos: Position = [0, 0];

  grid.some((row, y) =>
    row.some((tile, x) => {
      if (tile === Tile.Starting) {
        startPos = [x, y];
        return true;
      }
    }),
  );

  return startPos;
}

function rotateDirection(direction: Direction): Direction {
  return DIRECTIONS[(DIRECTIONS.indexOf(direction) + 1) % DIRECTIONS.length];
}

export { parseInput, travel, Tile };
export type { Grid };
