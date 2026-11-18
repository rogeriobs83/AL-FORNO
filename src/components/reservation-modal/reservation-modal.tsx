import { useState } from "react";
import type { FormEvent } from "react";
import { createPortal } from "preact/compat";
import styles from "./reserve.module.scss";

type ReservationModalProps = {
  onClose: () => void;
};

const toDateValue = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const fromDateValue = (value: string) => {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
};

export function ReservationModal({ onClose }: ReservationModalProps) {
  const now = new Date();
  const today = toDateValue(now);
  const [date, setDate] = useState(today);
  const [time, setTime] = useState("18:30");
  const [partySize, setPartySize] = useState("2");
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [calendarMonth, setCalendarMonth] = useState(
    new Date(now.getFullYear(), now.getMonth(), 1),
  );
  const selectedDate = fromDateValue(date);
  const monthTitle = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(calendarMonth);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  }).format(selectedDate);
  const firstWeekday = new Date(
    calendarMonth.getFullYear(),
    calendarMonth.getMonth(),
    1,
  ).getDay();
  const daysInMonth = new Date(
    calendarMonth.getFullYear(),
    calendarMonth.getMonth() + 1,
    0,
  ).getDate();
  const currentMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const canGoToPreviousMonth = calendarMonth.getTime() > currentMonth.getTime();

  const findTable = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = new URLSearchParams({
      rid: "99609",
      lang: "en-US",
      dateTime: `${date}T${time}`,
      partySize,
      otSource: "Restaurant website",
    });
    console.log(`http://www.opentable.com/booking/restref/availability?${params.toString()}`)
    window.open(
      `https://www.opentable.com/booking/restref/availability?${params.toString()}`,
      "_blank",
      "noopener,noreferrer",
    );
    onClose();
  };

  return createPortal(
    <div
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className={styles.overlay}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="reservation-title"
        className={styles.modal}
      >
        <button
          type="button"
          aria-label="Close reservation"
          onClick={onClose}
          className={styles.closeButton}
        >
          ×
        </button>
        <h2 id="reservation-title" className={styles.title}>Make a Reservation</h2>
        <form onSubmit={findTable} className={styles.form}>
          <div className={styles.field} role="group" aria-labelledby="reservation-date-label">
            <span id="reservation-date-label">Date</span>
            <button
              type="button"
              aria-labelledby="reservation-date-label reservation-date-value"
              aria-expanded={calendarOpen}
              aria-controls="reservation-date-calendar"
              onClick={() => {
                if (!calendarOpen) {
                  setCalendarMonth(
                    new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1),
                  );
                }
                setCalendarOpen(!calendarOpen);
              }}
              className={styles.dateTrigger}
            >
              <span id="reservation-date-value">{formattedDate}</span>
              <span aria-hidden="true" className={styles.dateTriggerArrow}><img src="/chevron.png" alt="" /></span>
            </button>
            {calendarOpen && (
              <div id="reservation-date-calendar" className={styles.calendar}>
                <div className={styles.calendarHeader}>
                  <button
                    type="button"
                    aria-label="Previous month"
                    disabled={!canGoToPreviousMonth}
                    onClick={() => setCalendarMonth(
                      new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() - 1, 1),
                    )}
                    className={styles.monthNavButton}
                  >
                    
                  </button>
                  <span aria-live="polite">{monthTitle}</span>
                  <button
                    type="button"
                    aria-label="Next month"
                    onClick={() => setCalendarMonth(
                      new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1, 1),
                    )}
                    className={styles.monthNavButton}
                  >
                    ›
                  </button>
                </div>
                <div className={styles.calendarGrid}>
                  {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((weekday) => (
                    <span key={weekday} aria-hidden="true" className={styles.weekday}>
                      {weekday}
                    </span>
                  ))}
                  {Array.from({ length: firstWeekday }, (_, index) => (
                    <span key={`empty-${index}`} aria-hidden="true" />
                  ))}
                  {Array.from({ length: daysInMonth }, (_, index) => {
                    const dayDate = new Date(
                      calendarMonth.getFullYear(),
                      calendarMonth.getMonth(),
                      index + 1,
                    );
                    const dayValue = toDateValue(dayDate);
                    const isSelected = dayValue === date;

                    return (
                      <button
                        key={dayValue}
                        type="button"
                        aria-label={new Intl.DateTimeFormat("en-US", {
                          dateStyle: "full",
                        }).format(dayDate)}
                        aria-current={dayValue === today ? "date" : undefined}
                        aria-pressed={isSelected}
                        disabled={dayValue < today}
                        onClick={() => {
                          setDate(dayValue);
                          setCalendarOpen(false);
                        }}
                        className={`${styles.calendarDay} ${isSelected ? styles.selectedDay : ""}`}
                      >
                        {index + 1}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          <label className={styles.field}>
            Time
            <select className={styles.select} value={time} onChange={(event) => setTime(event.currentTarget.value)}>
              {["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"].map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </label>
          <label className={`${styles.field} ${styles.lastField}`}>
            Party size
            <select className={styles.select} value={partySize} onChange={(event) => setPartySize(event.currentTarget.value)}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((size) => <option key={size} value={size}>{size} {size === 1 ? "person" : "people"}</option>)}
            </select>
          </label>
          <button type="submit" className={styles.submitButton}>
            Find a Table
          </button>
        </form>
      </section>
    </div>,
    document.body,
  );
}

