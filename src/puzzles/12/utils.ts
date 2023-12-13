import _ from 'lodash';

enum Onsen {
  Operational = '.',
  Damaged = '#',
  Unknown = '?',
}

type OnsenRow = `${Onsen}`;

const parseLine = (line: string) => {
  const [onsens, groups] = line.split(' ');

  return {
    onsens: onsens as OnsenRow,
    damagedGroups: groups.split(',').map(Number),
  };
};

export { parseLine, Onsen, OnsenRow };
