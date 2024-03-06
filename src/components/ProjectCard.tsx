import Leaf from './Leaf';
import LinkButton from './LinkButton';

interface ProjectCard {
  name: string;
  finished: boolean;
  image: string;
}

const ProjectCard = ({ name, finished, image }: ProjectCard) => {
  return (
    <article className="flex flex-col items-center text-center w-full md:w-[200px]">
      <img
        src={`https://ik.imagekit.io/wbjodg09y/tr:w-200,h-200/${image}`}
        alt=""
        className="h-48 w-48 rounded-xl object-cover"
      />
      <p className="my-4 h-12 flex flex-col justify-center font-bold text-title-gray">{name}</p>
      {finished ? (
        <LinkButton link="/proyectos/parroquia-jcr#home" target="_self">
          Saber más
        </LinkButton>
      ) : (
        <div className="flex font-medium text-body-gray">
          <Leaf
            color="#c3d500"
            style={{ height: '10px', marginTop: '7px', marginRight: '4px' }}
          />
          ¡Próximamente!
        </div>
      )}
    </article>
  );
};

export default ProjectCard;