import styles from "./navbar.module.scss";
import { Btn } from "../../layout/btn-menu/btn";
import { useState } from "react";
import { Button } from "../../components/button/button";
import { ReservationModal } from "../reservation-modal/reservation-modal";


export function Navbar() {
  const [open, setOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);

  return (
    <div className={styles.container}>
      <nav className={`${styles.navbar} ${open ? styles.open : ""}`}>
        <ul className={styles.navList} onClick={() => setOpen(false)}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            Menu
            <ul className={styles.dropdown}>
              <li><a href="/menu" onClick={() => setOpen(false)}>Menu</a></li>
              <li><a href="/christmas-menu" onClick={() => setOpen(false)}>Christmas</a></li>
              <li><a href="/drinks" onClick={() => setOpen(false)}>Drinks</a></li>
            </ul>
          </li>
          <li>
            <a href="/gallery" onClick={() => setOpen(false)}>Gallery</a>
          </li>
          <li>
            <a href="/events" onClick={() => setOpen(false)}>Events</a>
          </li>
          <li>
            <a href="/special-offers" onClick={() => setOpen(false)}>Specials Offers</a>
          </li>
          <li>
            <div onClick={() => setReservationOpen(true)}>
              <Button>Reserve Now</Button>
            </div>
            {reservationOpen && (
              <ReservationModal onClose={() => setReservationOpen(false)} />
            )}
          </li>
        </ul>
      </nav>
        <Btn open={open} setOpen={setOpen} />

     
    </div>
  );
}
