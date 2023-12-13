import _ from 'lodash';

const LEFT = 'L';
const RIGHT = 'R';
const LINE_PATTERN = /^([\w\d]{3}) = \(([\w\d]{3}), ([\w\d]{3})\)$/;

type Direction = typeof LEFT | typeof RIGHT;

const parseInput = (input: string[]) => {
  const [directions, ...nodes] = _.compact(input);

  return {
    directions: directions.split('') as Direction[],
    nodes: _.keyBy(nodes.map(parseNode), 'root'),
  };
};

function parseNode(line: string) {
  const [, root, left, right] = line.match(LINE_PATTERN) ?? [];
  return { root, [LEFT]: left, [RIGHT]: right };
}

export { parseInput };
export type { Direction };
