const lodash = require('lodash');

type Data = [
  {
    num: number | string;
    active: boolean;
    flag: boolean;
  }[]
];

export const checkEmpty = (object: Data, setData: (obj1: Data) => void) => {
  const obj = lodash.cloneDeep(object);
  let g = 0;
  let i = 0;

  while (i < obj.length) {
    let x = 0;

    while (x < obj[i].length) {
      if (obj[i][x].num === 0 && obj[i][x].active) {

        // Previous row
        if (i - 1 >= 0) {
          if (x - 1 >= 0 && !obj[i - 1][x - 1].active) {
            obj[i - 1][x - 1].active = true;
            g = 1;
          }

          if (x + 1 < obj[i].length && !obj[i - 1][x + 1].active) {
            obj[i - 1][x + 1].active = true;
            g = 1;
          }

          if (!obj[i - 1][x].active) {
            obj[i - 1][x].active = true;
          }
        }

        // Next row
        if (i + 1 < obj.length) {
          if (x - 1 >= 0 && !obj[i + 1][x - 1].active) {
            obj[i + 1][x - 1].active = true;
            g = 1;
          }

          if (x + 1 < obj[i].length && !obj[i + 1][x + 1].active) {
            obj[i + 1][x + 1].active = true;
            g = 1;
          }

          if (!obj[i + 1][x].active) {
            obj[i + 1][x].active = true;
          }
        }

        // Current row
        if (x - 1 >= 0 && !obj[i][x - 1].active) {
          obj[i][x - 1].active = true;
        }

        if (x + 1 < obj[i].length && !obj[i][x + 1].active) {
          obj[i][x + 1].active = true;
        }
      }
      x += 1;
    }

    if (g === 1) {
      i = 0;
      x = 0;
      g = 0;
    } else {
      i += 1;
    }
  }

  setData(obj);
};
