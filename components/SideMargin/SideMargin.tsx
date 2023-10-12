'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import styles from './SideMargin.module.scss';

export const SideMargin: React.FC = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.sub
        className={styles.margin}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <h1>#INSPIRE </h1>
        <span className={styles.brown}>
          <h1>#GALLERIA</h1>
        </span>
      </motion.sub>
    </AnimatePresence>
  );
};
export const RightMargin: React.FC = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.span
      className={styles.rightMargin}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1>#SHOP</h1>
      <span className={styles.gray}>
        <h1>#SHOP</h1>
      </span>
    </motion.span>
  );
};
