import Styles from "./special.module.scss";

// Example data for special offers
const specialOffersList = [
  {
    id: 1,
    title: "Ladies Night Combo",
    description:
      "Gather the girls for a night to remember! Ladies, enjoy a delectable three-course meal with unlimited wine. Perfect for celebrations, catch-ups, or simply treating yourself to a fabulous evening and good company.",
    originalPrice: "£34.95",
    description__1: "Per Person",
    badge: "Ladies Night offer.",
    buttonText: "Get the Combo",
    link: "/Ladies Night Menu.pdf",
    imageUrl: "/ladies.avif",
  },
 /*  {
    id: 2,
    title: "Dolci Dessert",
    description:
      "Starter of the day + main course (meat or fish) + drink and coffee included.",
    originalPrice: "€18.50",
    discountPrice: "€14.90",
    badge: "Most Popular",
    buttonText: "Book Lunch",
    link: "/dolci.pdf",
    imageUrl: "https://picsum.photos/500/500?random=21",
  }, */
  {
    id: 3,
    title: "Tuesday Special",
    description:
      "Enjoy a taste of Italy for less! Indulge in your choice of freshly made pasta or wood-fired pizza at a perfect price when you crave authentic Italian flavours.",
    originalPrice: "£14.00",
    discountPrice: "£18.00",
    badge: "Tuesday Offer",
    buttonText: "Offer",
    link: "/TUESDAY (1).pdf",
    imageUrl: "/tuesday.avif",
  },
];

export default function Special() {
  return (
    <div className={Styles.container}>
      <header className={Styles.header}>
        <h2>Special Offers</h2>
        <p>Enjoy our exclusive promotions and savor the best for less.</p>
      </header>

      <div className={Styles.grid}>
        {specialOffersList.map((offer) => (
          <div key={offer.id} className={Styles.card}>
            <div className={Styles.imageContainer}>
              <img
                src={offer.imageUrl}
                alt={offer.title}
                className={Styles.image}
              />
              <span className={Styles.badge}>{offer.badge}</span>
            </div>

            <div className={Styles.content}>
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>

              <div className={Styles.footerCard}>
                <div className={Styles.priceContainer}>
                  <span className={Styles.originalPrice}>
                    {offer.originalPrice}
                  </span>
                  <span className={Styles.discountPrice}>
                    {offer.discountPrice || offer.description__1}
                  </span>
                </div>
                {offer.link && (
                  <a
                    href={offer.link}
                    target="_blank"
                    rel="noreferrer"
                    className={Styles.button}
                  >
                    {offer.buttonText}
                  </a>
                )}
                {!offer.link && (
                  <button className={Styles.button}>{offer.buttonText}</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
