import { bombCounter } from '../../helpers/bombCounter';
import { Data } from '../../types/types';

const gameData: Data = [
  [
    { num: 0, active: true, flag: false },
    { num: 1, active: true, flag: true },
    { num: 'bomb', active: false, flag: true },
    { num: 2, active: false, flag: true },
    { num: 'bomb', active: false, flag: true },
    { num: 'bomb', active: true, flag: true },
    { num: 'bomb', active: true, flag: false },
  ],
];

describe('bombCounter', () => {

  it('should count all unmarked bombs that are left in the game while game is not over', () => {
    const result = bombCounter(gameData, 9, false, false);
    expect(result).toEqual(10-3);
  });

  it('should count all unmarked bombs that are left in the game when game is lost', () => {
    const result = bombCounter(gameData, 9, true, false);
    expect(result).toEqual(10-4);
  });

  it('should return 0 when the game is won', () => {
    const result = bombCounter(gameData, 16, false, true);
    expect(result).toEqual(0);
  });

  it('should calculate the count based on difficulty', () => {
    const result = bombCounter(gameData, 16, false, false);
    const result2 = bombCounter(gameData, 23, false, false);

    expect(result).toEqual(40-3);
    expect(result2).toEqual(99-3);
  });
});
