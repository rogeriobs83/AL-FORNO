/* import styles from './about.module.scss';

export default function About() {
  return (
    <section classNameName={styles.story} id="our-story" aria-labelledby="story-title">
      <div classNameName={styles.story__text}>
        <h2 id="story-title" classNameName={styles.story__title}>
          Born in the fire,
          <br />
          served in Putney.
        </h2>

        <p>
          Al Forno means “from the oven”, and everything we cook starts there.
          A wood-fired oven burns at the back of our dining room from the
          moment we open, and it never stops.
        </p>
        <p>
          We keep the menu short and honest: slow-rising dough, ripe tomatoes,
          good olive oil and recipes that Italian families have cooked for
          generations. Sit close to the flames, share a few plates, stay a
          while.
        </p>

        <dl classNameName={styles.story__facts}>
          <div>
            <dt>The oven</dt>
            <dd>Wood-fired, 450°C</dd>
          </div>
          <div>
            <dt>The dough</dt>
            <dd>Rested for 48 hours</dd>
          </div>
          <div>
            <dt>The place</dt>
            <dd>Putney, South West London</dd>
          </div>
        </dl>
      </div>

      <div classNameName={styles.story__oven} aria-hidden="true">
        <img src="/Gallery/gallery (42).jpeg" alt="" />
      </div>
    </section>
  );
} */

import styles from './about.module.scss';

export default function About() {

  const ovenImage = "/Gallery/gallery (42).jpeg";
  return (
    <section className={styles.story} id="our-story" aria-labelledby="story-title">
      <div className={styles.story__text}>
        <h2 id="story-title" className={styles.story__title}>
          Born in the fire,
          <br />
          served in Putney.
        </h2>

        <p>
          Al Forno means “from the oven”, and everything we cook starts there.
          Our oven is lit from the moment we open, and every pizza spends its
          few minutes inside the flames.
        </p>
        <p>
          We keep the menu short and honest: slow-rising dough, ripe tomatoes,
          fresh basil, good olive oil and recipes that Italian families have
          cooked for generations. Sit close to the oven, share a few plates,
          stay a while.
        </p>

        <dl className={styles.story__facts}>
          <div>
            <dt>The oven</dt>
            <dd>Gas-fired, always lit</dd>
          </div>
          <div>
            <dt>The dough</dt>
            <dd>Rested for 48 hours</dd>
          </div>
          <div>
            <dt>The place</dt>
            <dd>Putney, South West London</dd>
          </div>
        </dl>
      </div>

      <figure className={styles.story__oven}>
        <img
          src={ovenImage}
          alt="A pizza with aubergine, basil and mozzarella resting at the mouth of the oven, with flames behind it"
          width="1536"
          height="2048"
          loading="lazy"
        />
      </figure>
    </section>
  );
}