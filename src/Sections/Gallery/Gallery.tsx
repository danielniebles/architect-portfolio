import './Gallery.css';
import SectionTitle from '../../components/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Controller } from 'swiper';
import ProjectInfo from './components/ProjectInfo';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Gallery = (): JSX.Element => {

  return (
    <section className="mb-10 flex flex-col items-center justify-center">
      <SectionTitle customClass="text-white">Proyectos seleccionados</SectionTitle>
      <div className="pa-3 w-full">
        <Swiper
          modules={[Navigation, Pagination, Controller]}
          className="project__swiper"
          navigation
          initialSlide={0}
        >
          <SwiperSlide key={0}>
            <ProjectInfo />
          </SwiperSlide>
          <SwiperSlide key={1}>
            <ProjectInfo />
          </SwiperSlide>
          <SwiperSlide key={2}>
            <ProjectInfo />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
