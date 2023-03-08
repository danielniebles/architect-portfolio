import Children from '../interfaces/Children';

const Title = ({ children, customClass }: Children): JSX.Element => {
  return <h2 className={`text-lg md:text-xl font-semibold ${customClass}`}>{children}</h2>;
};

export default Title;