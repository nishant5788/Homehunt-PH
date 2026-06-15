import styles from "./Home.module.css";
import Layout from "../../components/Layout/Layout";

function Home() {
  return (
    <main>

      {/* HERO */}

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Find Your Perfect Home In The Philippines</h1>

          <p>
            Browse condos, apartments, houses and rentals across Manila,
            Angeles City, Clark, Cebu and more.
          </p>

          <div className={styles.heroButtons}>
            <button>Browse Properties</button>
            <button className={styles.secondary}>
              Post Property
            </button>
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTIES */}

      <section className={styles.featured}>
        <div className={styles.sectionHeader}>
          <h2>Featured Properties</h2>
          <p>Hand-picked listings from top locations</p>
        </div>

        <div className={styles.propertyGrid}>
          <div className={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1560185007-c5ca9d2c014d"
              alt=""
            />

            <div className={styles.cardBody}>
              <h3>Luxury Condo</h3>
              <p>BGC, Taguig</p>
              <h4>₱35,000 / month</h4>
            </div>
          </div>

          <div className={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt=""
            />

            <div className={styles.cardBody}>
              <h3>Family House</h3>
              <p>Angeles City</p>
              <h4>₱28,000 / month</h4>
            </div>
          </div>

          <div className={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
              alt=""
            />

            <div className={styles.cardBody}>
              <h3>Modern Apartment</h3>
              <p>Cebu City</p>
              <h4>₱18,000 / month</h4>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}

      <section className={styles.whyUs}>
        <div className={styles.sectionHeader}>
          <h2>Why Choose HomeHunt?</h2>
        </div>

        <div className={styles.features}>
          <div className={styles.feature}>
            <h3>Verified Listings</h3>
            <p>
              Every property is reviewed before being published.
            </p>
          </div>

          <div className={styles.feature}>
            <h3>Trusted Owners</h3>
            <p>
              Contact property owners directly without middlemen.
            </p>
          </div>

          <div className={styles.feature}>
            <h3>Easy Search</h3>
            <p>
              Find homes based on city, budget and property type.
            </p>
          </div>
        </div>
      </section>

      {/* CITIES */}

      <section className={styles.cities}>
        <div className={styles.sectionHeader}>
          <h2>Popular Cities</h2>
        </div>

        <div className={styles.cityGrid}>
          <div>Manila</div>
          <div>Quezon City</div>
          <div>Cebu</div>
          <div>Angeles City</div>
          <div>Davao</div>
          <div>Clark</div>
        </div>
      </section>

      {/* CTA */}

      

    </main>
  );
}

export default Home;