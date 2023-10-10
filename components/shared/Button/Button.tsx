import React from 'react';
import styles from './Button.module.scss';

export interface IButton {
  name: string;
}

const Button: React.FC<IButton> = ({ name }) => {
  return <button className={styles.button}>{name}</button>;
};

export default Button;
