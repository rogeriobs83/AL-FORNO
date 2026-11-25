import type { FunctionalComponent } from "preact";
import Styles from "./menu.module.scss";

interface MenuProps {
  path?: string;
}

export const Menu: FunctionalComponent<MenuProps> = () => (
  <div className={Styles.container}>
   <h3>Authentic Cuisine</h3>
   <h1>AL FORNO PUTNEY</h1>
   <p>Experience the finest Italian cuisine in the heart of Putney.</p>
   
   <div className={Styles.cards}>
    <img src="/1.webp" alt="" />
    <div className={Styles.text}>
      <h2>Main Menu</h2>
      <p>Discover our carefully curated selection of Italian dishes, crafted with the freshest ingredients.</p>
      <a href="/MAIN MENU.pdf" target="_blank" rel="noopener noreferrer">View Full Menu</a>
    </div>
   </div>

   <div className={Styles.cards}>
    <img src="/2.webp" alt="" />
    <div className={Styles.text}>
      <h2>Desserts</h2>
      <p>Indulge in our delectable Italian desserts, made to perfection.</p>
      <a href="dolci.pdf" target="_blank" rel="noopener noreferrer">View Full Menu</a>
    </div>
   </div>
  </div>
);
