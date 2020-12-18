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

export const checkWinner = (
  obj: Data,
  difficulty: number,
  setWin: (x: boolean) => void,
  showInput:(x: boolean) => void
) => {
  let count = 0;

  obj.forEach((item) => {
    item.forEach((it) => {
      if (it.active === false) {
        count += 1;
      }
    });
  });
  
  if (difficulty === 9 && count === 10) {
    setWin(true);
    showInput(true);
  }
  if (difficulty === 16 && count === 40) {
    setWin(true);
    showInput(true);
  }
  if (difficulty === 23 && count === 99) {
    setWin(true);
    showInput(true);
  }
};
