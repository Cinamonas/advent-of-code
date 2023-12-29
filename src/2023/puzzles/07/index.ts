import _ from 'lodash';
import { CARDS, parseLine } from './utils.ts';

const TYPE_PATTERNS = [
  /(.)\1\1\1\1/, // five of a kind (6)
  /(.)\1\1\1/, // four of a kind (5)
  /(.)\1\1(.)\2|(.)\3(.)\4\4/, // full house (4)
  /(.)\1\1/, // three of a kind (3)
  /(.)\1.*(.)\2/, // two pair (2)
  /(.)\1/, // pair (1)
];
const MAX_TYPE_RANK = TYPE_PATTERNS.length;

const JOKER = 'J';

const solve = (input: string[], { withJokers = false } = {}) => {
  const cards = withJokers ? _.without(CARDS, JOKER).concat(JOKER) : CARDS;

  const calcCardValue = (card: string) => cards.length - cards.indexOf(card);

  return _(input)
    .map(parseLine)
    .groupBy(({ hand }) => {
      const orderedHand = _.sortBy(hand.split(''), calcCardValue).join('');
      const typeRank = calcTypeRank(orderedHand);
      const jokerCount = withJokers ? orderedHand.split(JOKER).length - 1 : 0;

      return maybeUpgradeRank(typeRank, { jokerCount });
    })
    .mapValues((plays) =>
      plays
        .map(({ hand, ...play }) => ({
          ...play,
          cardValues: hand.split('').map(calcCardValue),
        }))
        .sort(compareCardValues),
    )
    .values()
    .flatten()
    .map(({ bid }, index) => bid * (index + 1))
    .sum();
};

function calcTypeRank(hand: string) {
  const typeIndex = TYPE_PATTERNS.findIndex((pattern) => pattern.test(hand));
  return typeIndex > -1 ? MAX_TYPE_RANK - typeIndex : 0;
}

function maybeUpgradeRank(typeRank: number, { jokerCount }: { jokerCount: number }) {
  if (!jokerCount) {
    return typeRank;
  }

  const jokerTypeRank = calcTypeRank(_.repeat(JOKER, jokerCount));
  typeRank += typeRank > jokerTypeRank ? jokerCount : 1;

  // Hands with jokers forming two pair, three of a kind, or full house need to be upgraded to a higher rank
  if (2 <= typeRank && typeRank <= 4) {
    typeRank += 1;
  }

  return Math.min(typeRank, MAX_TYPE_RANK);
}

function compareCardValues(playA: { cardValues: number[] }, playB: { cardValues: number[] }) {
  const handAValues = playA.cardValues;
  const handBValues = playB.cardValues;

  const diffIndex = handAValues.findIndex((value, index) => value !== handBValues[index]);
  return handAValues[diffIndex] > handBValues[diffIndex] ? 1 : -1;
}

export { solve };
