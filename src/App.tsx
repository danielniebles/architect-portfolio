import { useState } from 'react';
import logo from '../assets/main_logo.svg';
import logoTerra from '../assets/logo_terra.svg';
import './App.css';
import './index.css';
import Card from './components/Card';
import SectionTitle from './components/SectionTitle';
import Header from './components/Header';
import Gallery from './Sections/Gallery/Gallery';
import Contact from './Sections/Contact';
import Services from './Sections/Services/Services';
import Footer from './Sections/Footer/Footer';

import './App.css';
import './index.css';
import Banner from './Sections/Banner/Banner';
import Presentation from './Sections/Presentation/Presentation';
import Team from './Sections/Team/Team';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  const [sectionInView, setSectionInView] = useState('');

  return (
    <div className='relative'>
      <Header sectionInView={sectionInView} />
      <div className="relative flex min-h-screen flex-col scroll-smooth bg-white text-base text-light-blue-900">
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

export default App;
