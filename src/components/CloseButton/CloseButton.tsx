import React, { FC } from 'react';
import style from './CloseButton.module.scss';

type Props = {
  closeHandle: () => void;
};

const CloseButton: FC<Props> = ({ closeHandle }) => {
  return (
    <button type="button" onClick={closeHandle} className={style.close}>
      {' '}
    </button>
  );
};

export default CloseButton;
