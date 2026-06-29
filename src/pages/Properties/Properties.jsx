import { useState } from "react";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import styles from "./Properties.module.css";
import { useSearchParams } from "react-router-dom";
import PropertiesFilters from "../../components/PropertiesFilters/PropertiesFilters";
import Message from "../../components/Message/Message";
import Spinner from "../../components/Spinner/Spinner";
import { useProperties } from "../../contexts/PropertiesContext";

function formatCity(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function Properties() {
  const { properties, isLoading, error } = useProperties();
  const [searchParams] = useSearchParams();
  const searchedCity = searchParams.get("city");
  const [searchTerm, setSearchTerm] = useState("");
  let filteredProperties = properties;
  const [selectedCity, setSelectedCity] = useState("All");

  if (searchedCity) {
    filteredProperties = filteredProperties.filter(
      (property) =>
        property.city.toLowerCase().replaceAll(" ", "-") === searchedCity,
    );
  }

  if (selectedCity !== "All") {
    filteredProperties = filteredProperties.filter(
      (property) => property.city === selectedCity,
    );
  }

  if (searchTerm) {
    filteredProperties = filteredProperties.filter(
      (property) =>
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.province.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }

  return (
    <main className={styles.propertiesPage}>
      <section className={styles.hero}>
        <h1>
          Browse Properties {searchedCity && `in ${formatCity(searchedCity)}`}
        </h1>

        <p>
          {searchedCity
            ? `We Found ${filteredProperties.length} ${filteredProperties.length > 1 ? "Properties" : "Property"} in this area!`
            : "Discover apartments, condos and houses across the Philippines."}
        </p>
      </section>

      <PropertiesFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />

      {error && <Message message={error} />}
      {isLoading && <Spinner />}

      <section className={styles.propertyGrid}>
        {filteredProperties.map((property) => (
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

export default Properties;
