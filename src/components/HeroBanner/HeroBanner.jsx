import styles from "./HeroBanner.module.css";

function HeroBanner() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Find Your Perfect Home In The Philippines</h1>

        <p>
          Browse condos, apartments, houses and rentals across Manila, Angeles
          City, Clark, Cebu and more.
        </p>

        <div className={styles.heroButtons}>
          <button>Browse Properties</button>
          <button className={styles.secondary}>Post Property</button>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
