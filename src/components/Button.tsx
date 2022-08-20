import Children from '../interfaces/Children';

const PrimaryButton = ({ children, onClick, customClass }: Children): JSX.Element => (
  <button
    className={`w-fit rounded bg-light-blue-900 py-2 px-4
    text-base font-medium text-gray-50 shadow-sm hover:bg-light-blue hover:shadow-lg ${customClass}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default PrimaryButton;
