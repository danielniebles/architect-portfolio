import Children from '../interfaces/Children';

const SectionTitle = ({ children, customClass }: Children): JSX.Element => {
  return <h2 className={`text-2xl md:text-4xl font-semibold ${customClass}`}>{children}</h2>;
};

export default SectionTitle;