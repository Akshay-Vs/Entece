import ProductImage from './ProductImage';
import styles from './ProductImage.module.scss';
interface IProductCard {
  image: string;
  title: string;
  price: number;
  style?: string;
}

const ProductCard: React.FC<IProductCard> = ({
  image,
  title,
  price,
  style,
}) => {
  return (
    <div className={style}>
      <ProductImage image={image} />
      <div className="flex w-full justify-around align-middle p-5">
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>$ {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
