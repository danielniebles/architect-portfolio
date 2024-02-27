import { useState } from 'react';
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

  return (
    <div className="relative">
      <Header sectionInView={sectionInView} />
      <div className="text-light-blue-900 relative flex min-h-screen flex-col scroll-smooth bg-white text-base">
        <Banner setSectionInView={setSectionInView} />
        <Presentation setSectionInView={setSectionInView} />
        <Services setSectionInView={setSectionInView} />
        <Contact setSectionInView={setSectionInView} />
        <Team setSectionInView={setSectionInView} />
        <ScrollToTopButton />
      </div>
      <Footer />
    </div>
  );
}
