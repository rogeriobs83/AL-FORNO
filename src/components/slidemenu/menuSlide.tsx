import Style from "./menuSlide.module.scss";
import { useEffect, useRef } from "react";
const menuSlide = () => {
  const emblaRef = useRef<HTMLDivElement>(null);

  const goToPrev = () =>
    emblaRef.current?.scrollBy({ left: -emblaRef.current.clientWidth, behavior: "smooth" });
  const goToNext = () =>
    emblaRef.current?.scrollBy({ left: emblaRef.current.clientWidth, behavior: "smooth" });

  useEffect(() => {
    const carousel = emblaRef.current;
    if (!carousel) return;

    const autoplay = window.setInterval(() => {
      const atEnd = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 1;
      carousel.scrollTo({ left: atEnd ? 0 : carousel.scrollLeft + carousel.clientWidth, behavior: "smooth" });
    }, 5000);

    return () => window.clearInterval(autoplay);
  }, []);
  return (
    <div className={Style.embla} ref={emblaRef} style={{ overflowX: "auto", scrollSnapType: "x mandatory" }}>
      <div className={Style.embla__container} style={{ display: "flex" }}>
        <div className={Style.embla__slide} style={{ flex: "0 0 100%", scrollSnapAlign: "start" }}>
          <div className={Style.logoContainer}>
            <img src="/A-logo.png" alt="Al Forno Logo" className={Style.logo} />
          </div>
          <img
            src="/italian(1).png"
            alt="Menu item"
            className={Style.image_1}
          />
          <img
            src="/Gallery/gallery (5).jpeg"
            alt="Menu item"
            className={Style.image_2}
          />
          <img
            src="/Gallery/gallery (6).jpeg"
            alt="Menu item"
            className={Style.image_3}
          />
          <div className={Style.text}>
            <h1 className={Style.title}>Welcome to Al Forno-Putney</h1>
            <p className={Style.description}>
              Al Forno is an authentic Italian restaurant dedicated to bringing
              the true flavors of Italy to every table. We proudly serve freshly
              prepared dishes, from traditional pasta and stone-baked pizzas to
              delicious desserts. Our warm atmosphere and passion for quality
              ingredients create a memorable dining experience for every guest.
              Taste Italy, one plate at a time. 🇮🇹🍕🍝
            </p>
            <button type="button" className="embla__prev" onClick={goToPrev}>
              Scroll to prev
            </button>
            <button type="button" className="embla__next" onClick={goToNext}>
              Scroll to next
            </button>
          </div>
        </div>
        <div className={Style.embla__slide} style={{ flex: "0 0 100%", scrollSnapAlign: "start" }}>
          <div className={Style.logoContainer}>
            <img src="/A-logo.png" alt="Al Forno Logo" className={Style.logo} />
          </div>
          <img
            src="/italian(1).png"
            alt="Menu item"
            className={Style.image_1}
          />
          <img
            src="/Gallery/gallery (5).jpeg"
            alt="Menu item"
            className={Style.image_2}
          />
          <img
            src="/Gallery/gallery (6).jpeg"
            alt="Menu item"
            className={Style.image_3}
          />
          <div className={Style.text}>
            <h1 className={Style.title}>Welcome to Al Forno-Putney</h1>
            <p className={Style.description}>
              Al Forno is an authentic Italian restaurant dedicated to bringing
              the true flavors of Italy to every table. We proudly serve freshly
              prepared dishes, from traditional pasta and stone-baked pizzas to
              delicious desserts. Our warm atmosphere and passion for quality
              ingredients create a memorable dining experience for every guest.
              Taste Italy, one plate at a time. 🇮🇹🍕🍝
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default menuSlide;
