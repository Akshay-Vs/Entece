import React from 'react';
import styles from './SideMargin.module.scss';

export const SideMargin: React.FC = () => {
  return (
    <sub className={styles.margin}>
      <h1>#INSPIRE </h1>
      <span className={styles.brown}>
        <h1>#GALLERIA</h1>
      </span>
    </sub>
  );
};

export const RightMargin: React.FC = () => {
  return (
    <span className={styles.rightMargin}>
      <h1>#SHOP</h1>
      <span className={styles.gray}>
        <h1>#SHOP</h1>
      </span>
    </span>
  );
};
