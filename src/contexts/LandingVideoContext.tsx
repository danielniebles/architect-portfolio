import VideoDrape from '@/components/VideoDrape';
import { createContext, useContext, useEffect, useState } from 'react';

const LandingVideoContext = createContext({ isMainPageVisible: false });

const LandingVideoProvider = ({ children }: any) => {
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
    <LandingVideoContext.Provider value={{ isMainPageVisible }}>
      <div className="relative">
        <VideoDrape isVisible={isMainPageVisible} />
        {children}
      </div>
    </LandingVideoContext.Provider>
  );
};

const useLandingVideoContext = () => {
  return useContext(LandingVideoContext);
};

export { LandingVideoProvider, useLandingVideoContext };
