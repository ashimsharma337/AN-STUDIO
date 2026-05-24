import Image from 'next/image';
import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      
      {/* Logo Section */}
      <div className={styles.leftSection}>
        <Image
          src="/images/logo.jpeg"
          alt="AN Studio Logo"
          width={60}
          height={60}
          className="rounded-full"
        />

        <h1 className={styles.logoText}>
          AN Studio
        </h1>
      </div>

      {/* Navigation Links */}
      <div className={styles.menu}>
        <a href="#products">
          Products
        </a>

        <a href="#about">
          About
        </a>

        <a href="#contact">
          Contact
        </a>
      </div>
    </nav>
  )
}