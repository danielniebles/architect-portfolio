import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useIsMobile from '../hooks/useIsMobile';
import { HashLink } from 'react-router-hash-link';

interface HeaderProps {
  links: {
    displayName: string;
    name: string;
    link: string;
  }[];
  sectionInView: string;
  transparent?: boolean;
}
const LINK_CLASS =
  "p-1 relative after:transition-transform after:duration-300 after:ease-out after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-terra-green after:content-[''] hover:after:origin-bottom-left hover:after:scale-x-100";

const Header = ({
  sectionInView,
  links,
  transparent = true,
}: HeaderProps): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const isMobile = useIsMobile();

  //TODO: make this one method
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
        isScrolled || !transparent
          ? 'bg-white pt-5 text-white shadow-xl'
          : 'pt-7 backdrop-blur-sm '
      }`}
    >
      <nav className="m-[auto] flex items-center justify-between md:max-w-[1240px]">
        <Link to="/">
          <img src="/assets/logo_terra.svg" className="ml-4 h-12"></img>
        </Link>
        <div
          className={`fixed flex w-full flex-col md:relative md:w-2/4 ${
            showMenu ? 'top-0' : '-top-[400%]'
          } text-gray-800 shadow-xl transition-all duration-500 md:top-0 md:mx-4 md:shadow-none`}
        >
          <img
            src="/assets/logo_terra.svg"
            className="absolute top-2 left-2 h-10 md:hidden"
          ></img>
          <ul
            className="flex flex-col items-center gap-2 bg-white
            p-10 md:flex-row md:justify-end md:bg-transparent md:p-0 "
          >
            {links.map(({ displayName, name, link }) => (
              <HashLink
                className={`${LINK_CLASS} ${
                  sectionInView === name && 'after:origin-bottom-left after:scale-x-100'
                } ${
                  isScrolled || isMobile || !transparent
                    ? 'font-semibold text-gray-800'
                    : 'font-semibold text-white'
                }`}
                to={link}
                onClick={() => handleCloseMenu()}
                key={link}
                smooth
              >
                {displayName}
              </HashLink>
            ))}
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
              isScrolled || !transparent ? 'text-gray-800' : 'text-white'
            }`}
          ></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;
