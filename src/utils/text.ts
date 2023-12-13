const parseNumbers = (line: string) => line.split(/\s+/).map(Number);

const drawGrid = (grid: string[][]) => console.log(grid.map((row) => row.join('')).join('\n'));

export { parseNumbers, drawGrid };
