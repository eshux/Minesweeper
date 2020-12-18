import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import style from './ScoreBoard.module.scss';
import Button from '../Button/Button';
import CloseButton from '../CloseButton/CloseButton';

type Props = {
  showResults: boolean;
  showHandle: () => void;
};

type Results = {
  name: string;
  mode: number;
  score: number;
}[];

const compare = (a:{score:number}, b:{score:number}) => {
  if ( a.score < b.score ){
    return -1;
  }
  if ( a.score > b.score ){
    return 1;
  }
  return 0;
};

const ScoreBoard:FC<Props> = ({ showResults, showHandle }) => {
  
  const results: Results = JSON.parse(
    localStorage.getItem('MinesweeperScore')!);
    
  results && results.sort(compare);

  return (
    <>
      <Button text="🥇" onClick={showHandle} />
      {showResults && (
        <div id="bg" className={style.bg}>
          <div className={style.wrapper}>
            <CloseButton closeHandle={showHandle} />
            <h1> Latest results </h1>
            <table className={style.table}>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Game mode</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {results &&
                  results.map(({ name, mode, score }, index) => {
                    return (
                      <tr key={uuidv4()}>
                        <td>{index + 1}</td>
                        <td>{name}</td>
                        <td>
                          {mode === 9 && 'Easy'}
                          {mode === 16 && 'Medium'}
                          {mode === 23 && 'Hard'}
                        </td>
                        <td>{score} s</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default ScoreBoard;
