import PropertyCard from "../../components/PropertyCard/PropertyCard";
import styles from "./Favorites.module.css";
import Message from "../../components/Message/Message";
import Spinner from "../../components/Spinner/Spinner";
import { useProperties } from "../../contexts/PropertiesContext";


function Favorites() {
  const {favoriteProperties, isLoading, error } = useProperties();

  return (
    <main className={styles.propertiesPage}>
      <section className={styles.hero}>
        <h1>❤️ My Favorites</h1>
        <p>Save properties you love and access them anytime.</p>
        <p>{favoriteProperties.length < 1 ? "You haven't saved any properties yet. " : `${favoriteProperties.length} Saved Properties`}</p>
      </section>

      {error && <Message message={error} />}
      {isLoading && <Spinner />}

      <section className={styles.propertyGrid}>
        {favoriteProperties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            isLoading={isLoading}
          />
        ))}
      </section>
    </main>
  );
}

export default Favorites;
