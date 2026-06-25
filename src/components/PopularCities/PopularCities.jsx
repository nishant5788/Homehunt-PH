import { useEffect, useState } from "react";
import styles from "./PopularCities.module.css";
import { Link } from "react-router-dom";
import { delay } from "../../utils/delay";
import Message from "../Message/Message";
import Spinner from "../Spinner/Spinner";

const BASE_URL = "http://localhost:8000";

function PopularCities() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(function () {
    async function fetchProperties() {
      try {
        setError("");
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/properties`);
        const data = await res.json();

        await delay(import.meta.env.DEV ? 1000 : 0);

        const uniqueCities = [
          ...new Set(data.map((property) => property.city)),
        ].map((city) => ({
          city,
          count: data.filter((property) => property.city === city).length,
        }));

        setCities(uniqueCities);
      } catch {
        setError("There is some error loading Cities...");
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
