import React, { FC } from 'react';
import style from './Input.module.scss';
import CloseButton from '../CloseButton/CloseButton';

type Props = {
  value: string;
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
  showInput: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  closeHandler: () => void;
};

const Input: FC<Props> = ({ showInput, value, onChange,
  onClick, closeHandler }) => {
  return (
    <>
      {showInput && (
        <div id="bg" className={style.bg}>
          <form className={style.form}>
            <CloseButton closeHandle={closeHandler} />
            <h3>Congratulations!</h3>
            <input
              type="text"
              value={value}
              onChange={onChange}
              placeholder="Enter your name"
              className={style.input}
            />
            <button className={style.button} type="submit" onClick={onClick}>
              Save
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Input;
