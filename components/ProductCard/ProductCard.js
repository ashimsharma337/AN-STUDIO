import Image from 'next/image';
import styles from './ProductCard.module.scss';

export default function ProductCard({ product }) {
  const whatsappMessage = `Hi, I am interested in ${product.name}`

  return (
    <div className={styles.card}>
      
      <Image
        src={product.image}
        alt={product.name}
        width={500}
        height={500}
        className={styles.image}
      />

      <div className={styles.content}>
        <h2 className={styles.title}>
          {product.name}
        </h2>

        <p className={styles.price}>
          {product.price}
        </p>

        <a
          href={`https://wa.me/16472934294?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          className={styles.button}
        >
          Order on WhatsApp
        </a>
      </div>
    </div>
  )
}