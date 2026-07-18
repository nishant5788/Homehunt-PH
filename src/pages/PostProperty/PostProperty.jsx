import { useState } from "react";
import styles from "./PostProperty.module.css";

function PostProperty() {

  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [rent, setRent] = useState("");
  const [bedrooms, setBedRooms] = useState("");
  const [bathrooms, setBathRooms] = useState("");
  const [area, setArea] = useState("");


  return (
    <main className={styles.postPage}>
  <div className={styles.container}>
    <h1>🏡 Post New Property</h1>
    <p>Add your rental property for free.</p>

    <form className={styles.form}>

      <div className={styles.section}>
        <h2>Property Information</h2>

        <label>Property Title</label>
        <input type="text" />

        <label>City</label>
        <input type="text" />

        <label>Province</label>
        <input type="text" />

        <label>Monthly Rent</label>
        <input type="number" />

        <div className={styles.grid2}>
          <div>
            <label>Bedrooms</label>
            <input type="number" />
          </div>

          <div>
            <label>Bathrooms</label>
            <input type="number" />
          </div>
        </div>

        <label>Area (sqm)</label>
        <input type="number" />

        <label>Image URL</label>
        <input type="text" />

        <div className={styles.grid2}>
          <div>
            <label>Latitude</label>
            <input type="number" step="any" />
          </div>

          <div>
            <label>Longitude</label>
            <input type="number" step="any" />
          </div>
        </div>

        <label>Description</label>
        <textarea rows="5"></textarea>

      </div>

      <div className={styles.section}>
        <h2>Features</h2>

        <div className={styles.features}>

          <label><input type="checkbox"/> Parking</label>
          <label><input type="checkbox"/> Air Conditioning</label>
          <label><input type="checkbox"/> Gym</label>
          <label><input type="checkbox"/> Swimming Pool</label>
          <label><input type="checkbox"/> Fiber Internet</label>
          <label><input type="checkbox"/> Balcony</label>
          <label><input type="checkbox"/> Security</label>

        </div>

      </div>

      <div className={styles.section}>
        <h2>Owner Information</h2>

        <label>Owner Name</label>
        <input type="text" />

        <label>Phone Number</label>
        <input type="text" />

        <label>Email</label>
        <input type="email" />

      </div>

      <div className={styles.buttons}>
        <button type="button">Cancel</button>
        <button type="submit">
          Submit Property
        </button>
      </div>

    </form>

  </div>
</main>
  );
}

export default PostProperty;