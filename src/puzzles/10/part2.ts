import { parseInput, travel, Tile, type Grid } from './utils.ts';

const solve = (input: string[]) => {
  const grid = parseInput(input);

  const travelPathGrid: Grid = grid.map((row) =>
    row.map((tile) => (tile !== Tile.Starting ? Tile.Ground : tile)),
  );

  travel(grid, ([x, y], tile) => {
    travelPathGrid[y][x] = isNorthboundTile(tile) ? Tile.Horizontal : Tile.Vertical;
  });

  return travelPathGrid.reduce((count, row) => {
    let horizontalTileCount = 0;

    return (
      count +
      row.reduce((count, char) => {
        horizontalTileCount += char === Tile.Horizontal ? 1 : 0;
        return count + (char === Tile.Ground ? horizontalTileCount % 2 : 0);
      }, 0)
    );
  }, 0);
};

function isNorthboundTile(tile: Tile) {
  return tile === Tile.Vertical || tile === Tile.NorthEast || tile === Tile.NorthWest;
}

export { solve };
