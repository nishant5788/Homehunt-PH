import { useEffect, useState } from "react";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import styles from "./Properties.module.css";
import { useSearchParams } from "react-router-dom";

const BASE_URL = "http://localhost:8000";

function formatCity(slug) {
  return slug
    .split("-")
    .map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");
}

function Properties() {
  const [allProperties, setAllProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const searchedCity = searchParams.get("city");
  const filteredProperties = searchedCity ? allProperties.filter(property => property.city.toLowerCase().replaceAll(" ", "-") === searchedCity) : allProperties;

  useEffect(function(){

    async function fetchProperties() {
      try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/properties`);
      const data = await res.json();

      setAllProperties(data);

      console.log("searchedCity is " + searchedCity);
      }
      catch {
        alert("There is some error loading Properties...");
      }
      finally {
        setIsLoading(false);
      }
    }

    fetchProperties();

  }, [searchedCity]);

  return (
    <main className={styles.propertiesPage}>

      <section className={styles.hero}>
        <h1>Browse Properties {searchedCity && `in ${formatCity("clark-freeport-zone")}` }</h1>

        <p>{searchedCity ? `We Found ${filteredProperties.length} ${filteredProperties.length > 1 ? "Properties" : "Property"} in this area!` : "Discover apartments, condos and houses across the Philippines."}</p>

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

        {filteredProperties.map(property => <PropertyCard key={property.id} property={property} isLoading={isLoading} /> )}

      </section>

    </main>
  );
}

export default Properties;