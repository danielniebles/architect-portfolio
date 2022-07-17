import Children from '../interfaces/Children';

const MainTitle = ({ children, customClass }: Children): JSX.Element => {
  return (
    <h1 className={`text-3xl font-semibold md:text-5xl ${customClass}`}>{children}</h1>
  );
};

export default MainTitle;
