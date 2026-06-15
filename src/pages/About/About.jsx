import styles from "./About.module.css";

function About() {
  return (
    <main className={styles.about}>
      <section className={styles.hero}>
        <h1>About HomeHunt PH</h1>

        <p>
          Helping renters and property owners
          connect throughout the Philippines.
        </p>
      </section>

      <section className={styles.content}>
        <div className={styles.card}>
          <h2>Our Mission</h2>

          <p>
            Make property search easier, faster,
            and safer for everyone.
          </p>
        </div>

        <div className={styles.card}>
          <h2>Why HomeHunt?</h2>

          <p>
            Verified listings, direct owner contact,
            and a simple user experience.
          </p>
        </div>
      </section>

      <section className={styles.stats}>
        <div>
          <h3>500+</h3>
          <p>Properties</p>
        </div>

        <div>
          <h3>100+</h3>
          <p>Cities</p>
        </div>

        <div>
          <h3>5000+</h3>
          <p>Users</p>
        </div>
      </section>
    </main>
  );
}

export default About;