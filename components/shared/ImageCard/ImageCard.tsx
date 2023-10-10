import Image from 'next/image';
import React from 'react';
import styles from './ImageCard.module.scss';

interface IProductCart {
  // id: string;
  title: string;
  // price: number;
  description: string;
  image: string;
}

const ImageCard: React.FC<IProductCart> = ({ image, title, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
      <Image src={image} alt={'Alt'} width={600} height={600} />
    </div>
  );
};

export default ImageCard;
