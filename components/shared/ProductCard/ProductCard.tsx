import Image from 'next/image';
import React from 'react';
import styles from './ProductCard.module.scss';

export interface IProductCard {
  image: string;
}

const ProductCard: React.FC<IProductCard> = ({ image }) => {
  return (
    <div className={styles.container}>
      <Image src={image} height={500} width={400} alt={'Alt'} />
      <div className={styles.info}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.description}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore dicta
          sequi quibusdam.
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
