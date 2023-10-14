import ImageCard from '@components/shared/ImageCard';
import React from 'react';
import Button from '../shared/Button';
import styles from './Galleria.module.scss';
const Galleria: React.FC = () => {
  return (
    <section className={styles.container} id="products">
      <span className={styles.line} />

      <div className={`${styles.wrapper} ${styles.border}`}>
        <ImageCard
          title="Lucy"
          description="She is a beauty queen"
          image="https://images.pexels.com/photos/6594385/pexels-photo-6594385.jpeg"
        />
        <ImageCard
          title="Blues"
          description="Dream big, Dream blue"
          image="https://images.pexels.com/photos/2078271/pexels-photo-2078271.jpeg"
        />
      </div>
      <div className={styles.wrapper}>
        <ImageCard
          title="Archem"
          description="This is a depection of a wise man"
          image="https://images.pexels.com/photos/12184734/pexels-photo-12184734.jpeg"
        />
        <ImageCard
          title="Portal"
          description="A portal to another dimention"
          image="https://images.pexels.com/photos/7307541/pexels-photo-7307541.jpeg"
        />
      </div>
      <div className={styles.button}>
        <Button name="View More" />
      </div>
    </section>
  );
};

export default Galleria;
