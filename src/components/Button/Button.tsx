import React, { FC } from 'react';
import style from './Button.module.scss';

type Props = {
  onClick: () => void;
  text?: string;
};

const Button: FC<Props> = ({ onClick, text }) => {
  return (
    <button className={style.button} type="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
