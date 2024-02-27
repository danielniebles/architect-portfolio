import { InstagramEmbed } from 'react-social-media-embed';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import { useState } from 'react';

const BASE_URL_THUMBNAIL = 'https://ik.imagekit.io/wbjodg09y/tr:w-200,h-200';
const BASE_URL = 'https://ik.imagekit.io/wbjodg09y/tr:w-1200,h-900';

const Project = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  return (
    <div className="flex h-[100vh] w-full flex-col items-center">
      <section className="flex w-full justify-center p-5 sm:max-w-[540px] lg:max-w-[1140px]">
        <div className="flex h-[300px] w-full items-end justify-start rounded-xl bg-[url(https://terra-azul-s3.s3.amazonaws.com/finished-projects/panoramic.jpg)] bg-bottom bg-repeat">
          <footer className="w-full rounded-xl bg-gradient-to-b from-transparent to-black">
            <h1 className="p-5 text-2xl text-white">Parroquia Jesucristo Redentor</h1>
          </footer>
        </div>
      </section>
      <section className="mt-10 grid w-full grid-cols-1 p-5 sm:max-w-[540px] md:grid-cols-3 lg:max-w-[1140px]">
        <article className="flex w-full items-center justify-center">
          <div className="flex w-full flex-col overflow-hidden rounded-xl p-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <div className="flex items-center">
              <i className="uil uil-constructor mr-2 text-2xl text-terra-green" />{' '}
              <span>Javier Niebles</span>
            </div>
            <div className="border-t border-gray-300"></div>
            <div className="flex items-center">
              <i className="uil uil-map-marker mr-2 text-2xl text-terra-green" />{' '}
              <span>Bogotá</span>
            </div>
            <div className="border-t border-gray-300"></div>
            <div className="flex items-center">
              <i className="uil uil-expand-arrows mr-2 text-2xl text-terra-green" />{' '}
              <span>2000 m2</span>
            </div>
            <div className="border-t border-gray-300"></div>
            <div className="flex items-center">
              <i className="uil uil-calender mr-2 text-2xl text-terra-green" />{' '}
              <span>2023</span>
            </div>
          </div>
        </article>
        <article className="p-5 md:col-span-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit ratione libero
          aut aperiam eos repellendus debitis autem temporibus similique. Corrupti
          expedita totam distinctio dolorum ab deserunt saepe maiores ullam minima. Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum iste nostrum
          tenetur quae eaque laborum quasi, quibusdam enim sint eveniet animi
          voluptatibus, veniam commodi, soluta doloribus earum similique ut.
        </article>
      </section>
      <section className="flex w-full justify-center bg-[#efefef]">
        <div className="grid grid-cols-1 gap-2 p-2 pt-8 sm:max-w-[540px] md:grid-cols-2 md:p-2 lg:max-w-[1140px]">
          <div className="flex flex-col justify-center text-white">
            <h2 className="mb-10 font-[Montserrat] text-3xl text-title-gray">
              Ofrecemos servicios de alta calidad
            </h2>
            <p className="text mb-2 text-body-gray">
              TERRA AZUL se ha constituido como una empresa de servicios especializados en
              arquitectura que cuenta con los más altos estándares de calidad, seguridad,
              tecnología, recurso humano profesional y capacitado permanentemente, con el
              fin de garantizar a nuestros clientes una satisfacción total en nuestro
              trabajo.
            </p>
          </div>
          <div className="my-12 rounded-xl bg-terra-green-300 p-4">
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
              className="h-[400px]"
            >
              <SwiperSlide className="rounded-xl">
                <img
                  className="h-full w-full rounded-xl object-cover"
                  src={`${BASE_URL}/door_before.jpg`}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="h-full w-full rounded-xl object-cover"
                  src={`${BASE_URL}/door_after.JPG`}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="h-full w-full rounded-xl object-cover"
                  src={`${BASE_URL}/adoquin_antes.jpg`}
                />
              </SwiperSlide>
              <SwiperSlide className="h-full">
                <img
                  className="h-full w-full rounded-xl object-cover"
                  src={`${BASE_URL}/adoquin_final.jpg`}
                />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="m-4 max-h-[150px] max-w-2xl"
            >
              <SwiperSlide className="aspect-square">
                <img
                  className="h-full w-full rounded-xl object-cover"
                  src={`${BASE_URL_THUMBNAIL}/door_before.jpg`}
                />
              </SwiperSlide>
              <SwiperSlide className="aspect-square">
                <img
                  className="h-full w-full rounded-xl object-cover"
                  src={`${BASE_URL_THUMBNAIL}/door_after.JPG`}
                />
              </SwiperSlide>
              <SwiperSlide className="aspect-square">
                <img
                  className="h-full w-full rounded-xl object-cover"
                  src={`${BASE_URL_THUMBNAIL}/adoquin_antes.jpg`}
                />
              </SwiperSlide>
              <SwiperSlide className="aspect-square">
                <img
                  className="h-full w-full rounded-xl object-cover"
                  src={`${BASE_URL_THUMBNAIL}/adoquin_final.jpg`}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section className="flex w-full bg-terra-blue-800 p-2 pt-12 pb-4 text-white">
        <div className="m-auto flex flex-wrap sm:max-w-[540px] lg:max-w-[1140px]">
          <div
            className="w-full md:w-1/2"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <InstagramEmbed
              url="https://www.instagram.com/reel/C3lcuq8pTZQ/?utm_source=ig_web_copy_link"
              width={328}
            />
          </div>
          <div className="flex w-full flex-col justify-center text-white md:w-1/2">
            <h2 className="mb-10 font-[Montserrat] text-3xl">
              Revisa los resultados en nuestras redes sociales!
            </h2>
            <p className="text \ mb-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, odit
              molestias consequatur possimus quo impedit in, nisi voluptatibus repellat
              vel perferendis non reprehenderit eos architecto ipsum facere magni
              laudantium pariatur.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
