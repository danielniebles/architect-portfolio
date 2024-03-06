import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLandingVideoContext } from '@/contexts/LandingVideoContext';

const Team = () => {
  const { ref, inView } = useInView({ threshold: 1 });
  const { setSectionInView } = useLandingVideoContext();

  useEffect(() => {
    setSectionInView(inView ? 'team' : '');
  }, [inView]);

  return (
    <section
      className="relative m-auto flex w-full flex-wrap justify-center bg-[#fbfbfb] p-2 pt-[7rem] pb-[7rem]"
      id="team"
      ref={ref}
    >
      <div className="z-20 flex w-full flex-col sm:max-w-[540px] lg:max-w-[1140px]">
        <header className="mb-10 flex flex-col text-center">
          <div className="text-sm font-bold text-terra-blue">PERSONAS</div>
          <h2 className="m-auto mb-2 w-full text-3xl font-bold text-title-gray md:w-[35rem]">
            Conoce al equipo
          </h2>
          <p className="text-base text-body-gray">
            Nuestro equipo de profesionales a tu disposición
          </p>
        </header>
        <div className="flex flex-wrap justify-center gap-20">
          <div className="flex flex-col text-center">
            <div className="h-[200px] w-[200px] overflow-hidden">
              <img
                src="assets/profile/maribel.jpeg"
                alt=""
                className="h-auto max-w-full object-cover grayscale"
              />
            </div>
            <div className="mt-6 font-[Montserrat] text-base font-bold text-title-gray">
              Maribel Soler
            </div>
            <div className="text-base text-title-gray">Gerente comercial</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
