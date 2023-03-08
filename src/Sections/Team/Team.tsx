import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Team = ({ setSectionInView }: { setSectionInView: (value: string) => void }) => {
  const { ref, inView } = useInView({ threshold: 1 });

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
          <h2 className="m-auto mb-2 w-full font-[Montserrat] text-3xl text-title-gray md:w-[35rem]">
            Conoce al equipo
          </h2>
          <p className="text-base text-body-gray">
            Nuestro equipo de profesionales a tu disposición
          </p>
        </header>
        <div className="flex flex-wrap justify-around gap-4">
          <div className="flex flex-col text-center">
            <div className="relative h-[200px] w-[200px] overflow-hidden">
              <img
                src="assets/profile/javier.jpg"
                alt=""
                className="absolute -top-8 h-auto max-w-full object-cover"
              />
            </div>
            <div className="mt-6 font-[Montserrat] text-base font-bold text-title-gray">
              Javier Niebles
            </div>
            <div className="text-base text-title-gray">Fundador</div>
          </div>
          <div className="flex flex-col text-center">
            <div className="h-[200px] w-[200px] overflow-hidden">
              <img
                src="assets/profile/maribel.jpeg"
                alt=""
                className="h-auto max-w-full object-cover"
              />
            </div>
            <div className="mt-6 font-[Montserrat] text-base font-bold text-title-gray">
              Maribel Soler
            </div>
            <div className="text-base text-title-gray">Gerente comercial</div>
          </div>

          <div className="flex flex-col text-center">
            <div className="h-[200px] w-[200px] overflow-hidden">
              <img
                src="assets/profile/juanCarlos.jpeg"
                alt=""
                className="h-auto max-w-full object-cover"
              />
            </div>
            <div className="mt-6 font-[Montserrat] text-base font-bold text-title-gray">
              Juan Carlos Ariza
            </div>
            <div className="text-base text-title-gray">Gerente de Proyectos</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
