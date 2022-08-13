import SectionTitle from '../../../components/SectionTitle';
import PhotosGrid from './PhotosGrid';

const IMGS_ARRAY = [
  'assets/temp/IMG_1969.jpg',
  'assets/temp/IMG_1973.jpg',
  'assets/temp/IMG_2134.jpg',
  'assets/temp/IMG_2481.jpg',
  'assets/temp/IMG_2483.jpg',
  'assets/temp/IMG_1973.jpg',
  'assets/temp/IMG_2134.jpg',
  'assets/temp/IMG_2481.jpg',
];

const ProjectInfo = (): JSX.Element => {

  return (
    <div className="mt-10 flex flex-col md:flex-row justify-center">
      <PhotosGrid photosUrls={IMGS_ARRAY} />
      <div className="flex md:w-4/12 flex-col items-start justify-center p-5">
        <SectionTitle customClass="mb-10 text-white">Arquitectura interior</SectionTitle>
        <p className="text-start text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic harum recusandae
          delectus in, pariatur commodi? Excepturi obcaecati suscipit consequatur vel
          eligendi a, eius beatae mollitia sunt unde consequuntur. Ex, deleniti.
        </p>
      </div>
    </div>
  );
};

export default ProjectInfo;