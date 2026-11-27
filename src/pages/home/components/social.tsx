import Styles from "./social.module.scss";
import { Button } from "../../../components/button/button";
import { useState } from "preact/hooks";
import { ReservationModal } from "../../../components/reservation-modal/reservation-modal";

export default function Social() {
  const [reservationOpen, setReservationOpen] = useState(false);
  return (
    <div className={Styles.social}>
      <div className={Styles.media_content}>
        <div className={Styles.socialIcons}>
      <h2>Follow Us on Social Media</h2>
      <p>Stay connected with us for the latest updates and promotions.</p>
      <div className={Styles.socialMedia}>
          <a
            href="https://www.facebook.com/alfornoputneyrestaurant"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i className={Styles.socialIcon + " fab fa-facebook"}></i>
          </a>
          <a
            href="https://www.instagram.com/alfornoputney?igsh=MWl5cnZ5dHd0a3Y4dA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className={Styles.socialIcon + " fab fa-instagram"}></i>
          </a>
          {/* <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <i className={Styles.socialIcon + " fab fa-outlook"}></i>
          </a> */}
        </div>
      </div>
        <div className={Styles.buttons}>
          <p>Follow us for more updates and special offers.</p>
          <Button href="/menu">Main Menu</Button>
          <p>Reserve your table for an unforgettable dining experience.</p>
          <div onClick={() => setReservationOpen(true)}>
            <Button>Reserve Now</Button>
          </div>
        </div>
      </div>
      {reservationOpen && (
        <ReservationModal onClose={() => setReservationOpen(false)} />
      )}
    </div>
  );
}
