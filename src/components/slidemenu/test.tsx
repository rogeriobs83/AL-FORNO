import "swiper/swiper-bundle.css";

import { Swiper, SwiperSlide } from "swiper/react";

const TestSwiper = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      <SwiperSlide>
        <img src="/italian(1).png" alt="Menu item" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/Gallery/gallery (5).jpeg" alt="Menu item" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/Gallery/gallery (6).jpeg" alt="Menu item" />
      </SwiperSlide>
    </Swiper>
  );
};

export default TestSwiper;