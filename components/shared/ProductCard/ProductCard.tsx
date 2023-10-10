import React from 'react';
import styles from './ProductCard.module.scss';

export interface IProductCard {
  sampleTextProp: string;
}

const ProductCard: React.FC<IProductCard> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default ProductCard;
