import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from 'react';
import { useLandingVideoContext } from '@/contexts/LandingVideoContext';
import useIsMobile from '@/hooks/useIsMobile';
import { helix } from 'ldrs';
import { getNextValidAspectRatio } from '@/utils';

helix.register();

const Banner = (): JSX.Element => {
  const { ref, inView } = useInView({ threshold: 1 });
  const { setSectionInView } = useLandingVideoContext();
  const [loading, setLoading] = useState(true);
  const isMobile = useIsMobile();
  const { height } = getNextValidAspectRatio(
    document.documentElement.clientWidth,
    document.documentElement.clientHeight,
    1080
  );
  const videoRef = useRef<HTMLVideoElement>();

  useEffect(() => {
    const video = videoRef.current;

    const handleCanPlay = () => setLoading(false);
    if (!video) return;

    video.addEventListener('canplay', handleCanPlay);
    return () => {
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  useEffect(() => {
    setSectionInView(inView ? 'banner' : '');
  }, [inView]);

  return (
    <section className={`relative w-full `} id="home" ref={ref}>
      <div
        className={`relative flex w-full items-center justify-center bg-[#efefef] text-center`}
        style={{ height }}
      >
        {loading && <l-helix size="45" speed="2.5" color="#007d9a" />}
        <video
          className={`max-h-screen ${isMobile ? 'pt-[76px]' : ''}`}
          muted
          autoPlay
          loop
          ref={videoRef as React.MutableRefObject<HTMLVideoElement>}
        >
          <source src="/assets/banner_video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Banner;