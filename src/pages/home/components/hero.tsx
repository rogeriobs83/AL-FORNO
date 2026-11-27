import styles from "./hero.module.scss";
import { useEffect, useState } from "preact/hooks";

export function Hero() {
  const heroImages = [
    
    "/christmas.jpeg",
    "/4.svg",
    "/7.svg"
  ];
  const [slide, setSlide] = useState<{
    images: [number, number];
    activeLayer: 0 | 1;
  }>({
    images: [0, 0],
    activeLayer: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(({ images, activeLayer }) => {
        const nextLayer = activeLayer === 0 ? 1 : 0;
        const nextImages: [number, number] = [...images];
        nextImages[nextLayer] = (images[activeLayer] + 1) % heroImages.length;

        return { images: nextImages, activeLayer: nextLayer };
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.description}>
        <h2>Not Just Pizza. <br /> Al Forno.</h2>
        <p>Experience authentic Italian cuisine in the heart of Putney.</p>
        
        <a href="#reservation" className={styles.hero__button}>Reserve Now</a>
        <a href="/menu" className={styles.hero__button}>View Menu</a>
      </div>
      {slide.images.map((image, layer) => (
        <div
          key={layer}
          className={`${styles.hero__content} ${slide.activeLayer === layer ? "" : styles.inactive}`}
          aria-hidden="true"
        >
          <div
            key={image}
            className={styles.hero__image}
            style={{ backgroundImage: `url(${heroImages[image]})` }}
          />
        </div>
      ))}
    </section>
    
  );
}
{/* 
      <video className={styles.desktop} autoPlay loop muted playsInline>
        <source src="/Gallery.webp" type="video/mp4" />
      </video>

      <video className={styles.mobile} autoPlay loop muted playsInline>
        <source src="/test.mp4" type="video/mp4" />
      </video>

      <video className={styles.tablet} autoPlay loop muted playsInline>
        <source src="/tablet (2).mp4" type="video/mp4" />
      </video> */}