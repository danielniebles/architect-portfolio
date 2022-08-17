import Children from '../interfaces/Children';

const PrimaryButton = ({ children, onClick }: Children): JSX.Element => (
  <button className="rounded bg-light-blue-900 py-2 px-4 text-base
    font-medium text-gray-50 shadow-sm hover:bg-light-blue hover:shadow-lg"
    onClick={onClick}>
    {children}
  </button>
);

export default PrimaryButton;
