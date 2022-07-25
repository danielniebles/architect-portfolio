import './Gallery.css';
import SectionTitle from '../../components/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Controller, Scrollbar } from 'swiper';
/* import 'swiper/css';
import 'swiper/css/controller'
import 'swiper/css/navigation' */
import 'swiper/css/bundle';
import ProjectInfo from './components/ProjectInfo';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { NavigationOptions, Swiper as SwiperType } from 'swiper/types';
// Import Swiper styles
/* import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar"; */

const Gallery = (): JSX.Element => {
  const prevRef = useRef<HTMLDivElement>();
  const nextRef = useRef<HTMLDivElement>();
  const [swiper, setSwiper] = useState<SwiperType>();

  useEffect(() => {
    if (swiper?.params) {
      console.log('Swiper instance:', swiper);
      (swiper.params.navigation as NavigationOptions).prevEl = prevRef.current;
      (swiper.params.navigation as NavigationOptions).nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  return (
    <section className="mb-10 flex flex-col items-center justify-center">
      <SectionTitle customClass="text-white">Proyectos seleccionados</SectionTitle>
      <img src="@assets/logo.svg" alt="" />
      <div className="w-full pa-3">
          <Swiper
            modules={[Navigation, Pagination, Controller]}
            onSwiper={setSwiper}
            className="mySwiper"
            navigation={{
              prevEl: prevRef?.current,
              nextEl: nextRef?.current,
            }}
            pagination={{ clickable: true }}
            initialSlide={0}
          >
            <SwiperSlide key={0}>
              <ProjectInfo />
            </SwiperSlide>
            {/* <SwiperSlide key={1}>
            <ProjectInfo />
          </SwiperSlide>
          <SwiperSlide key={2}>
            <ProjectInfo />
          </SwiperSlide> */}
            {/* <SwiperSlide key={4}>
            <ProjectInfo />
          </SwiperSlide>
          <SwiperSlide key={5}>
            <ProjectInfo />
          </SwiperSlide>
          <SwiperSlide key={6}>
            <ProjectInfo />
          </SwiperSlide> */}
          </Swiper>
        {/* <div className="bottom-0 flex w-full justify-between text-white">
          <div
            className="swiper-button text-white"
            ref={prevRef as MutableRefObject<HTMLDivElement>}
          >
            prev
          </div>
          <div
            className="swiper-button text-white"
            ref={nextRef as MutableRefObject<HTMLDivElement>}
          >
            prev
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Gallery;
