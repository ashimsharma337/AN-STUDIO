import products from '@/data/products';
import ProductCard from '../ProductCard/ProductCard';
import styles from './Products.module.scss';

export default function Products() {
  return (
    <section id="products" className={styles.section}>

      <h2 className={styles.heading}>
        Our Collection
      </h2>

      <div className={styles.grid}>
        
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>
    </section>
  )
}