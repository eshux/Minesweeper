import { Data } from '../types/types';

export const bombCount = (
  obj: Data,
  difficulty: number,
  over: boolean,
  setCounter: (x: number) => void,
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

  if (difficulty === 9) {
    setCounter(10 - c);
  } else if (difficulty === 16) {
    setCounter(40 - c);
  } else if (difficulty === 23) {
    setCounter(99 - c);
  }

  win && setCounter(0);
  c = 0;
};
