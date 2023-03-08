import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Controller, SwiperOptions, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React from 'react';

const ImagesSwiper = ({
  children,
  swiperParams,
  hideControls,
}: {
  children: React.ReactNode | React.ReactNode[];
  hideControls?: boolean;
  swiperParams?: {
    slidesPerView: string | number;
    spaceBetween?: number;
    autoplay?: { delay: number; disableOnInteraction: boolean };
  };
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Controller, Autoplay]}
      navigation
      initialSlide={0}
      {...(swiperParams as SwiperOptions)}
    >
      {React.Children.map(children, (child, index) => {
        return <SwiperSlide key={index}>{child}</SwiperSlide>;
      })}
    </Swiper>
  );
};

export default ImagesSwiper;
