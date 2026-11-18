import { useState } from 'react'
import Style from './slide.module.scss'
import {Button} from '../../components/button/button'

const slides = [
  { image: '/Gallery/gallery (4).jpeg', caption: 'Caption Text' },
  { image: '/Gallery/gallery (5).jpeg', caption: 'Caption Two' },
  { image: '/Gallery/gallery (31).jpeg', caption: 'Caption Three' },
  
]

const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  function showSlide(index: number): void {
    setCurrentIndex((index + slides.length) % slides.length)
  }

  function changeSlide(offset: number): void {
    showSlide(currentIndex + offset)
  }

  return (
    <>
      <h1 className={Style.galleryTitle}>Our Gallery</h1>
      <div className={Style['slideshow-container']}>
        
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`${Style.mySlides} ${Style.fade}`}
            hidden={index !== currentIndex}
          >
            <div className={Style.numbertext}>
              {index + 1} / {slides.length}
            </div>
            <img src={slide.image} alt={slide.caption} />
            <div className={Style.text}>{slide.caption}</div>
          </div>
        ))}

        <button
          className={Style.prev}
          type="button"
          onClick={() => changeSlide(-1)}
          aria-label="Previous slide"
        >
          ❮
        </button>
        <button
          className={Style.next}
          type="button"
          onClick={() => changeSlide(1)}
          aria-label="Next slide"
        >
          ❯
        </button>
      </div>

      <div className={Style.dots} aria-label="Choose a slide">
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            className={`${Style.dot} ${index === currentIndex ? Style.active : ''}`}
            type="button"
            onClick={() => showSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? 'true' : undefined}
          />
        ))}
      </div>
      <Button href="/menu">View Menu</Button>
      
    </>
  )
}

export default Slide
