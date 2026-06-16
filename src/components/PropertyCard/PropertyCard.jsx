import { Link } from "react-router-dom";
import styles from "./PropertyCard.module.css";

function PropertyCard({property}) {
    

  return (
    
    <div className={styles.card}>
              <img
                src={property.image}
                alt={property.title}
              />
              <div className={styles.cardBody}>
                <h3>{property.title}</h3>
                <p>{property.city}</p>
                <span>{property.bedrooms} Bed • {property.bathrooms} Bath</span>
                <h4>₱{property.price}/month</h4>
                <Link className={styles.btn} to={property.id}>View Details</Link>

              </div>
            </div>
  );
}

export default PropertyCard;