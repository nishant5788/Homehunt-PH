import { Link } from "react-router";
import styles from "./PropertyCard.module.css";
import { useProperties } from "../../contexts/PropertiesContext";

function PropertyCard({property}) {

  const {toggleFavorite, favorites} = useProperties();
  const isFavorite = favorites.includes(property.id);
    
  return (
    
    <div className={styles.card}>
              <img
  src={property.images?.[0] || "/placeholder.webp"}
  onError={(e) => {
    e.currentTarget.src = "/placeholder.webp";
  }}
  alt={property.title}
/>
              <div className={styles.cardBody}>
                <h3>{property.title}</h3>
                <p>{property.address}</p>
                <span>{property.bedrooms} Bed • {property.bathrooms} Bath • {property.type} ({property.sqm}sqm)</span>
                <h4>₱{property.original_price}/month</h4>
                <div className={styles.cardButtons}>
                <Link className={styles.btn} to={property.id}>View Details</Link>
                <button onClick={() => toggleFavorite(property.id)} className={`${styles.btn} ${styles.favorites}`}>
                  {!isFavorite ? "❤️ Add" : "Remove" }
                </button>
                </div>
              </div>
            </div>
  );
}

export default PropertyCard;