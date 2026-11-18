import styles from "./btn.module.scss";

export function Btn({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  return (
    <button
      type="button"
      className={`${styles.btn} ${open ? styles.open : ""}`}
      onClick={() => setOpen(!open)}
      aria-expanded={open}
      aria-label={open ? "Fechar menu" : "Abrir menu"}
    >
      <span className={styles.btnLine}></span>
    </button>
  );
}