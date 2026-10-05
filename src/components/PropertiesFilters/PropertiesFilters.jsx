import { Form } from "react-router";
import styles from "./PropertiesFilters.module.css";

function PropertiesFilters() {
  return (
    <Form method="get" className={styles.filters}>
      <input
        type="text"
        name="location"
        placeholder="Location"
      />

      <input
        type="number"
        name="minPrice"
        placeholder="Min Price"
      />

      <input
        type="number"
        name="maxPrice"
        placeholder="Max Price"
      />

      <select name="bedrooms">
        <option value="">Bedrooms</option>
        <option value="1">1+</option>
        <option value="2">2+</option>
        <option value="3">3+</option>
        <option value="4">4+</option>
        <option value="5">5+</option>
      </select>

      <select name="bathrooms">
        <option value="">Bathrooms</option>
        <option value="1">1+</option>
        <option value="2">2+</option>
        <option value="3">3+</option>
        <option value="4">4+</option>
      </select>

      <select name="propertyType">
        <option value="">Property Type</option>
        <option value="residential">Residential</option>
        <option value="land">Land</option>
        <option value="commercial">Commercial</option>
      </select>

      <select name="transaction">
        <option value="">Transaction</option>
        <option value="sale">Sale</option>
        <option value="rent">Rent</option>
      </select>

      <button type="submit">Search</button>
    </Form>
  );
}

export default PropertiesFilters;