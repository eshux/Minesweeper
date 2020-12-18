import React, { FC } from 'react';
import style from './Header.module.scss';
import Button from '../Button/Button';
import ScoreBoard from '../ScoreBoard/ScoreBoard';

type Props = {
  win: boolean;
  lose: boolean;
  onClick: () => void;
  counter: number;
  timer: number;
  dif9: () => void;
  dif16: () => void;
  dif23: () => void;
  difficulty: number;
  showHandle: () => void;
  showResults: boolean;
};

const Header: FC<Props> = ({ win, lose, onClick, counter, timer,
  dif9, dif16, dif23, showHandle, showResults }) => {

  return (
    <div className={style.wrapper}>
      <div className={style.btnWrapper}>
        <div>
          <Button onClick={dif9} text="Easy" />
          <Button onClick={dif16} text="Medium" />
          <Button onClick={dif23} text="Hard" />
        </div>
        <ScoreBoard showHandle={showHandle} showResults={showResults} />
      </div>
      <div className={style.main}>
        <div className={style.counter}>{counter}</div>
        <button type="button" className={style.button} onClick={onClick}>
          <span className={style.img} role="img" aria-label="new game">
            {win && '😎'}
            {lose && '😈'}
            {!win && !lose && '😊'}
          </span>
        </button>
        <div className={style.counter}>{timer < 0 ? '0' : timer}</div>
      </div>
    </div>
  );
};

export default Header;
