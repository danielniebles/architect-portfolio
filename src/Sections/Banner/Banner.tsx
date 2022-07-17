import PrimaryButton from '../../components/Button';
import MainTitle from '../../components/MainTitle';
import useHover from '../../hooks/useHover';

const Banner = (): JSX.Element => {
  return (
    <section className="relative min-h-screen w-full">
      <div className="flex min-h-screen bg-opacity-60 bg-building bg-repeat-round w-full">
        <div className="absolute inset-0 flex items-center justify-end bg-black bg-opacity-60">
          <div className="flex md:ml-3 md:w-1/3 flex-col items-start p-5">
            <MainTitle customClass="text-white mb-4">Arquitectura moderna</MainTitle>
            <p className="mb-3 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae numquam porro
              inventore quam, obcaecati deleniti.
            </p>
            <PrimaryButton>Contáctanos</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
