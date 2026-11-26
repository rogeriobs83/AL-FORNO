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
            <a href="/menu" onClick={() => setOpen(false)}>Menu</a>
          </li>
          <li>
            <a href="/gallery" onClick={() => setOpen(false)}>Gallery</a>
          </li>
          <li>
            <a href="/christmas-menu" onClick={() => setOpen(false)}>Christmas Menu</a>
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
