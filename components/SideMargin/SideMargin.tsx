import React from 'react';
import styles from './SideMargin.module.scss';

const SideMargin: React.FC = () => {
  return (
    <sub className={styles.margin}>
      <h1>#INSPIRE </h1>
      <span className={styles.brown}>
        <h1>#GALLERIA</h1>
      </span>
    </sub>
  );
};

export default SideMargin;
