import React from 'react';
import styles from './Button.module.scss';

export interface IButton {
  name: string;
}

const Button: React.FC<IButton> = ({ name }) => {
  return <div className={styles.button}>{name}</div>;
};

export default Button;
