import {useParams } from "react-router-dom";
import styles from "./PropertyDetails.module.css";
import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:8000";

function PropertyDetails() {
  const params = useParams();

  console.log(params.id);

  const [currentProperty, setCurrentProperty] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function fetchProperties() {
        try {
          setIsLoading(true);
          const res = await fetch(`${BASE_URL}/properties/${params.id}`);
          const data = await res.json();
          setCurrentProperty(data);
        } catch {
          alert("There is some error loading Properties...");
        } finally {
          setIsLoading(false);
        }
      }

      fetchProperties();
    },
    [params.id],
  );

  return (
    <main className={styles.detailsPage}>
      <section className={styles.imageSection}>
        <button className={styles.backBtn}>Back</button>
        <img src={currentProperty.image} alt={currentProperty.title} />
      </section>

      <section className={styles.content}>
        <div className={styles.heading}>
          <div>
            <h1>{currentProperty.title}</h1>
            <p>
              📍 {currentProperty.city} {currentProperty.province}
            </p>
          </div>

          <button className={styles.favoriteBtn}>❤️ Save</button>
        </div>

        <div className={styles.priceBox}>
          <h2>₱{currentProperty.price} / month</h2>

          <div className={styles.stats}>
            <span>{currentProperty.bedrooms} Bedrooms</span>
            <span>{currentProperty.bathrooms} Bathrooms</span>
            <span>85 sqm</span>
          </div>
        </div>

        <section className={styles.description}>
          <h3>Description</h3>

          <p>{currentProperty.description}</p>
        </section>

        <section className={styles.features}>
          <h3>Property Features</h3>

          <ul>
            {currentProperty.features?.map((feature) => <li>{feature}</li>)}            
          </ul>
        </section>

        <section className={styles.mapPlaceholder}>
          <h3>Location</h3>

          <div className={styles.fakeMap}>Leaflet Map Coming Soon</div>
        </section>

        <section className={styles.owner}>
          <h3>Property Owner</h3>

          <p>{currentProperty.ownerName}</p>
          <p>{currentProperty.ownerPhone}</p>
          <p>{currentProperty.ownerEmail}</p>

          <button>Contact Owner</button>
        </section>
      </section>
    </main>
  );
}

export default PropertyDetails;
