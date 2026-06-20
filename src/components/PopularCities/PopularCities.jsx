import { useEffect, useState } from "react";
import styles from "./PopularCities.module.css";
import { Link } from "react-router-dom";

const BASE_URL = "http://localhost:8000";

function PopularCities() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchProperties() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/properties`);
        const data = await res.json();

        const uniqueCities = [
          ...new Set(data.map((property) => property.city)),
        ].map((city) => ({
          city,
          count: data.filter((property) => property.city === city).length,
        }));

        setCities(uniqueCities);
      } catch {
        alert("There is some error loading Cities...");
      } finally {
        setIsLoading(false);
      }
    }

    fetchProperties();
  }, []);

  return (
    <section className="section">
      <div className="container">
        <h2 className="section__title">Popular Cities</h2>

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
