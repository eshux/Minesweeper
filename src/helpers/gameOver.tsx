/* eslint-disable no-param-reassign */
export type Data = [
  {
    num: number | string;
    active: boolean;
    flag: boolean;
  }[]
];

export const gameOver = (obj: Data) => {
  obj.map(
    (item) => {
      item.map((it) => {
        if (typeof it.num === typeof 'bomb') {
          it.active = true;
        }
        return it;
      });
      return item;
    }
  );
};

export const checkWinner = (
  obj: Data,
  difficulty: number,
  setWin: (x: boolean) => void
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
  }
  if (difficulty === 16 && count === 40) {
    setWin(true);
  }
  if (difficulty === 23 && count === 99) {
    setWin(true);
  }
};
