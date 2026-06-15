import styles from "./Contact.module.css";

function Contact() {
  return (
    <main className={styles.contact}>
      <section className={styles.hero}>
        <h1>Contact Us</h1>

        <p>
          We'd love to hear from you.
        </p>
      </section>

      <div className={styles.container}>

        <form className={styles.form}>
          <input type="text" placeholder="Name" />

          <input type="email" placeholder="Email" />

          <input type="text" placeholder="Subject" />

          <textarea
            rows="6"
            placeholder="Message"
          />

          <button type="submit">
            Send Message
          </button>
        </form>

        <div className={styles.info}>
          <h2>Get In Touch</h2>

          <p>📍 Manila, Philippines</p>

          <p>📞 +63 900 000 0000</p>

          <p>✉ info@homehunt.ph</p>
        </div>

      </div>
    </main>
  );
}

export default Contact;