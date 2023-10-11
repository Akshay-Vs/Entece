import Image from 'next/image';
import React from 'react';
import styles from './ProductImage.module.scss';

export interface IProductCard {
  image: string;
}

const ProductImage: React.FC<IProductCard> = ({ image }) => {
  return (
    <div className={styles.container}>
      <Image src={image} height={500} width={400} alt={'Alt'} />
    </div>
  );
};

export default ProductImage;
