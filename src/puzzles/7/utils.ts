const CARDS = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];

const LINE_PATTERN = new RegExp(`^([${CARDS.join('')}]{5}) (\\d+)$`);

const parseLine = (line: string) => {
  const [, hand, bid] = line.match(LINE_PATTERN) ?? [];

  return { hand, bid: Number(bid) };
};

export { CARDS, parseLine };
