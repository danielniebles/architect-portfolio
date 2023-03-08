import { useEffect } from 'react';
import useIsMobile from 'src/hooks/useIsMobile';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Controller } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const PhotosGrid = ({ photosUrls }: { photosUrls: string[] }): JSX.Element => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Controller]}
        className="images__swiper"
        navigation
        initialSlide={0}
      >
        {photosUrls.map((photoUrl, index) => (
          <SwiperSlide key={index}>
            <div className="item hover:opacity-1" key={index}>
              <img
                className="h-full w-[500px] max-w-none object-cover md:w-full"
                src={photoUrl}
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  ) : (
    <div
      className="md:grid-auto-rows flex snap-x snap-mandatory
      overflow-auto md:grid md:w-6/12 md:grid-flow-row-dense md:auto-rows-gallery
      md:grid-cols-gallery md:gap-2 md:overflow-y-hidden"
    >
      {photosUrls.map((photoUrl, index) => (
        <div className="item hover:opacity-1" key={index}>
          <img
            className="h-full w-[500px] max-w-none object-cover md:w-full"
            src={photoUrl}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default PhotosGrid;
