import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import React, { useState } from 'react';

interface ThumbsSwiperProps {
  children: React.ReactNode | React.ReactNode[];
  thumbnailUrl: string[];
  backgroundColor: string;
}

const ThumbsSwiper = ({ backgroundColor, children, thumbnailUrl }: ThumbsSwiperProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  return (
    <div className={`my-12 rounded-xl ${backgroundColor} p-4`}>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="h-[600px]"
        slidesPerView={2}
      >
        {React.Children.map(children, (child, index) => {
          return (
            <SwiperSlide className="aspect-square" key={index}>
              {child}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="m-4 max-h-[180px] max-w-2xl"
      >
        {thumbnailUrl.map((url) => (
          <SwiperSlide className="aspect-square" key={url}>
            <img className="h-full w-full rounded-xl object-cover" src={url} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ThumbsSwiper;
