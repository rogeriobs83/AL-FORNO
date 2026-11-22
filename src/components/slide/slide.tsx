// cspell:ignore Embla
import EmblaCarousel from 'embla-carousel';
import { useEffect, useRef } from 'preact/hooks';
import Styles from './slide.module.scss';

export default function Slider() {
  const emblaRef = useRef<HTMLDivElement>(null);
  const images = [
    { src: '/Gallery/gallery (1).jpeg', alt: 'Pizza' },
    { src: '/Gallery/gallery (2).jpeg', alt: 'Restaurant' },
    { src: '/Gallery/gallery (3).jpeg', alt: 'Dining area' },
    { src: '/Gallery/gallery (4).jpeg', alt: 'Pizza' },
    { src: '/Gallery/gallery (5).jpeg', alt: 'Restaurant' },
    { src: '/Gallery/gallery (6).jpeg', alt: 'Dining area' },
  ];

  useEffect(() => {
    if (!emblaRef.current) return;
    const embla = EmblaCarousel(emblaRef.current);

    return () => embla.destroy();
  }, []);

  return (
    <div class={Styles.embla} ref={emblaRef}>
      <div class={Styles.embla__container}>
        {images.map((image, index) => (
          <div
            class={`${Styles.embla__slide}${index === 2 ? ` ${Styles.space}` : ''}`}
            key={image.src}
          >
            <img src={image.src} alt={image.alt} />
            <p>
              {index % 3 === 0
                ? 'Delicious pizza fresh from the oven'
                : index % 3 === 1
                  ? 'Cozy and inviting restaurant atmosphere'
                  : 'Spacious and elegant dining area'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}