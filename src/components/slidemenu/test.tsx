import "swiper/swiper-bundle.css";
import Styles from "./test.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

const TestSwiper = () => {
  return (
    <Swiper className={Styles.swiper}
      spaceBetween={50}
      slidesPerView={1}
      >
      <SwiperSlide className={Styles.slide}>
        <img src="/Gallery/gallery (4).jpeg" alt="Menu item" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slide}>
        <img src="/Gallery/gallery (5).jpeg" alt="Menu item" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slide}>
        <img src="/Gallery/gallery (6).jpeg" alt="Menu item" />
      </SwiperSlide>
    </Swiper>
  );
};

export default TestSwiper;