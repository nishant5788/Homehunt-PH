import styles from "./Properties.module.css";

function Properties() {
  return (
    <main className={styles.propertiesPage}>

      <section className={styles.hero}>
        <h1>Browse Properties</h1>

        <p>
          Discover apartments, condos and houses
          across the Philippines.
        </p>
      </section>

      <section className={styles.filters}>

        <input
          type="text"
          placeholder="Search property..."
        />

        <select>
          <option>All Cities</option>
          <option>Manila</option>
          <option>Taguig</option>
          <option>Cebu</option>
          <option>Angeles</option>
        </select>

      </section>

      <section className={styles.propertyGrid}>

        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1560185007-c5ca9d2c014d"
            alt=""
          />

          <div className={styles.cardBody}>
            <h3>Luxury Condo</h3>

            <p>Taguig</p>

            <span>2 Bed • 2 Bath</span>

            <h4>₱35,000/month</h4>

            <button>
              View Details
            </button>
          </div>
        </div>

      </section>

    </main>
  );
}

export default Properties;