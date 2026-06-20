import { useEffect, useRef, useState } from "react";
import styles from "./PropertiesFilters.module.css";
import { useKey } from "../../../../../React-Practice/usepopcorn/src/useKey";

const BASE_URL = "http://localhost:8000";

function PropertiesFilters({
  searchTerm,
  setSearchTerm,
  selectedCity,
  setSelectedCity,
}) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputEl = useRef(null);

  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setSearchTerm(" ");
  });

  useEffect(function () {
    const controller = new AbortController();
    async function fetchProperties() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/properties`, {
          signal: controller.signal,
        });
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
    <section className={styles.filters}>
      <input
        type="text"
        placeholder="Search property..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        ref={inputEl}
      />

      <select
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
      >
        <option value="All">All Cities</option>
        {cities.map((cityItem) => (
          <option key={cityItem.city} value={cityItem.city}>
            {cityItem.city}({cityItem.count})
          </option>
        ))}
      </select>
    </section>
  );
}

export default PropertiesFilters;
