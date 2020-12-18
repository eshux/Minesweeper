/* eslint-disable no-param-reassign */
import React, { FC, useEffect, useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import style from './Game.module.scss';
import { Data } from '../../types/types';
import Cell from '../Cell/Cell';
import { newGame } from '../../helpers/newGame';
import { checkEmpty } from '../../helpers/checkEmpty';
import { checkWinner, gameOver } from '../../helpers/gameOver';
import { bombCount } from '../../helpers/bombCount';
import Header from '../Header/Header';
import Input from '../Input/Input';
import Title from '../Title/Title';

const lodash = require('lodash');

const Grid: FC = () => {
  const [data, setData] = useState<Data>();
  const [difficulty, setDifficulty] = useState(9);
  const [over, setOver] = useState(false);
  const [winner, setWinner] = useState(false);
  const [counter, setCounter] = useState(10);
  const [timer, setTimer] = useState(-1);
  const [inputValue, setInputValue] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const isInitialMount = useRef(true);

  useEffect(() => {
    resetHandler();
  }, [difficulty]);

  // Closes modal windows
  useEffect(() => {
    // @ts-ignore
    const closeHandler = (e) => {
      if (e.target.id) {
        setShowResults(false);
        setShowInput(false);
      }
    };
    window.addEventListener('mousedown', closeHandler);
    return () => {
      window.removeEventListener('mousedown', closeHandler);
    };
  }, [showResults, over]);


  // Timer
  useEffect(() => {
    const add = () => timer + 1;
    let time: NodeJS.Timeout;
    if (timer >= 0 && !over && !winner) {
      time = setTimeout(() => {
        setTimer(add);
      }, 1000);
    }
    return () => clearTimeout(time);
  }, [timer]);


  // Updates bomb counter
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      bombCount(data!, difficulty, over, setCounter, winner);
    }
  }, [data]);


  const clickHandler = (row: number, cell: number) => {
    const newData = lodash.cloneDeep(data);
    newData[row][cell].active = true;

    if (newData[row][cell].num === '💣') {
      gameOver(newData);
      setOver(true);
    }

    checkEmpty(newData, setData);
    checkWinner(newData, difficulty, setWinner, setShowInput);
    winner && setShowInput(true);
    timer < 0 && setTimer(0);
  };


  const rightClickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    row: number,
    cell: number
  ) => {
    event.preventDefault();
    const newData = lodash.cloneDeep(data);
    if (!over && !winner && !newData[row][cell].active) {
      newData[row][cell].flag = !newData[row][cell].flag;
      setData(newData);
    }
  };


  const resetHandler = () => {
    newGame(difficulty, setData);
    setWinner(false);
    setOver(false);
    setTimer(-1);
    if (difficulty === 9) {
      setCounter(10);
    } else if (difficulty === 16) {
      setCounter(40);
    } else if (difficulty === 23) {
      setCounter(99);
    }
  };


  const saveResultHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const local = JSON.parse(localStorage.getItem('MinesweeperScore')!);

    if (inputValue) {
      if (local) {
        localStorage.setItem(
          'MinesweeperScore',
          JSON.stringify([
            ...local,
            {
              name: inputValue,
              score: timer,
              mode: difficulty,
            },
          ])
        );
      } else {
        localStorage.setItem(
          'MinesweeperScore',
          JSON.stringify([{ name: inputValue, score: timer, mode: difficulty }])
        );
      }
    }
    setInputValue('');
    setShowResults(true);
  };

  return (
    <>
      <Title difficulty={difficulty} />
      <div id={`${difficulty}`} className={`${style.wrapper}`}>
        <Header
          win={winner}
          lose={over}
          onClick={resetHandler}
          counter={counter}
          timer={timer}
          dif9={() => setDifficulty(9)}
          dif16={() => setDifficulty(16)}
          dif23={() => setDifficulty(23)}
          difficulty={difficulty}
          showHandle={() => setShowResults(!showResults)}
          showResults={showResults}
        />
        <Input
          showInput={showInput}
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          onClick={saveResultHandler}
          closeHandler={() => setShowInput(false)}
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
                        difficulty={difficulty}
                      />
                    );
                  })}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Grid;
