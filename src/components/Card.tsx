import { useState } from 'react';
import Children from '../interfaces/Children';
import LinkButton from './LinkButton';
import Title from './Title';
import './index.css';

const Card = ({ imageUrl, title }: Children): JSX.Element => {
  const [visibleInfo, setVisibleInfo] = useState(false);

  const onClick = () => setVisibleInfo(true);
  const onClose = () => setVisibleInfo(false);

  return (
    <div className="relative">
      <div className="flex h-[60vh] items-center justify-center overflow-hidden">
        <img src={imageUrl} className="h-full w-full object-cover"></img>
      </div>

      <div className="absolute inset-0 items-center bg-black bg-opacity-60">
        <div
          className={`flex ${visibleInfo ? 'h-full' : 'mt-5 h-20'}
        relative w-full flex-col items-center justify-center
        bg-black bg-opacity-40 transition-all duration-300 `}
        >
          <div className="service__title" onClick={onClick}>
            <Title customClass={`text-white text-center mt-25 py-5`}>{title}</Title>
            {!visibleInfo && (
              <i className="uil uil-arrow-right service__icon ml-2 text-2xl text-white"></i>
            )}
          </div>
          <div className={`${visibleInfo ? 'description__container' : 'hidden'}
            flex flex-col items-center p-4`}>
            <p
              className={` text-white
              transition duration-1000 text-center`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod numquam ipsum
              consequatur rem aliquid commodi voluptatum, nemo vitae. Cum laudantium optio
              tempora hic amet. Veniam voluptates quibusdam iure ad enim?
            </p>
            <i
              className="uil uil-times absolute top-1.5 right-1.5 text-2xl text-white"
              onClick={onClose}
            ></i>
            <LinkButton customClass='mt-10'>Ver más</LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
