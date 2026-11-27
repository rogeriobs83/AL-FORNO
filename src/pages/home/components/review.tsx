import styles from "./review.module.scss";

export function Times() {
  return (
    <section className={styles.review}>
      <h2 className={styles.heading}>What Our Guest Say</h2>
      <div className={styles.reviews}>
        <div className={styles.reviewCard}>
          <p>⭐⭐⭐⭐⭐</p>
          <p>"The pizza was made with fresh ingredients and had an authentic Italian flavour. The service was efficient and friendly."</p>
          <div className={styles.reviewer}>
            <span>- Celio E.</span>
          </div>
        </div>
        <div className={styles.reviewCard}>
          <p>⭐⭐⭐⭐⭐</p>
          <p>"A real gem of a restaurant. The atmosphere felt like being on holiday in Italy and the homemade tiramisu was outstanding."</p>
          <div className={styles.reviewer}>
            <span>- Darrel L.</span>
          </div>
        </div>
        <div className={styles.reviewCard}>
          <p>⭐⭐⭐⭐⭐</p>
          <p>"Delicious, authentic, no-frills, home-style food. Staff are attentive and food always arrives really quickly."</p>
          <div className={styles.reviewer}>
            <span>- Georga B.</span>
          </div>
        </div>
      </div>
      
    </section>
  );
}
