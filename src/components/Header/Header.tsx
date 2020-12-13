import React, { FC } from 'react';
import style from './Header.module.scss';

type Props = {
  win: boolean;
  lose: boolean;
  onClick: () => void;
  counter: number;
};

const Header: FC<Props> = ({ win, lose, onClick, counter}) => {

  return (
    <div className={style.wrapper}>
      <div className={style.counter}>{counter}</div>
      <button type="button" className={style.button} onClick={onClick}>
        {win && (
          <span className="img" role="img" aria-label="new game">
            😎
          </span>
        )}
        {lose && (
          <span className="img" role="img" aria-label="new game">
            😈
          </span>
        )}
        {!win && !lose && (
          <span className="img" role="img" aria-label="new game">
            😊
          </span>
        )}
      </button>
      <span> Timer </span>
    </div>
  );
};

export default Header;
