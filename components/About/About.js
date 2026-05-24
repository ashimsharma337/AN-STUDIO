import styles from './About.module.scss';

export default function About() {
  return (
    <section
      id="about"
      className={styles.section}
    >
      <div className={styles.container}>

        <h2 className={styles.heading}>
          About AN Studio
        </h2>

        <p className={styles.text}>
          AN Studio is a modern fashion brand focused on elegant,
          affordable, and stylish clothing. Our mission is to help
          everyone feel confident and beautiful with carefully selected
          fashion collections.
        </p>

      </div>
    </section>
  )
}