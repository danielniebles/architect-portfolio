interface VideoDrapeProps {
  isVisible: boolean;
}

const VideoDrape = ({ isVisible }: VideoDrapeProps) => (
  <div
    className={`absolute inset-0 flex h-screen items-center justify-center bg-white ${
      isVisible ? 'z-[0] opacity-0' : 'opacity-1 z-[100]'
    } transition duration-300 `}
  >
    <video autoPlay playsInline muted id="landing">
      <source src="/assets/terrazul-animacion-behance.mp4" type="video/mp4" />
    </video>
  </div>
);

export default VideoDrape;
