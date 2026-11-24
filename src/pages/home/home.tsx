import type { FunctionalComponent } from "preact";
import { useState } from "preact/hooks";
import { Hero } from "./components/hero";
import About from "./components/about";
import { Contact } from "./components/contact";
import { Times } from "./components/review";
import Social from "./components/social";
import styles from "./home.module.scss";
import { Button } from "../../components/button/button";
import Special from "./components/special";
import { ReservationModal } from "../../components/reservation-modal/reservation-modal";

interface HomeProps {
  path?: string;
}

export const Home: FunctionalComponent<HomeProps> = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [reservationOpen, setReservationOpen] = useState(false);
  return (
    <>
      <div className={styles.home_container}>
        <Hero />
        <About
          title="About Us"
          text="Welcome to Al Forno Putney, where passion for authentic Italian cuisine meets warm, welcoming hospitality. Every dish we serve is crafted with the finest ingredients, inspired by traditional recipes, and infused with a modern touch. Whether you're here for a casual meal, a special celebration, or a quick escape to Italy, we aim to make every visit memorable. At the heart of everything we do is a love for great food, shared moments, and creating an experience that keeps you coming back for more. Benvenuti—we can’t wait to serve you!"
          imageSrc="/Sombra.svg"
          imageAlt="Imagem do resturante"
        />
        <Special />
        <Times />
        <Contact />
        <Social />
      </div>
      {showPopup && (
        <div className={styles.overlay}>
          <div className={styles.popup}>
            <div className={styles.popup_content}>
              <h2>Christmas Menu</h2>
              <h3>£49.95 per person</h3>
              <p>
                Christmas at Al Forno Sicilian Restaurant is a magical
                experience that combines the warmth of Sicilian hospitality with
                the festive spirit of the holiday season. As you step inside,
                you are greeted by the rich aroma of traditional Sicilian
                dishes, meticulously prepared with seasonal ingredients and
                family recipes passed down through generations.
              </p>
              <Button href="/christmas-menu" className={styles.button}>View Menu</Button>
            </div>
            <button
              type="button"
              onClick={() => setShowPopup(false)}
              className={styles.close_button}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height="24px"
                width="24px"
                fill="#e3e3e3"
              >
                <path d="M6.4,19L5,17.6L10.6,12L5,6.4L6.4,5L12,10.6L17.6,5L19,6.4L13.4,12L19,17.6L17.6,19L12,13.4L6.4,19Z" />
              </svg>
            </button>
            <div className={styles.image}>
              <img src="/test.jpeg" alt="Christmas Menu" />
            </div>
          </div>
        </div>
      )}
      {reservationOpen && (
        <ReservationModal onClose={() => setReservationOpen(false)} />
      )}
    </>
  );
};
