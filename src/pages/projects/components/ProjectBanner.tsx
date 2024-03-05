interface ProjectBannerProps {
  backgroundUrl: string;
  name: string;
}

const ProjectBanner = ({ backgroundUrl, name }: ProjectBannerProps) => {
  return (
    <section className="flex w-full justify-center p-5 sm:max-w-[540px] lg:max-w-[1140px]">
      <div
        className={`flex h-[300px] w-full items-end justify-start rounded-xl bg-[url(${backgroundUrl})] bg-bottom bg-repeat`}
      >
        <footer className="w-full rounded-xl bg-gradient-to-b from-transparent to-black">
          <h1 className="p-5 text-2xl text-white">{name}</h1>
        </footer>
      </div>
    </section>
  );
};

export default ProjectBanner;