import { useEffect, useState } from 'react';
import useIsMobile from '../hooks/useIsMobile';

const LINK_CLASS =
  "p-1 relative after:transition-transform after:duration-300 after:ease-out after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-terra-green after:content-[''] hover:after:origin-bottom-left hover:after:scale-x-100";

const Header = ({ sectionInView }: { sectionInView: string }): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const isMobile = useIsMobile();

  const handleShowMenu = () => {
    setShowMenu(true);
  };
  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const checkScrollOffset = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', checkScrollOffset, { passive: true });

    return () => window.removeEventListener('scroll', checkScrollOffset);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full pb-2 shadow-xl transition-all duration-500
      ${
        isScrolled
          ? 'bg-white pt-5 text-white shadow-xl'
          : 'border-b bg-transparent pt-7 '
      }`}
    >
      <nav className="m-[auto] flex items-center justify-between md:max-w-[1140px]">
        <img src="assets/logo_terra.svg" className="ml-4 h-12"></img>
        <div
          className={`fixed flex w-full flex-col md:relative md:w-2/4 ${
            showMenu ? 'top-0' : '-top-full'
          } text-gray-800 shadow-xl transition-all duration-500 md:top-0 md:mx-4 md:shadow-none`}
        >
          <img
            src="assets/logo_terra.svg"
            className="absolute top-2 left-2 h-10 md:hidden"
          ></img>
          <ul
            className="flex flex-col items-center gap-2 bg-white
            p-10 md:flex-row md:justify-end md:bg-transparent md:p-0 "
          >
            <a
              className={`${LINK_CLASS} ${
                sectionInView === 'banner' && 'after:origin-bottom-left after:scale-x-100'
              } ${isScrolled || isMobile ? 'text-gray-800' : 'text-white'}`}
              href="#home"
              onClick={() => handleCloseMenu()}
            >
              Inicio
            </a>
            <a
              className={`${LINK_CLASS} ${
                sectionInView === 'presentation' &&
                'after:origin-bottom-left after:scale-x-100'
              } ${isScrolled || isMobile ? 'text-gray-800' : 'text-white'}`}
              href="#presentation"
              onClick={() => handleCloseMenu()}
            >
              Quiénes somos
            </a>
            <a
              className={`${LINK_CLASS} ${
                sectionInView === 'services' &&
                'after:origin-bottom-left after:scale-x-100'
              } ${isScrolled || isMobile ? 'text-gray-800' : 'text-white'}`}
              href="#services"
              onClick={() => handleCloseMenu()}
            >
              Servicios
            </a>
            <a
              className={`${LINK_CLASS} ${
                sectionInView === 'contact' &&
                'after:origin-bottom-left after:scale-x-100'
              } ${isScrolled || isMobile ? 'text-gray-800' : 'text-white'}`}
              href="#contact"
              onClick={() => handleCloseMenu()}
            >
              Contáctanos
            </a>
            <a
              className={`${LINK_CLASS} ${
                sectionInView === 'team' && 'after:origin-bottom-left after:scale-x-100'
              } ${isScrolled || isMobile ? 'text-gray-800' : 'text-white'}`}
              href="#team"
              onClick={() => handleCloseMenu()}
            >
              Nosotros
            </a>
          </ul>
          <button
            className="absolute top-1 right-1 md:hidden"
            onClick={() => handleCloseMenu()}
          >
            <i className="uil uil-times text-xl font-normal text-gray-800"></i>
          </button>
        </div>
        <button className="mr-4 md:hidden" onClick={() => handleShowMenu()}>
          <i
            className={`uil uil-bars text-2xl font-normal ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          ></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;
