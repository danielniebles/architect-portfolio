const PhotosGrid = ({ photosUrls }: { photosUrls: string[] }): JSX.Element => {
  return (
    <div
      className='grid grid-flow-col overflow-y-auto snap-mandatory snap-x gap-1 overscroll-x-contain
      md:grid-auto-rows md:grid md:w-6/12 md:grid-flow-row-dense md:auto-rows-gallery
      md:grid-cols-gallery md:gap-2 md:overflow-y-hidden'
    >
      {photosUrls.map((photoUrl, index) => (
        <div className="item snap-start hover:opacity-1" key={index}>
          <img
            className="h-full w-[500px] md:w-full max-w-none object-cover"
            src={photoUrl}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default PhotosGrid;

/* "grid-auto-rows grid w-6/12 grid-flow-row-dense auto-rows-gallery
        grid-cols-gallery gap-2" */

/* md:grid-auto-rows md:grid md:w-6/12 md:grid-flow-row-dense md:auto-rows-gallery
      md:grid-cols-gallery md:gap-2 md:overflow-y-hidden*/