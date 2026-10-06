import { Link } from "react-router";
import styles from "./PropertyCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites, toggleFavorites } from "../../redux/favoriteSlice";

function PropertyCard({ property }) {
  const favorites = useSelector(getFavorites);
  const isFavorite = favorites.some(
  (item) => item.id === property.id
);
  const dispatch = useDispatch();

  return (
    console.log("Favorites from Redux:", favorites),
    (
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
          <span>
            {property.bedrooms} Bed • {property.bathrooms} Bath •{" "}
            {property.type} ({property.sqm}sqm)
          </span>
          <h4>₱{property.original_price}/month</h4>
          <div className={styles.cardButtons}>
            <Link className={styles.btn} to={property.id}>
              View Details
            </Link>
            <button
              onClick={() => dispatch(toggleFavorites(property))}
              className={`${styles.btn} ${styles.favorites}`}
            >
              {!isFavorite ? "❤️ Add" : "Remove"}
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default PropertyCard;
