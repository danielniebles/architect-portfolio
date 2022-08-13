import { useEffect, useState } from 'react';
import PrimaryButton from './Button';

const Header = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(true);
  };
  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const checkScrollOffset = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', checkScrollOffset);

    return () => window.removeEventListener('scroll', checkScrollOffset);
  }, []);

  //TODO: Add hover styles and links
  return (
    <header
      className={`fixed top-0 z-10 h-12 w-full transition duration-500 ${
        isScrolled ? 'bg-light-blue-900 shadow-xl' : 'border-b bg-transparent'
      }`}
    >
      <nav className="flex h-12 w-full items-center justify-between shadow-xl">
        <img src="assets/logo.svg" className="ml-4 h-6"></img>
        <div
          className={`fixed flex w-full flex-col text-gray-200 md:relative md:w-2/4 ${
            showMenu ? 'top-0' : '-top-full'
          } transition-all duration-500 md:top-0 md:mx-4 shadow-xl md:shadow-none`}
        >
          <img
            src="assets/logo.svg"
            className="absolute top-2 left-2 h-6 md:hidden"
          ></img>
          <ul
            className="flex flex-col items-center gap-2 bg-light-blue-900
            p-10 md:flex-row md:justify-end md:bg-transparent md:p-0"
          >
            <li className="p-1">Home</li>
            <li className="p-1">Contacto</li>
            <li className="p-1">Portafolio</li>
            <li className="p-1">Servicios</li>
          </ul>
          <button
            className="absolute top-1 right-1 md:hidden"
            onClick={() => handleCloseMenu()}
          >
            <i className="uil uil-times text-xl font-normal text-gray-200"></i>
          </button>
        </div>
        <button className="mr-4 md:hidden" onClick={() => handleShowMenu()}>
          <i className="uil uil-bars text-2xl font-normal text-gray-200"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;
