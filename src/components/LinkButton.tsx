import Children from '../interfaces/Children';

const LinkButton = ({
  children,
  link,
  target = '_blank',
  onClick,
  icon = '',
  customClass,
}: Children): JSX.Element => (
  <a
    className={`w-fit items-center rounded bg-light-blue py-2
    px-4 text-base font-medium text-gray-50 shadow-sm
    hover:bg-light-blue-700 hover:shadow-lg ${customClass}`}
    href={link}
    target={target}
    onClick={onClick}
  >
    {children}
    {icon && <i className={`uil ${icon} ml-2 text-xl`}></i>}
  </a>
);

export default LinkButton;
