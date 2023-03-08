import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Presentation = ({
  setSectionInView,
}: {
  setSectionInView: (value: string) => void;
}) => {
  const { ref, inView } = useInView({ threshold: 1 });

  useEffect(() => {
    setSectionInView(inView ? 'presentation' : '');
  }, [inView]);

  return (
    <section
      className="m-auto flex flex-wrap justify-center p-2 pt-[7rem] pb-[6rem] sm:max-w-[540px] lg:max-w-[1140px]"
      id="presentation" ref={ref}
    >
      <div className="mb-14 mr-4 w-full lg:w-[40%]">
        <div className="text-sm font-bold text-terra-blue">TERRA AZUL</div>
        <h2 className="mb-10 font-[Montserrat] text-3xl text-title-gray">
          Ofrecemos servicios de alta calidad
        </h2>
        <p className="mb-2 text-body-gray">
          TERRA AZUL se ha constituido como una empresa de servicios especializados en
          arquitectura que cuenta con los más altos estándares de calidad, seguridad,
          tecnología, recurso humano profesional y capacitado permanentemente, con el fin
          de garantizar a nuestros clientes una satisfacción total en nuestro trabajo.
        </p>
        {/* <div className="text-lg font-bold text-title-gray">Javier Niebles - CEO</div> */}
      </div>
      <div className="w-full p-2 lg:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1591588582259-e675bd2e6088?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
          alt=""
          className="h-auto w-full rounded"
        />
      </div>
    </section>
  );
};

export default Presentation;
