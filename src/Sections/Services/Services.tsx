import Card from '../../components/Card';
import SectionTitle from '../../components/SectionTitle';

const Services = (): JSX.Element => {
  return (
    <section className="flex w-full flex-col items-center justify-center py-20 bg-light-blue-900">
      <SectionTitle customClass="text-white">Nuestros servicios</SectionTitle>
      <div className="mt-6 grid grid-cols-services grid-auto-rows grid-flow-row-dense px-4 w-full md:w-3/4 gap-10 md:gap-5">
        <Card
          imageUrl="https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_412,ar_1:1/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F201231114619-01-oz-ourdomain-student-housing.jpg"
          title="Diseño Arquitectónico"
          textBackground="bg-creamy"
        />
        <Card
          imageUrl="https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/NexGen/ContentPage/Drywall-Guide-2.jpg"
          title="Instalación de Drywall"
          textBackground="bg-light-blue"
        />
        <Card
          imageUrl="https://www.anahuac.mx/mexico/posgrados/sites/default/files/course/maestria-en-arquitectura-y-diseno-de-interiores.jpg"
          title="Arquitectura interiores"
          textBackground="bg-creamy"
        />
        <Card
          imageUrl="https://www.lavoz.com.ar/resizer/-WT0vBu4IeFHh7apgweU6R9tJeA=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/DX57AEJPKNFGHIAMUSPFEV3WJU.jpg"
          title="Impermeabilizaciones"
          textBackground="bg-light-blue"
        />
      </div>
    </section>
  );
};

export default Services;
