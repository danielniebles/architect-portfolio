import VideoDrape from '@/components/VideoDrape';
import { createContext, useContext, useEffect, useState } from 'react';

const LandingVideoContext = createContext<{
  isMainPageVisible: boolean;
  sectionInView: string;
  setSectionInView: React.Dispatch<React.SetStateAction<string>>;
}>({
  isMainPageVisible: false,
  sectionInView: '',
  setSectionInView: () => {},
});

const LandingVideoProvider = ({ children }: any) => {
  const [isMainPageVisible, setIsMainPageVisible] = useState(false);
  const [sectionInView, setSectionInView] = useState('');

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
    <LandingVideoContext.Provider
      value={{ isMainPageVisible, sectionInView, setSectionInView }}
    >
      <div className="relative">
        <VideoDrape isVisible={isMainPageVisible} />
        {isMainPageVisible && children}
      </div>
    </LandingVideoContext.Provider>
  );
};

const useLandingVideoContext = () => {
  return useContext(LandingVideoContext);
};

export { LandingVideoProvider, useLandingVideoContext };
