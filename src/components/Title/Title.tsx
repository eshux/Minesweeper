import React, { FC } from 'react';
import style from './Title.module.scss';

type Props = {
  difficulty: number;
};

const Title:FC<Props> = ({ difficulty }) => {
  return (
    <div className={style.wrapper}>
      <h1 id={`${difficulty}`} className={style.title}>Minesweeper</h1>
    </div>
  );
};

export default Title;