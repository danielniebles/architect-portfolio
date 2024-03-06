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
          <h2 className="inline-block text-4xl text-white md:text-5xl font-semibold">
            Finalizó la renovación de la Parroquia Jesucristo Redentor
          </h2>
          <p className="m-[auto] pt-6 text-white md:w-[35rem]">
            Un proyecto para la comunidad religiosa del barrio Mazurén
          </p>
          <LinkButton customClass="mt-6" link="/proyectos/parroquia-jcr" target="_self">
            Saber más
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

export default Banner;
