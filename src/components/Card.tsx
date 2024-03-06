import LinkButton from './LinkButton';
import './index.css';
import Leaf from './Leaf';

interface CardProps {
  imageUrl: string;
  title: string;
  text?: string;
  list?: string[];
}

const Card = ({ imageUrl, text, title, list = [] }: CardProps): JSX.Element => {
  return (
    <div className="relative m-4 h-[600px] w-full bg-white lg:w-[340px]">
      <div className="h-[300px] overflow-hidden">
        <img
          src={imageUrl}
          alt=""
          className="h-full w-full object-cover transition-transform hover:scale-110"
        />
      </div>
      <div className="mt-6 pr-9 pl-9">
        <h4 className="text-bold m-2 flex h-[60px] items-center justify-center text-center font-[Montserrat] text-2xl text-title-gray">
          {title}
        </h4>
        <p className="text-body-gray">{text}</p>
        {Boolean(list.length) && (
          <ul className="mt-4">
            {list.map((item) => (
              <li key={item}>
                <div className="flex text-body-gray">
                  <div className="mr-1 w-[15px]">
                    <Leaf
                      color="#c3d500"
                      style={{ height: '10px', marginTop: '7px', marginRight: '4px' }}
                    />
                  </div>
                  {item}
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="absolute -bottom-2 right-0 flex w-full justify-center">
          <LinkButton link="#contact" target="_self">
            Contratar
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default Card;
