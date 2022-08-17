import { useState } from 'react';
import logo from '../assets/main_logo.svg';
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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col bg-light-blue-900 text-base text-light-blue-900">
        <Banner />
        <Services />
        <Gallery />
        <Contact />
        {/* <h4 style={{ fontWeight: 700 }}>Página en construcción...</h4>
        <img src={logo} className="App-logo" alt="logo" />

        <div className="info__container">
          <div className="contact__item">
            <i style={{marginRight: '16px'}} className="uil uil-envelope"></i>
            <p className="text">javier.niebles@gmail.com</p>
          </div>
          <div className="contact__item">
            <i style={{marginRight: '16px'}} className="uil uil-whatsapp"></i>
            <a
              className="text link"
              href="https://wa.link/ozr341"
              target="_blank"
            >
              (+57) 300 373 4489
            </a>
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
