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
import HexagonLeaf from '@/components/HexagonLeaf';
import { useInView } from 'react-intersection-observer';
import { useLandingVideoContext } from '@/contexts/LandingVideoContext';
import { useEffect } from 'react';

const BASE_URL_THUMBNAIL = 'https://ik.imagekit.io/wbjodg09y/tr:w-200,h-200';
const BASE_URL = 'https://ik.imagekit.io/wbjodg09y/tr:w-1200,h-900';

export interface ProjectProps {
  bannerUrl: string;
  description: string;
  instagramReelUrl: string;
  photos: Photo[];
  projectDetails: ProjectDetails;
  projectName: string;
  routeName: string;
}

export interface Photo {
  name: string;
  type: string;
}

export interface ProjectDetails {
  responsible: string;
  city: string;
  neighborhood: string;
  area: string;
  year: string;
}

const Project = (projectInfo: ProjectProps) => {
  const {
    bannerUrl,
    description,
    instagramReelUrl,
    photos,
    projectDetails,
    projectName,
    routeName,
  } = projectInfo;
  const { responsible, city, neighborhood, area, year } = projectDetails;
  const { sectionInView, setSectionInView } = useLandingVideoContext();

  const { ref: homeRef, inView: homeInView } = useInView({ threshold: 1 });
  const { ref: resultsRef, inView: resultsInView } = useInView({ threshold: 1 });
  const { ref: socialRef, inView: socialInView } = useInView({ threshold: 1 });

  useEffect(() => {
    setSectionInView(homeInView ? 'home' : '');
  }, [homeInView]);

  useEffect(() => {
    setSectionInView(resultsInView ? 'results' : '');
  }, [resultsInView]);

  useEffect(() => {
    setSectionInView(socialInView ? 'social' : '');
  }, [socialInView]);

  return (
    <>
      <Header
        sectionInView={sectionInView}
        links={[
          { displayName: 'Inicio', name: 'home', link: `/project/${routeName}#home` },
          {
            displayName: 'Resultados',
            name: 'results',
            link: `/project/${routeName}#results`,
          },
          {
            displayName: 'Social',
            name: 'social',
            link: `/project/${routeName}#social`,
          },
        ]}
        transparent={false}
      />
      <div className="mt-20 flex h-[100vh] w-full flex-col items-center">
        <ProjectBanner backgroundUrl={bannerUrl} name={projectName} />
        <section
          className="mt-10 grid w-full grid-cols-1 p-5 sm:max-w-[540px] md:grid-cols-3 lg:max-w-[1140px]"
          ref={homeRef}
        >
          <DetailCard
            responsible={responsible}
            city={city}
            neighborhood={neighborhood}
            area={area}
            year={year}
          />
          <article
            className="p-5 text-justify font-medium md:col-span-2"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </section>
        <section
          className="flex w-full justify-center bg-[#efefef]"
          id="results"
          ref={resultsRef}
        >
          <div className="p-2 pt-8 sm:max-w-[540px] md:grid-cols-1 md:pt-16 lg:max-w-[1140px]">
            <header className="mb-10 flex flex-col text-center">
              <div className="text-sm font-bold text-terra-blue">RESULTADOS</div>
              <h2 className="m-auto mb-2 w-full text-3xl font-bold text-title-gray md:w-[35rem]">
                Te mostramos algunos resultados de este proyecto
              </h2>
            </header>
            <ThumbsSwiper
              thumbnailUrl={photos.map(({ name }) => `${BASE_URL_THUMBNAIL}/${name}`)}
              backgroundColor="bg-terra-green-300"
            >
              {photos.map(({ name, type }) => (
                <aside className="relative h-full">
                  <img
                    className="h-full w-full rounded-xl  object-cover"
                    src={`${BASE_URL}/${name}`}
                  />
                  <footer
                    className="absolute bottom-0 w-full rounded-xl
                            bg-gradient-to-b from-transparent to-black p-2 font-bold text-white"
                  >
                    {type === 'before' ? 'Antes' : 'Después'}
                  </footer>
                </aside>
              ))}
            </ThumbsSwiper>
          </div>
        </section>
        <img
          src="assets/leafs.svg"
          className="absolute -left-[1%] top-[10%] h-[1000px] w-auto md:top-[70%]"
          alt=""
        />
        <section className="flex w-full p-2 pt-12 pb-4" id="social" ref={socialRef}>
          <div className="m-auto flex flex-wrap sm:max-w-[540px] lg:max-w-[1140px]">
            <div className="flex w-full justify-center md:w-1/2">
              <InstagramEmbed url={instagramReelUrl} width={328} />
            </div>
            <div className="flex w-full flex-col items-center justify-center text-white md:w-1/2">
              <HexagonLeaf hexagonColor="bg-terra-green" leafColor="white" />
              <h2 className="mb-10 text-center text-3xl font-medium text-title-gray">
                Visítanos en nuestras redes sociales para más información y detalles
              </h2>
              <article className="text-center font-medium text-body-gray">
                No te pierdas ningún detalle de nuestra próxima renovación.
              </article>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Project;
