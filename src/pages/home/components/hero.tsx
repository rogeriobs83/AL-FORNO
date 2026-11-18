import styles from "./hero.module.scss";

export function Hero() {
  return (
    <section className={styles.hero}>

      <video className={styles.desktop} autoPlay loop muted playsInline>
        <source src="/images/dishes/Copy of button (1).mp4" type="video/mp4" />
      </video>

      <video className={styles.mobile} autoPlay loop muted playsInline>
        <source src="/images/dishes/Button(1).mp4" type="video/mp4" />
      </video>

      <video className={styles.tablet} autoPlay loop muted playsInline>
        <source src="/images/dishes/Tablet (1).mp4" type="video/mp4" />
      </video>
    </section>
  );
}