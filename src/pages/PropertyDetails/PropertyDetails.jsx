import { useNavigate } from "react-router-dom";
import styles from "./PropertyDetails.module.css";

function PropertyDetails() {

  const navigate = useNavigate();
  
  return (
    <main className={styles.detailsPage}>

      <section className={styles.imageSection}>
        <img
          src="https://images.unsplash.com/photo-1560185007-c5ca9d2c014d"
          alt=""
        />
      </section>

      <section className={styles.content}>

        <div className={styles.heading}>
          <div>
            <h1>Luxury Condo</h1>
            <p>📍 Taguig, Metro Manila</p>
          </div>

          <button className={styles.favoriteBtn}>
            ❤️ Save
          </button>
        </div>

        <div className={styles.priceBox}>
          <h2>₱35,000 / month</h2>

          <div className={styles.stats}>
            <span>2 Bedrooms</span>
            <span>2 Bathrooms</span>
            <span>85 sqm</span>
          </div>
        </div>

        <section className={styles.description}>
          <h3>Description</h3>

          <p>
            Spacious modern condo located near shopping,
            restaurants and public transportation.
          </p>
        </section>

        <section className={styles.features}>
          <h3>Property Features</h3>

          <ul>
            <li>Parking</li>
            <li>Air Conditioning</li>
            <li>Security</li>
            <li>High-Speed Internet</li>
            <li>Swimming Pool</li>
            <li>Gym Access</li>
          </ul>
        </section>

        <section className={styles.mapPlaceholder}>
          <h3>Location</h3>

          <div className={styles.fakeMap}>
            Leaflet Map Coming Soon
          </div>
        </section>

        <section className={styles.owner}>
          <h3>Property Owner</h3>

          <p>John Santos</p>
          <p>0917-123-4567</p>
          <p>john@email.com</p>

          <button>
            Contact Owner
          </button>
        </section>

      </section>

    </main>
  );
}

export default PropertyDetails;