import styles from "./PopularCities.module.css";
import { Link } from "react-router-dom";
import Message from "../Message/Message";
import Spinner from "../Spinner/Spinner";
import { useProperties } from "../../contexts/PropertiesContext";

function PopularCities() {
  const { properties, isLoading, error } = useProperties();

  const cities = [...new Set(properties.map((property) => property.city))].map(
    (city) => ({
      city,
      count: properties.filter((property) => property.city === city).length,
    }),
  );

  return (
    <section className="section">
      <div className="container">
        <h2 className="section__title">Popular Cities</h2>

        {error && <Message message={error} />}
        {isLoading && <Spinner />}

        <div className={styles.cityGrid}>
          {cities.map((cityItem) => (
            <Link
              key={cityItem.city}
              to={`/properties?city=${cityItem.city.toLowerCase().replaceAll(" ", "-")}`}
            >
              {cityItem.city} <br /> <small>({cityItem.count})</small>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularCities;
