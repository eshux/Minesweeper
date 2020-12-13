import React, { FC, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import style from './Grid.module.scss';
import Cell from '../Cell/Cell';
import { newGame } from '../../helpers/newGame';
import { checkEmpty } from '../../helpers/checkEmpty';
import { checkWinner, gameOver } from '../../helpers/gameOver';
import Header from '../Header/Header';

const lodash = require('lodash');

export type Data = [
  {
    num: number | string;
    active: boolean;
    flag: boolean;
  }[]
];

type Props = {
  difficulty: number;
  // counter: number;
};

const Grid: FC<Props> = ({ difficulty }) => {
  const [data, setData] = useState<Data>();
  const [over, setOver] = useState(false);
  const [winner, setWinner] = useState(false);
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    newGame(difficulty, setData);
    if (difficulty === 9) {
      setCounter(10);
    } else if (difficulty === 16) {
      setCounter(40);
    } else if (difficulty === 23) {
      setCounter(99);
    }
  }, [difficulty]);

  const clickHandler = (row: number, cell: number) => {
    const newData = lodash.cloneDeep(data);
    newData[row][cell].active = true;
    if (newData[row][cell].num === '💣') {
      gameOver(newData);
      setOver(true);
    }
    checkEmpty(newData, setData);
    checkWinner(newData, difficulty, setWinner);
  };

  const rightClickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    row: number,
    cell: number
  ) => {
    event.preventDefault();
    const newData = lodash.cloneDeep(data);
    if (!newData[row][cell].active) {
      newData[row][cell].flag = !newData[row][cell].flag;
      setData(newData);
    }
  };

  const resetHandler = () => {
    newGame(difficulty, setData);
    setWinner(false);
    setOver(false);
  };

  return (
    <div className={style.wrapper}>
      <Header
        win={winner}
        lose={over}
        onClick={resetHandler}
        counter={counter}
      />
      <div className={style.grid}>
        {data &&
          data.map((row, index) => {
            return (
              <div key={uuidv4()}>
                {row.map((cell, i) => {
                  return (
                    <Cell
                      onClick={() => clickHandler(index, i)}
                      onRightClick={(event) =>
                        rightClickHandler(event, index, i)}
                      key={uuidv4()}
                      num={cell.num}
                      active={cell.active}
                      win={winner}
                      over={over}
                      flag={cell.flag}
                    />
                  );
                })}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Grid;
