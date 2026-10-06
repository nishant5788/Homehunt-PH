import PropertyCard from "../../components/PropertyCard/PropertyCard";
import styles from "./Properties.module.css";
import { useLoaderData } from "react-router";
import PropertiesFilters from "../../components/PropertiesFilters/PropertiesFilters";
import Message from "../../components/Message/Message";
import Spinner from "../../components/Spinner/Spinner";
import { getProperties } from "../../services/apiProperties";
import { useNavigation } from "react-router";

import { useRouteError } from "react-router";

function PropertiesError() {
  const error = useRouteError();

  return (
    <div>
      <h2>Unable to load properties</h2>
      <p>
        We couldn't load the properties right now. Please check your internet
        connection and try again.
      </p>
      <p>{error.message}</p>
    </div>
  );
}

function Properties() {
  const properties = useLoaderData();

  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <main className={styles.propertiesPage}>
      <section className={styles.hero}>
        <h1>Browse Properties</h1>
      </section>

      <PropertiesFilters />

      {isLoading && <Spinner />}

      {!isLoading && properties.length === 0 && (
        <div>Sorry! We don't have properties that matched your result</div>
      )}

      <section className={styles.propertyGrid}>
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
          />
        ))}
      </section>
    </main>
  );
}

export async function loader({ request }) {
  const url = new URL(request.url);

  const location = url.searchParams.get("location");
  const minPrice = url.searchParams.get("minPrice");
  const maxPrice = url.searchParams.get("maxPrice");
  const bedrooms = url.searchParams.get("bedrooms");
  const bathrooms = url.searchParams.get("bathrooms");
  const propertyType = url.searchParams.get("propertyType");
  const transaction = url.searchParams.get("transaction");

  console.log(
    location,
    minPrice,
    maxPrice,
    bedrooms,
    bathrooms,
    propertyType,
    transaction,
  );

  const properties = await getProperties({
  location,
  minPrice,
  maxPrice,
  bedrooms,
  bathrooms,
  propertyType,
  transaction,
});

  return properties;
}

export { PropertiesError };
export default Properties;
