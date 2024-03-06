import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import React, { useState } from 'react';
import useIsMobile from '@/hooks/useIsMobile';

interface ThumbsSwiperProps {
  children: React.ReactNode | React.ReactNode[];
  thumbnailUrl: string[];
  backgroundColor: string;
}

const ThumbsSwiper = ({ backgroundColor, children, thumbnailUrl }: ThumbsSwiperProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const isMobile = useIsMobile();
  return (
    <div
      className={`my-4 rounded-xl md:my-12 ${backgroundColor} w-[390px] p-4 md:w-full`}
    >
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="h-[400px] md:h-[600px]"
        slidesPerView={isMobile ? 1 : 2}
        slidesPerGroup={isMobile ? 1 : 2}
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
        slidesPerView={isMobile ? 2 : 5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="m-4 h-[120px] md:h-[200px]"
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
