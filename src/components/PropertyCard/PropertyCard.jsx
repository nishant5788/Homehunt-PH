import { Link } from "react-router-dom";
import styles from "./PropertyCard.module.css";
import { useProperties } from "../../contexts/PropertiesContext";

function PropertyCard({property}) {

  const {toggleFavorite, favorites} = useProperties();
  const isFavorite = favorites.includes(property.id);

console.log("isFavorite is " + isFavorite);
    
  return (
    
    <div className={styles.card}>
              <img
                src={property.image}
                alt={property.title}
              />
              <div className={styles.cardBody}>
                <h3>{property.title}</h3>
                <p>{property.city}</p>
                <p>{property.id}</p>
                <span>{property.bedrooms} Bed • {property.bathrooms} Bath</span>
                <h4>₱{property.price}/month</h4>
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