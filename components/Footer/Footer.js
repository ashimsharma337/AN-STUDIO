import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer
      id="contact"
      className={styles.footer}
    >

      <div className={styles.container}>

        <div className={styles.top}>

          <div className={styles.brand}>

            <h2>AN Studio</h2>

            <p>
              Elegant and modern fashion collections
              designed with style and confidence.
            </p>

          </div>

          <div className={styles.links}>

            <h3>Quick Links</h3>

            <a href="#products">
              Products
            </a>

            <a href="#about">
              About
            </a>

          </div>

          <div className={styles.socials}>

            <h3>Connect</h3>

            <a
              href="https://instagram.com"
              target="_blank"
            >
              Instagram
            </a>

            <a
              href="https://wa.me/14155551234"
              target="_blank"
            >
              WhatsApp
            </a>

            <a href="mailto:hello@anstudio.com">
              hello@anstudio.com
            </a>

          </div>

        </div>

        <div className={styles.bottom}>

          <p>
            © 2026 AN Studio. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  )
}