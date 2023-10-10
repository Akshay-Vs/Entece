import React from 'react';
import ProductCard from '../shared/ProductCard';
import styles from './Products.module.scss';
const Products: React.FC = () => {
  return (
    <section className={styles.container}>
      <span className={styles.line} />

      <div className={`${styles.wrapper} ${styles.border}`}>
        <ProductCard
          title="Lucy"
          description="She is a beauty queen"
          image="https://images.pexels.com/photos/6594385/pexels-photo-6594385.jpeg"
        />
        <ProductCard
          title="Blues"
          description="Dream big, Dream blue"
          image="https://images.pexels.com/photos/2078271/pexels-photo-2078271.jpeg"
        />
      </div>
      <div className={styles.wrapper}>
        <ProductCard
          title="Archem"
          description="This is a depection of a wise man"
          image="https://images.pexels.com/photos/12184734/pexels-photo-12184734.jpeg"
        />
        <ProductCard
          title="Portal"
          description="A portal to another dimention"
          image="https://images.pexels.com/photos/7307541/pexels-photo-7307541.jpeg"
        />
      </div>
    </section>
  );
};

export default Products;
