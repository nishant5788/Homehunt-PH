import styles from "./Footer.module.css";

function Footer() {
  return (
    <section className={styles.cta}>
        <h2>Ready To Find Your Next Home?</h2>

        <p>
          Join thousands of renters searching every day.
        </p>

        <button>Start Searching</button>
      </section>
  );
}

export default Footer;