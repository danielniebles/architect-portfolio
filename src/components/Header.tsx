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

  return (
    <header
      className={`fixed top-0 z-10 h-12 w-full transition duration-500 ${
        isScrolled ? 'bg-light-blue-900' : 'border-b bg-transparent'
      }`}
    >
      <nav className="flex h-12 items-center justify-between">
        <img src="assets/logo.svg" className="h-6 ml-1"></img>
        <div
          className={`fixed flex w-full md:w-1/3 flex-col text-gray-200 md:relative ${
            showMenu ? 'top-0' : '-top-full'
          } transition-all duration-500 md:top-0`}
        >
          <img src="assets/logo.svg" className="absolute top-2 left-2 h-6"></img>
          <ul className="flex flex-col items-center gap-2 bg-light-blue-900 md:bg-transparent p-10 md:flex-row md:justify-between">
            <li className="p-1">Home</li>
            <li className="p-1">Contacto</li>
            <li className="p-1">Portafolio</li>
            <li className="p-1">Servicios</li>
          </ul>
          <button className="absolute top-1 right-1" onClick={() => handleCloseMenu()}>
            <i className="uil uil-times text-xl font-normal text-gray-200"></i>
          </button>
        </div>
        <button className='md:hidden mr-1' onClick={() => handleShowMenu()}>
          <i className="uil uil-bars text-2xl font-normal text-gray-200"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;
