import LinkButton from 'src/components/LinkButton';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

interface BannerProps {
  setSectionInView: (value: string) => void;
}

const Banner = ({ setSectionInView }: BannerProps): JSX.Element => {
  const { ref, inView } = useInView({ threshold: 1 });

  useEffect(() => {
    setSectionInView(inView ? 'banner' : '');
  }, [inView]);

  return (
    <section className="relative w-full" id="home" ref={ref}>
      <div className="flex h-[600px] w-full items-center justify-center bg-construction bg-center bg-repeat text-center md:h-[1000px]">
        <div className="flex w-full flex-col items-center justify-center sm:max-w-[720px] md:max-w-[1140px]">
          <h1 className="inline-block font-[Montserrat] text-4xl text-white md:text-6xl">
            Diseña tus sueños renovando con nosotros
          </h1>
          <p className="m-[auto] pt-6 text-white md:w-[35rem]">
            Ponemos a su disposición toda nuestra infraestructura física y profesional,
            para acompañarlo en cada uno de los proyectos que emprenda en su compañía o, a
            título personal, buscando con ello entregar siempre un excelente trabajo.
          </p>
          <LinkButton customClass="mt-6" link="#contact" target="_self">
            Saber más
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

export default Banner;
