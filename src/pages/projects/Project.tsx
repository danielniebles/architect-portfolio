import { InstagramEmbed } from 'react-social-media-embed';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import Footer from '../../sections/Footer';
import Header from '@/components/Header';
import ProjectBanner from './components/ProjectBanner';
import DetailCard from './components/DetailCard';
import ThumbsSwiper from '@/components/ThumbsSwiper';

const BASE_URL_THUMBNAIL = 'https://ik.imagekit.io/wbjodg09y/tr:w-200,h-200';
const BASE_URL = 'https://ik.imagekit.io/wbjodg09y/tr:w-1200,h-900';
const config = {
  swiper: {
    images: [
      {
        name: 'door_before.jpg',
        type: 'before',
      },
      {
        name: 'door_after.JPG',
        type: 'after',
      },
      {
        name: 'adoquin_antes.jpg',
        type: 'before',
      },
      {
        name: 'adoquin_final.jpg',
        type: 'after',
      },
    ],
  },
};

const Project = () => {
  return (
    <>
      <Header sectionInView={''} />
      <div className="mt-20 flex h-[100vh] w-full flex-col items-center">
        <ProjectBanner
          backgroundUrl="https://terra-azul-s3.s3.amazonaws.com/finished-projects/panoramic.jpg"
          name="Parroquia Jesucristo Redentor"
        />
        <section className="mt-10 grid w-full grid-cols-1 p-5 sm:max-w-[540px] md:grid-cols-3 lg:max-w-[1140px]">
          <DetailCard
            responsible="Arq. Javier Niebles"
            city="Bogotá"
            neighborhood="Mazurén"
            area="2000 m²"
            year="2023"
          />

          <article className="p-5 md:col-span-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit ratione
            libero aut aperiam eos repellendus debitis autem temporibus similique.
            Corrupti expedita totam distinctio dolorum ab deserunt saepe maiores ullam
            minima. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            illum iste nostrum tenetur quae eaque laborum quasi, quibusdam enim sint
            eveniet animi voluptatibus, veniam commodi, soluta doloribus earum similique
            ut.
          </article>
        </section>
        <section className="flex w-full justify-center bg-[#efefef]">
          <div className="grid grid-cols-1 gap-2 p-2 pt-8 sm:max-w-[540px] md:grid-cols-1 md:p-2 lg:max-w-[1140px]">
            <div className="my-12 rounded-xl bg-terra-green-300 p-4">
              <ThumbsSwiper
                thumbnailUrl={config.swiper.images.map(
                  ({ name }) => `${BASE_URL_THUMBNAIL}/${name}`
                )}
              >
                {config.swiper.images.map(({ name, type }) => (
                  <aside className="relative h-full">
                    <img
                      className="h-full w-full rounded-xl  object-cover"
                      src={`${BASE_URL}/${name}`}
                    />
                    <footer
                      className="absolute bottom-0 w-full rounded-xl
                            bg-gradient-to-b from-transparent to-black p-2 text-white"
                    >
                      {type === 'before' ? 'Antes' : 'Después'}
                    </footer>
                  </aside>
                ))}
              </ThumbsSwiper>
            </div>
          </div>
        </section>
        <img
          src="assets/leafs.svg"
          className="absolute -left-[1%] top-[10%] h-[1000px] w-auto md:top-[70%]"
          alt=""
        />
        <section className="flex w-full p-2 pt-12 pb-4">
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
              <h2 className="mb-10 font-[Montserrat] text-3xl text-title-gray">
                Revisa los resultados en nuestras redes sociales
              </h2>
              <p className="text mb-2 text-body-gray">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, odit
                molestias consequatur possimus quo impedit in, nisi voluptatibus repellat
                vel perferendis non reprehenderit eos architecto ipsum facere magni
                laudantium pariatur.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Project;
