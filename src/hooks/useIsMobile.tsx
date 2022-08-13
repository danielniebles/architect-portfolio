import { useEffect, useState } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mdq = window.matchMedia(`(max-width: ${576}px)`);
    const check = (e: any) => {
      setIsMobile(e.matches);
    };

    check(mdq);
    mdq.onchange = check;

    return () => {
      mdq.onchange = null;
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
