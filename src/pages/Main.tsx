import Header from '../components/Header';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Presentation from '../sections/Presentation';
import Services from '../sections/Services';
import Contact from '../sections/Contact';
import Team from '../sections/Team';
import Banner from '../sections/Banner';
import Footer from '../sections/Footer';
import { useLandingVideoContext } from '@/contexts/LandingVideoContext';
import { PROJECTS } from '@/config/projects';
import ProjectCard from '@/components/ProjectCard';

export default function Main() {
  const { sectionInView } = useLandingVideoContext();

  return (
    <>
      <Header
        sectionInView={sectionInView}
        links={[
          { displayName: 'Inicio', name: 'banner', link: '#home' },
          {
            displayName: 'Quiénes somos',
            name: 'presentation',
            link: '#presentation',
          },
          { displayName: 'Servicios', name: 'services', link: '#services' },
          { displayName: 'Contáctanos', name: 'contact', link: '#contact' },
          { displayName: 'Nosotros', name: 'team', link: '#team' },
        ]}
      />
      <div className="text-light-blue-900 relative flex min-h-screen flex-col scroll-smooth bg-white text-base">
        <Banner />
        <Presentation />
        <Services />
        <section className="flex w-full flex-col items-center justify-center p-2 pt-[7rem] pb-[7rem]">
          <div className="sm:max-w-[720px] md:max-w-[1140px]">
            <header className="mb-10 flex flex-col text-center">
              <div className="text-sm font-bold text-terra-blue">RESULTADOS</div>
              <h2 className="m-auto mb-2 w-full text-3xl font-bold text-title-gray md:w-[35rem]">
                Entérate de nuestros proyectos más recientes
              </h2>
            </header>
            <div className="flex flex-wrap gap-20 md:justify-between">
              {PROJECTS.map((project) => (
                <ProjectCard {...project} key={project.name} />
              ))}
            </div>
          </div>
        </section>
        <Contact />
        <Team />
        <ScrollToTopButton />
      </div>
      <Footer />
    </>
  );
}
