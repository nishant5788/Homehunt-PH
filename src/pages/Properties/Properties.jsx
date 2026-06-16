import { useEffect, useState } from "react";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import styles from "./Properties.module.css";

const BASE_URL = "http://localhost:8000";

function Properties() {
  const [allProperties, setAllProperties] = useState([]);
  const [isLoading, setIsLoading] = useState({});

  useEffect(function(){

    async function fetchProperties() {
      try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/properties`);
      const data = await res.json();
      setAllProperties(data);
      }
      catch {
        alert("There is some error loading Properties...");
      }
      finally {
        setIsLoading(false);
      }
    }

    fetchProperties();

  }, []);

  return (
    <main className={styles.propertiesPage}>

      <section className={styles.hero}>
        <h1>Browse Properties</h1>

        <p>
          Discover apartments, condos and houses
          across the Philippines.
        </p>
      </section>

      <section className={styles.filters}>

        <input
          type="text"
          placeholder="Search property..."
        />

        <select>
          <option>All Cities</option>
          <option>Manila</option>
          <option>Taguig</option>
          <option>Cebu</option>
          <option>Angeles</option>
        </select>

      </section>

      <section className={styles.propertyGrid}>

        {allProperties.map(property => <PropertyCard key={property.id} property={property} /> )}

      </section>

    </main>
  );
}

export default Properties;