import { newGame, addNumbers } from '../../helpers/newGame';
import { Data } from '../../types/types';

// @ts-ignore
const numbers: Data = [
  [
    { num: 0, active: false, flag: false },
    { num: 0, active: false, flag: false },
    { num: 0, active: false, flag: false },
  ],
  [
    { num: '💣', active: false, flag: false },
    { num: 0, active: false, flag: false },
    { num: '💣', active: false, flag: false },
  ],
  [
    { num: 0, active: false, flag: false },
    { num: 0, active: false, flag: false },
    { num: 0, active: false, flag: false },
  ],
];

describe('addNumbers', () => {
  it('should place correct numbers around bombs', () => {
    const result = addNumbers(numbers);

    expect(result[1][1].num).toEqual(2);
    expect(result[0][0].num).toEqual(1);
    expect(result[0][1].num).toEqual(2);
  });
});

describe('newGame', () => {
  it('sould return an object based on difficulty', () => {
    const field = newGame(9);
    const field2 = newGame(16);

    expect(field.length).toEqual(9);
    expect(field[0].length).toEqual(9);
    expect(field2.length).toEqual(16);
    expect(field2[0].length).toEqual(16);
  });

  it('sould include correct amount of bombs', () => {
    const field:Data = newGame(9);
    const field2:Data = newGame(16);

    let count = 0;
    field.forEach((item) => {
      item.forEach((it) => {
        if (it.num === '💣') {
          count += 1;
        }
      });
    });

    let count2 = 0;
    field2.forEach((item) => {
      item.forEach((it) => {
        if (it.num === '💣') {
          count2 += 1;
        }
      });
    });

    expect(count).toEqual(10);
    expect(count2).toEqual(40);
  });
});
