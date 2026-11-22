import styles from "./hero.module.scss";

export function Hero() {
  return (
    <section className={styles.hero}>

      <video className={styles.desktop} autoPlay loop muted playsInline>
        <source src="/desktop (1).mp4" type="video/mp4" />
      </video>

      <video className={styles.mobile} autoPlay loop muted playsInline>
        <source src="/mobile.mp4" type="video/mp4" />
      </video>

      <video className={styles.tablet} autoPlay loop muted playsInline>
        <source src="/tablet (2).mp4" type="video/mp4" />
      </video>
      
    </section>
    
  );
}