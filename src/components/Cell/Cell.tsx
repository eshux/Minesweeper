import React, { FC } from 'react';
import style from './Cell.module.scss';

type Props = {
  num: number | string;
  onRightClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onClick: () => void;
  active: boolean;
  win: boolean;
  over: boolean;
  flag: boolean;
  difficulty: number;
};

const Cell: FC<Props> = ({ num, onClick, active, win, 
  over, onRightClick, flag, difficulty }) => {

  return (
    <button
      onContextMenu={onRightClick}
      onClick={onClick}
      type="button"
      id={`${num}`}
      className={`${style.cell} ${active ? style.activeCell : ''} 
        ${(flag && !active) || (win && !active) ? style.flaggedCell : ''}
        ${(flag && over && typeof num === 'string') ? style.rightGuess : ''}
        ${difficulty === 16 ? style.medium : ''}
        ${difficulty === 23 ? style.hard : ''} `}
      disabled={(win || over || flag) && true}
    >
      <div className={style.content}>{num}</div>
    </button>
  );
};

export default Cell;
