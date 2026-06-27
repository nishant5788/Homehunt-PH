import styles from "./Favorites.module.css";

function Favorites() {
  return (
    <section className={styles.favorites}>
      <div className="container">

        <div className={styles.header}>
          <h1>❤️ My Favorites</h1>
          <p>Save properties you love and access them anytime.</p>
        </div>

        <p className={styles.count}>
          3 Saved Properties
        </p>

        <div className={styles.grid}>

          {/* Property Card */}

          <article className={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
              alt=""
            />

            <div className={styles.content}>

              <h3>Modern Apartment</h3>

              <p className={styles.location}>
                📍 Cebu City
              </p>

              <p className={styles.price}>
                ₱18,000 / month
              </p>

              <div className={styles.info}>
                <span>🛏 1 Bed</span>
                <span>🚿 1 Bath</span>
                <span>📐 55 sqm</span>
              </div>

              <div className={styles.buttons}>
                <button>View Details</button>
                <button className={styles.remove}>
                  Remove
                </button>
              </div>

            </div>
          </article>

        </div>

      </div>
    </section>
  );
}

export default Favorites;