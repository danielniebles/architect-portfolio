import { useState, useEffect } from 'react';
import Header from '../components/Header';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Presentation from '../sections/Presentation';
import Services from '../sections/Services';
import Contact from '../sections/Contact';
import Team from '../sections/Team';
import Banner from '../sections/Banner';
import Footer from '../sections/Footer';

export default function Main() {
  const [sectionInView, setSectionInView] = useState('');
  const [isMainPageVisible, setIsMainPageVisible] = useState(false);

  useEffect(() => {
    const landingVideoEl = document.getElementById('landing') as HTMLElement;
    const onEndedHandler = () => {
      landingVideoEl.remove();
      setIsMainPageVisible(true);
    };
    landingVideoEl.addEventListener('ended', onEndedHandler, false);

    return () => {
      landingVideoEl.addEventListener('ended', onEndedHandler, false);
    };
  }, []);

  return (
    <div className="relative">
      <div
        className={`absolute inset-0 flex h-screen items-center justify-center bg-white ${
          isMainPageVisible ? 'z-[0] opacity-0' : 'opacity-1 z-[100]'
        } transition duration-300 `}
      >
        <video autoPlay playsInline muted id="landing">
          <source src="/assets/terrazul-animacion-behance.mp4" type="video/mp4" />
        </video>
      </div>
      {isMainPageVisible && (
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
            <Banner setSectionInView={setSectionInView} />
            <Presentation setSectionInView={setSectionInView} />
            <Services setSectionInView={setSectionInView} />
            <Contact setSectionInView={setSectionInView} />
            <Team setSectionInView={setSectionInView} />
            <ScrollToTopButton />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
