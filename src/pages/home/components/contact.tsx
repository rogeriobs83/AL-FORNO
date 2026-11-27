import styles from "./contact.module.scss";

export function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.split}>
        <div className={styles.contactInfo}>
          <div className="wrapper">
            <h2>Find Us Here</h2>
          </div>
          <div className={styles.iframe}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.6629215552734!2d-0.23695839999999996!3d51.464344999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760efd0ed87045%3A0x6cf8404dcd26ff08!2sAl%20Forno!5e0!3m2!1spt-BR!2suk!4v1792778042941!5m2!1spt-BR!2suk"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
          <h2>Contact Us</h2>
          <p>Address: 349 Upper Richmond Rd, London SW15 5QJ</p>
          <p>Phone: 020 8878 7522</p>
          <p>Email: alfornoputney.com</p>
        </div>
        <div className={styles.openingHours}>
          <div className="wrapper">
            <h2>Opening Hours:</h2>
          </div>
          <div className={styles.group}>
            <h3>Lunch</h3>
            <dl>
              <dt>Monday - Friday</dt>
              <dd>Closed</dd>

              <dt>Saturday - Sunday</dt>
              <dd>12:30pm - 3:00pm</dd>
            </dl>
          </div>

          <div className={styles.group}>
            <h3>Dinner</h3>
            <dl>
              <dt>Monday</dt>
              <dd>Closed</dd>

              <dt>Tuesday - Thursday</dt>
              <dd>5:45pm - 10:30pm</dd>

              <dt>Friday</dt>
              <dd>5:45pm - 11:00pm</dd>

              <dt>Saturday</dt>
              <dd>5:00pm - 11:00pm</dd>

              <dt>Sunday</dt>
              <dd>5:00pm - 10:00pm</dd>
            </dl>
          </div>
          <h3 className={styles.fhead}>We look forward to welcoming you!</h3>
        </div>
      </div>
    </section>
  );
}
