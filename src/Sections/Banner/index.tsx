import LinkButton from 'src/components/LinkButton';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useLandingVideoContext } from '@/contexts/LandingVideoContext';


const Banner = (): JSX.Element => {
  const { ref, inView } = useInView({ threshold: 1 });
  const { setSectionInView } = useLandingVideoContext();

  useEffect(() => {
    setSectionInView(inView ? 'banner' : '');
  }, [inView]);

  return (
    <section className="relative w-full" id="home" ref={ref}>
      <div
        className="relative flex h-[600px] w-full items-center justify-center
      bg-[url(https://terra-azul-s3.s3.amazonaws.com/finished-projects/panoramic.jpg)] bg-cover bg-center text-center md:h-[1000px]"
      >
        <div className="bg-red absolute inset-0 h-full w-full bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.6)] "></div>
        <div className="z-20 flex w-full flex-col items-center justify-center sm:max-w-[720px] md:max-w-[1140px]">
          <h1 className="inline-block font-[Montserrat] text-4xl text-white md:text-6xl">
            Finalizó la renovación de la Parroquia Jesucristo Redentor
          </h1>
          <p className="m-[auto] pt-6 text-white md:w-[35rem]">
            Ponemos a su disposición toda nuestra infraestructura física y profesional,
            para acompañarlo en cada uno de los proyectos que emprenda en su compañía o, a
            título personal, buscando con ello entregar siempre un excelente trabajo.
          </p>
          <LinkButton customClass="mt-6" link="/project/parroquia-jcr" target="_self">
            Saber más
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

export default Banner;
