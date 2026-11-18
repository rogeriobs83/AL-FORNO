
import styles from './about.module.scss';

interface AboutProps {
  title: string;
  text: string;
  imageSrc: string;
  imageAlt?: string;
}

export default function About({ title, text, imageSrc, imageAlt = "Imagem ilustrativa" }: AboutProps) {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.contentWrapper}>
        
        <div className={styles.textContainer}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{text}</p>
          
        </div>

        <div className={styles.imageContainer}>
          <img src={imageSrc} alt={imageAlt} className={styles.image} />
        </div>

      </div>
    </section>
  );
}