import Styles from "./footer.module.scss";
export function Footer() {
  return (
    <footer className={Styles.footer}>
  <div className={Styles.footer__container}>
    
    <div className={Styles.footer__brand}>
      <h3>AL FORNO</h3>
      <p>Authentic Italian Cuisine in Putney</p>

      <div className={Styles.footer__address}>
        <p>349 Upper Richmond Road</p>
        <p>Putney, London, United Kingdom</p>
      </div>

      <p className={Styles.footer__company}>
        Company Number 15782601
      </p>
    </div>
    <div className={Styles.footer__middle}></div>
    <div className={Styles.footer__links}>
      <div className={Styles.footer__column}>
        <h4>Contact</h4>
        <a href="tel:+442088787522">Phone</a>
        <a href="mailto:Alfornoinputney@gmail.com">Email</a>
      </div>

      <div className={Styles.footer__column}>
        <h4>Menus</h4>
        <a href="/pdf/main-menu.pdf" target="_blank">
          Main Menu
        </a>
        <a href="/pdf/desserts.pdf" target="_blank">
          Desserts
        </a>
      </div>

      <div className={Styles.footer__column}>
        <h4>Legal</h4>
        <a href="/privacy-policy">
          Privacy Policy
        </a>

        <a href="/terms-and-conditions">
          Terms & Conditions
        </a>
      </div>
    </div>
  </div>

  <div className={Styles.footer__bottom}>
    <p>
      © 2026 AL FORNO. All rights reserved.
    </p>
  </div>
</footer>
  );
}
