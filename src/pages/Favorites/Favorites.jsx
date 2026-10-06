import PropertyCard from "../../components/PropertyCard/PropertyCard";
import styles from "./Favorites.module.css";
// import Message from "../../components/Message/Message";
// import Spinner from "../../components/Spinner/Spinner";
// import { useProperties } from "../../contexts/PropertiesContext";
import { getFavorites } from "../../redux/favoriteSlice";
import { useSelector } from "react-redux";
import { useNavigation } from "react-router";
import Spinner from "../../components/Spinner/Spinner";


function Favorites() {

  const favoriteProperties = useSelector(getFavorites);
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <main className={styles.propertiesPage}>
      <section className={styles.hero}>
        <h1>❤️ My Favorites</h1>
        <p>Save properties you love and access them anytime.</p>
        <p>{favoriteProperties.length < 1 ? "You haven't saved any properties yet. " : `${favoriteProperties.length} Saved Properties`}</p>
      </section>

      {/* {error && <Message message={error} />} */}
      {isLoading && <Spinner />}

      <section className={styles.propertyGrid}>
        {favoriteProperties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
          />
        ))}
      </section>
    </main>
  );
}

export default Favorites;
