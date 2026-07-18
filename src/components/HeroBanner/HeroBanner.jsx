import { Navigate, useNavigate } from "react-router-dom";
import styles from "./HeroBanner.module.css";

function HeroBanner() {

  const navigate = useNavigate();

  return (
    <section className={styles.hero}>
      <div className="container">
        <h1>Find Your Perfect Home In The Philippines</h1>

        <p>
          Browse condos, apartments, houses and rentals across Manila, Angeles
          City, Clark, Cebu and more.
        </p>

        <div className={styles.heroButtons}>
          <button onClick={() => {
            navigate("/properties")
          }}>Browse Properties</button>
          <button onClick={() => {
            navigate("/post-property")
          }} className={styles.secondary}>Post Property</button>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
