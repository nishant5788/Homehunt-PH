import { useNavigate } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  const navigate = useNavigate();
  return (
    <section className={styles.cta}>
        <h2>Ready To Find Your Next Home?</h2>

        <p>
          Join thousands of renters searching every day.
        </p>

        <button onClick={() => navigate("/properties")}>Start Searching</button>
      </section>
  );
}

export default Footer;