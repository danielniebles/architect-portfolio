import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScrollOffset = () => {
      setShowButton(window.scrollY > 200);
    };
    window.addEventListener('scroll', checkScrollOffset);

    return () => window.removeEventListener('scroll', checkScrollOffset);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`fixed right-8 z-50 transition-all duration-500 ${
        showButton ? 'visible bottom-12 opacity-100' : 'invisible bottom-8 opacity-0'
      }`}
    >
      <button
        className="h-12 w-12 rounded-full bg-terra-blue hover:bg-terra-blue-700 hover:shadow-xl"
        onClick={() => scrollToTop()}
      >
        <i className="uil uil-arrow-up text-2xl text-white"></i>
      </button>
    </div>
  );
};

export default ScrollToTopButton;
