import Children from '../interfaces/Children';

const SectionTitle = ({ children }: Children): JSX.Element => {
  return <h2 className="text-lg md:text-xl font-semibold">{children}</h2>;
};

export default SectionTitle;