/* eslint-disable no-param-reassign */
import { Data } from '../types/types';

const lodash = require('lodash');

const addBombs = (obj: Data, count: number) => {
  let bombsAdded = 0;

  while (bombsAdded !== count) {
    const position1 = Math.floor(Math.random() * obj.length);
    const position2 = Math.floor(Math.random() * obj.length);
    const bomb = '💣';

    if (obj[position1][position2].num === 0) {
      obj[position1][position2].num = bomb;
      bombsAdded += 1;
    }
  }
};

export const addNumbers = (obj2: Data) => {
  const obj = lodash.cloneDeep(obj2);
  let i = 0;
  const bomb = '💣';
  
  while (i < obj.length) {
    let x = 0;

    while (x < obj[i].length) {
      if (obj[i][x].num !== bomb) {
        x += 1;
      } else if (obj[i][x].num === bomb) {
        if (i - 1 >= 0) {
          if (x - 1 >= 0 && obj[i - 1][x - 1].num !== bomb) {
            obj[i - 1][x - 1].num += 1;
          }
          if (x + 1 < obj[i].length && obj[i - 1][x + 1].num !== bomb) {
            obj[i - 1][x + 1].num += 1;
          }
          if (obj[i - 1][x].num !== bomb) {
            obj[i - 1][x].num += 1;
          }
        }

        if (i + 1 < obj.length) {
          if (x - 1 >= 0 && obj[i + 1][x - 1].num !== bomb) {
            obj[i + 1][x - 1].num += 1;
          }
          if (x + 1 < obj[i].length && obj[i + 1][x + 1].num !== bomb) {
            obj[i + 1][x + 1].num += 1;
          }
          if (obj[i + 1][x].num !== bomb) {
            obj[i + 1][x].num += 1;
          }
        }

        if (x - 1 >= 0 && obj[i][x - 1].num !== bomb) {
          obj[i][x - 1].num += 1;
        }
        if (x + 1 < obj[i].length && obj[i][x + 1].num !== bomb) {
          obj[i][x + 1].num += 1;
        }
        x += 1;
      }
    }
    i += 1;
  }
  return obj;
};

export const newGame = (difficulty: number) => {
  const row = [];

  for (let i = 0; i < difficulty * difficulty; i++) {
    row.push({ num: 0, active: false, flag: false });
  }
  
  const field = lodash.chunk(row, difficulty);

  if (difficulty === 9) {
    addBombs(field, 10);
  } else if (difficulty === 16) {
    addBombs(field, 40);
  } else if (difficulty === 23) {
    addBombs(field, 99);
  }

  const newField = addNumbers(field);
  return newField;
};
