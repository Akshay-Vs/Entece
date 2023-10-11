import React from 'react';
import ProductCard from '../shared/ProductCard';

import styles from './Products.module.scss';

const Products: React.FC = () => {
  return (
    <section id="shop" className={styles.container}>
      <div className={styles.wrapper}>
        <ProductCard
          image="https://images.pexels.com/photos/1573434/pexels-photo-1573434.jpeg"
          title="Rhythm #1"
          price={236}
        />
        <ProductCard
          image="https://images.pexels.com/photos/7004697/pexels-photo-7004697.jpeg"
          title="Yellow Oranges"
          price={763}
          style={styles.border}
        />
        <ProductCard
          image="https://images.pexels.com/photos/7319286/pexels-photo-7319286.jpeg"
          title="Bread & Butter"
          price={75}
        />
      </div>
      <div className={styles.wrapper}>
        <ProductCard
          image="https://images.pexels.com/photos/2086361/pexels-photo-2086361.jpeg"
          title="Skyline Under"
          price={56}
        />
        <ProductCard
          image="https://images.pexels.com/photos/2911521/pexels-photo-2911521.jpeg"
          title="splash #1"
          price={567}
          style={styles.border}
        />
        <ProductCard
          image="https://images.pexels.com/photos/971546/pexels-photo-971546.jpeg"
          title="Modernism"
          price={76}
        />
      </div>
      <div className={styles.wrapper}>
        <ProductCard
          image="https://images.pexels.com/photos/3095769/pexels-photo-3095769.jpeg"
          title="splash #2"
          price={23}
        />
        <ProductCard
          image="https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg"
          title="Cappadocia Caves"
          price={76}
          style={styles.border}
        />
        <ProductCard
          image="https://images.pexels.com/photos/1690351/pexels-photo-1690351.jpeg"
          title="Minimal Abstract"
          price={45}
        />
      </div>
    </section>
  );
};

export default Products;
