import React from 'react';
import ProductCard from '../shared/ProductCard';

import styles from './Products.module.scss';

const Products: React.FC = () => {
  return (
    <section id="shop" className={styles.container}>
      <div className={styles.wrapper}>
        <ProductCard image="https://images.pexels.com/photos/18069158/pexels-photo-18069158/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-the-process-used-by-text-to-image-diffusion-models-it-was-created-by-linus-zoll-as-part-of-the-visualising-ai.png" />
        <ProductCard image="https://images.pexels.com/photos/17483848/pexels-photo-17483848/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-a-look-inside-how-ai-microchips-are-designed-it-was-created-by-champ-panupong-techawongthawon-as-part-of-the-v.png" />
        <ProductCard image="https://images.pexels.com/photos/17483850/pexels-photo-17483850/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-a-look-inside-how-ai-microchips-are-designed-it-was-created-by-champ-panupong-techawongthawon-as-part-of-the-v.png" />
      </div>
      <div className={styles.wrapper}>
        <ProductCard image="https://images.pexels.com/photos/18069856/pexels-photo-18069856/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-explores-how-humans-can-creatively-collaborate-with-artificial-general-intelligence-agi-in-the-future-and-how-it-can.png" />
        <ProductCard image="https://images.pexels.com/photos/18069855/pexels-photo-18069855/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-explores-how-humans-can-creatively-collaborate-with-artificial-general-intelligence-agi-in-the-future-and-how-it-can.png" />
        <ProductCard image="https://images.pexels.com/photos/17485846/pexels-photo-17485846/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-the-ways-in-which-ai-can-help-compress-videos-and-increase-efficiency-for-users-it-was-created-by-vincent-s.png" />
      </div>
      <div className={styles.wrapper}>
        <ProductCard image="https://images.pexels.com/photos/18069161/pexels-photo-18069161/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-the-process-used-by-text-to-image-diffusion-models-it-was-created-by-linus-zoll-as-part-of-the-visualising-ai.png" />
        <ProductCard image="https://images.pexels.com/photos/18069241/pexels-photo-18069241/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-how-ai-tools-can-democratise-education-and-make-learning-more-efficient-it-was-created-by-martina-stiftinger-a.png" />
        <ProductCard image="https://images.pexels.com/photos/18069241/pexels-photo-18069241/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-how-ai-tools-can-democratise-education-and-make-learning-more-efficient-it-was-created-by-martina-stiftinger-a.png" />
      </div>
    </section>
  );
};

export default Products;
