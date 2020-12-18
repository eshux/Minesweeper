import { checkEmpty } from '../../helpers/checkEmpty';
import { Data } from '../../types/types';

// @ts-ignore
const gameData:Data = [
  [
    { num: 0, active: false, flag: false },
    { num: 1, active: false, flag: false },
    { num: 'bomb', active: false, flag: false },
  ],
  [
    { num: 0, active: false, flag: false },
    { num: 1, active: false, flag: false },
    { num: 1, active: false, flag: false },
  ],
  [
    { num: 0, active: false, flag: false },
    { num: 0, active: true, flag: false },
    { num: 0, active: false, flag: false },
  ]
];

describe('checkEmpty', () => {

  it('should set all other empty cells active', () => {
    const result = checkEmpty(gameData);
    expect(result[0][0].active).toBeTruthy();
    expect(result[1][0].active).toBeTruthy();
    expect(result[2][0].active).toBeTruthy();
    expect(result[2][2].active).toBeTruthy();
  });

  it('should set all cells around empty cells - active ', () => {
    const result = checkEmpty(gameData);
    expect(result[0][1].active).toBeTruthy();
    expect(result[1][1].active).toBeTruthy();
    expect(result[1][2].active).toBeTruthy();
  });

  it('should not change any other cell', () => {
    const result = checkEmpty(gameData);
    expect(result[0][2].active).toBeFalsy();
  });

});