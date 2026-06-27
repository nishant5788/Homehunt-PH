import styles from "./WhyUs.module.css";

function WhyUs() {
  return (
    <section className={styles.whyUs}>
           <div className={styles.sectionHeader}>
             <h2>Why Choose HomeHunt?</h2>
           </div>
   
           <div className={styles.features}>
             <div className={styles.feature}>
               <h3>Verified Listings</h3>
               <p>
                 Every property is reviewed before being published.
               </p>
             </div>
   
             <div className={styles.feature}>
               <h3>Trusted Owners</h3>
               <p>
                 Contact property owners directly without middlemen.
               </p>
             </div>
   
             <div className={styles.feature}>
               <h3>Easy Search</h3>
               <p>
                 Find homes based on city, budget and property type.
               </p>
             </div>
           </div>
         </section>
  );
}

export default WhyUs;
