import { useState } from "preact/hooks";
import styles from "./reservation-form.module.scss";

export function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (
    e: Event & {
      currentTarget: HTMLInputElement | HTMLTextAreaElement;
    }
  ) => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    const subject = `Reservation Request - ${formData.name}`;

    const body = `
Name: ${formData.name}

Email: ${formData.email}

Phone: ${formData.phone}

Guests: ${formData.guests}

Date: ${formData.date}

Time: ${formData.time}

Message:
${formData.message}
`;

    window.location.href = `mailto:Alfornoinputney@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id='reservation' className={styles.reservation}>
      <div className={styles.container}>
        <h2>Reserve a Table</h2>

        <p>
          We'd love to welcome you to Al Forno. Complete the form
          below and send your reservation request.
        </p>

        <form onSubmit={handleSubmit}>
          <div className={styles.grid}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onInput={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onInput={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onInput={handleChange}
            />

            <input
              type="number"
              name="guests"
              min="1"
              placeholder="Number of Guests"
              required
              value={formData.guests}
              onInput={handleChange}
            />

            <input
              type="date"
              name="date"
              placeholder="Date"
              required
              value={formData.date}
              onInput={handleChange}
            />

            <input
              type="time"
              name="time"
              placeholder="Time"
              required
              value={formData.time}
              onInput={handleChange}
            />
          </div>

          <textarea
            name="message"
            rows={5}
            placeholder="Additional requests..."
            value={formData.message}
            onInput={handleChange}
          />

          <button type="submit">
            Send Reservation Request
          </button>
        </form>
      </div>
    </section>
  );
}