import Card from '../../components/Card';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLandingVideoContext } from '@/contexts/LandingVideoContext';

const Services = (): JSX.Element => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setSectionInView } = useLandingVideoContext();

  useEffect(() => {
    setSectionInView(inView ? 'services' : '');
  }, [inView]);

  return (
    <section
      className="relative m-auto flex w-full flex-wrap justify-center bg-[#efefef] p-2 pt-[7rem] pb-[7rem]"
      id="services"
      ref={ref}
    >
      <img
        src="assets/leafs.svg"
        className="absolute -left-[1%] top-[10%] h-[1000px] w-auto md:-top-[1%]"
        alt=""
      />
      <div className="z-20 flex flex-col sm:max-w-[540px] lg:max-w-[1140px]">
        <header className="mb-10 flex flex-col text-center">
          <div className="text-sm font-bold text-terra-blue">SERVICIOS</div>
          <h2 className="m-auto mb-2 w-full font-[Montserrat] text-3xl text-title-gray md:w-[35rem]">
            Selecciona el paquete de servicios que se acomode a tu necesidad
          </h2>
        </header>
        <div className="flex flex-wrap">
          <Card
            imageUrl="https://images.unsplash.com/photo-1574359411659-15573a27fd0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            title="Restauración de fachadas"
            list={[
              'Pintura',
              'Reparación de grietas',
              'Lavado',
              'Hidrofugado',
              'Cambio de piezas de enchape',
              'Limpieza de vidrios',
            ]}
          />
          <Card
            imageUrl="https://images.unsplash.com/photo-1561343228-e6a5c693d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            title="Trabajos en Alturas"
            list={['Limpieza de cerchas', 'Techos', 'Tejas', 'Limpieza de Domos']}
          />
          <Card
            imageUrl="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80"
            title="Reformas"
            list={[
              'Instalación de pisos',
              'Levantamiento de muros',
              'Instalación de cielos rasos',
              'Electricidad',
              'Estuco y revoque',
              'Obra Seca (Drywall / SuperBoard)',
            ]}
          />
          <Card
            imageUrl="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80"
            title="Diseño Arquitectónico"
            list={[
              'Diseño estructural',
              'Diseño Sanitario',
              'Trámite de licencias de construcción',
            ]}
          />
          <Card
            imageUrl="https://images.unsplash.com/photo-1593786267440-550458cc882a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
            title="Obras de mediana escala"
            list={[
              'Fincas',
              'Vivienda familiar',
              'Zonas de recreo',
              'Locales comerciales',
            ]}
          />
          <Card
            imageUrl="https://plus.unsplash.com/premium_photo-1663021816337-be7fb3833336?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            title="Comunicaciones"
            list={['Telefonía', 'Citofonía', 'CCTV', 'Cableado estructurado']}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
