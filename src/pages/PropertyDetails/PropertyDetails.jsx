import { useParams } from "react-router-dom";
import styles from "./PropertyDetails.module.css";
import { useProperties } from "../../contexts/PropertiesContext";
import Message from "../../components/Message/Message";
import Spinner from "../../components/Spinner/Spinner";

function PropertyDetails() {
  const { id } = useParams();

  console.log(id);

  const { properties, isLoading } = useProperties();

  if (isLoading) return <Spinner />;

  console.log("properties", properties);
  console.log("id from url", id);
  console.log(
    "property ids",
    properties.map((p) => p.id),
  );

  const property = properties.find(
    (property) => Number(property.id) === Number(id),
  );

  if (!property) return <Message message="Property not found" />;

  return (
    <main className={styles.detailsPage}>
      <section className={styles.imageSection}>
        <button className={styles.backBtn}>Back</button>
        <img src={property.image} alt={property.title} />
      </section>

      <section className={styles.content}>
        <div className={styles.heading}>
          <div>
            <h1>{property.title}</h1>
            <p>
              📍 {property.city} {property.province}
            </p>
          </div>

          <button className={styles.favoriteBtn}>❤️ Save</button>
        </div>

        <div className={styles.priceBox}>
          <h2>₱{property.price} / month</h2>

          <div className={styles.stats}>
            <span>{property.bedrooms} Bedrooms</span>
            <span>{property.bathrooms} Bathrooms</span>
            <span>{property.area} sqm</span>
          </div>
        </div>

        <section className={styles.description}>
          <h3>Description</h3>

          <p>{property.description}</p>
        </section>

        <section className={styles.features}>
          <h3>Property Features</h3>

          <ul>
            {property.features?.map((feature) => (
              <li>{feature}</li>
            ))}
          </ul>
        </section>

        <section className={styles.mapPlaceholder}>
          <h3>Location</h3>

          <div className={styles.fakeMap}>Leaflet Map Coming Soon</div>
        </section>

        <section className={styles.owner}>
          <h3>Property Owner</h3>

          <p>{property.ownerName}</p>
          <p>{property.ownerPhone}</p>
          <p>{property.ownerEmail}</p>

          <button>Contact Owner</button>
        </section>
      </section>
    </main>
  );
}

export default PropertyDetails;
