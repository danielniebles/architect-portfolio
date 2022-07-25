import { useEffect } from 'react';
import useHover from '../hooks/useHover';
import Children from '../interfaces/Children';
import PrimaryButton from './Button';
import Title from './Title';

const Card = ({ imageUrl, title, textBackground }: Children): JSX.Element => {
  const [ref, hovered] = useHover();

  return (
    <div ref={ref} className="relative">
      <div className="flex h-[60vh] items-center justify-center overflow-hidden">
        <img src={imageUrl} className="h-full w-full object-cover"></img>
      </div>

      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
        {!hovered && (
          <Title
            customClass={`text-white bg-opacity-40 bg-black w-full text-center mb-25 py-5`}
          >
            {title}
          </Title>
        )}
      </div>
      {hovered && (
        <div className="absolute inset-0 flex items-center justify-center">
          <PrimaryButton>Ver más</PrimaryButton>
        </div>
      )}
    </div>
  );
};

export default Card;
