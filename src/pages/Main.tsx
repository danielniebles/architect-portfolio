import { useState } from 'react';
import Header from '../components/Header';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Presentation from '../sections/Presentation';
import Services from '../sections/Services';
import Contact from '../sections/Contact';
import Team from '../sections/Team';
import Banner from '../sections/Banner';
import Footer from '../sections/Footer';
import { useLandingVideoContext } from '@/contexts/LandingVideoContext';

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
        <Contact />
        <Team />
        <ScrollToTopButton />
      </div>
      <Footer />
    </>
  );
}
