import { useEffect, useState } from "preact/hooks";
import styles from "./cookie-banner.module.scss";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");

    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.cookieBanner}>
      <div className={styles.cookieBanner__content}>
        <p>
          We use cookies to improve your experience and website performance.
        </p>

        <div className={styles.cookieBanner__actions}>
          <a href="/privacy-policy">
            Learn More
          </a>

          <button onClick={acceptCookies}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}