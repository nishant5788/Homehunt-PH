import styles from "./PropertiesFilters.module.css";

function PropertiesFilters() {
  return (
    <section className={styles.filters}>
      <input
        type="text"
        placeholder="Location"
      />

      <input
        type="number"
        placeholder="Min Price"
      />

      <input
        type="number"
        placeholder="Max Price"
      />

      <select>
        <option value="">Bedrooms</option>
        <option value="1">1+</option>
        <option value="2">2+</option>
        <option value="3">3+</option>
        <option value="4">4+</option>
        <option value="5">5+</option>
      </select>

      <select>
        <option value="">Bathrooms</option>
        <option value="1">1+</option>
        <option value="2">2+</option>
        <option value="3">3+</option>
        <option value="4">4+</option>
      </select>

      <select>
        <option value="">Property Type</option>
        <option value="residential">Residential</option>
        <option value="land">Land</option>
        <option value="commercial">Commercial</option>
      </select>

      <select>
        <option value="">Transaction</option>
        <option value="sale">Sale</option>
        <option value="rent">Rent</option>
      </select>

      <button type="button">Search</button>
    </section>
  );
}

export default PropertiesFilters;