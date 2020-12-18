import { Data } from '../types/types';

export const bombCounter = (
  obj: Data,
  difficulty: number,
  over: boolean,
  // setCounter: (x: number) => void,
  win: boolean
) => {
  let c = 0;

  obj.forEach((item) => {
    item.forEach((it) => {
      if (!over) {
        if (it.flag && !it.active) {
          c += 1;
        }
      } else if (over) {
        if (
          (it.flag && !it.active) ||
          (it.flag && it.active && typeof it.num === 'string')
        ) {
          c += 1;
        }
      }
    });
  });

  if (win) {
    return 0;
  }
  if (difficulty === 9) {
    return 10 - c;
  }
  if (difficulty === 16) {
    return 40 - c;
  }
  return 99 - c;
};
