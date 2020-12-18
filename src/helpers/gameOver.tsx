/* eslint-disable no-param-reassign */
import { Data } from '../types/types';

export const gameOver = (obj: Data) => {
  obj.map((item) => {
    item.map((it) => {
      if (typeof it.num === 'string') {
        it.active = true;
      }
      return it;
    });
    return item;
  });
};

export const checkWinner = (obj: Data, difficulty: number) => {
  let count = 0;

  obj.forEach((item) => {
    item.forEach((it) => {
      if (it.active === false) {
        count += 1;
      }
    });
  });

  if (
    (difficulty === 9 && count === 10) ||
    (difficulty === 16 && count === 40) ||
    (difficulty === 23 && count === 99)
  ) {
    return true;
  }
  return false;
};
