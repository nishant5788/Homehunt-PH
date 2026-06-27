import styles from "./FeaturedProperties.module.css";

function FeaturedProperties() {
  return (
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
  );
}

export default FeaturedProperties;
