import { gameOver, checkWinner } from '../../helpers/gameOver';
import { Data } from '../../types/types';

const gameData: Data = [
  [
    { num: 0, active: true, flag: false },
    { num: 1, active: true, flag: true },
    { num: 'bomb', active: false, flag: true },
    { num: 2, active: false, flag: true },
    { num: 'bomb', active: false, flag: true },
    { num: 'bomb', active: true, flag: false },
    { num: 'bomb', active: false, flag: false },
  ],
];

describe('gameOver', () => {
  it('should set all bombs active', () => {
    gameOver(gameData);
    const result = gameData[0].filter(
      (i) => i.active && typeof i.num === 'string'
    );

    expect(result.length).toEqual(4);
  });
});


describe('checkWinner', () => {
  it('should return true if there are as many unopened cells as there are bombs', () => {
    const row = [];
    for (let i = 0; i < 10; i++) {
      row.push([{ num: 2, active: true, flag: false }]);
      row.push([{ num: 'bombs', active: false, flag: false }]);
    }
    // @ts-ignore
    const result = checkWinner(row, 9);
    expect(result).toBeTruthy();
  });

  it('should return false if unopened cells are more than bombs', () => {
    const row = [];
    for (let i = 0; i < 11; i++) {
      row.push([{ num: 2, active: true, flag: false }]);
      row.push([{ num: 'bombs', active: false, flag: false }]);
    }
    // @ts-ignore
    const result = checkWinner(row, 9);
    expect(result).toBeFalsy();
  });
});
