interface LinkButtonProps {
  children?: React.ReactNode | React.ReactNode[];
  customClass?: string;
  icon?: string;
  link?: string;
  onClick?: () => void;
  target?: string;
  type?: string;
}

const types: { [key: string]: { color: string; hoverColor: string } } = {
  primary: { color: 'bg-terra-blue', hoverColor: 'bg-terra-blue-700' },
  secondary: { color: 'bg-terra-green-700', hoverColor: 'bg-terra-green-900' },
};

const LinkButton = ({
  children,
  customClass = '',
  icon = '',
  link,
  onClick,
  target = '_blank',
  type = 'primary',
}: LinkButtonProps): JSX.Element => {
  const { color, hoverColor } = types[type];

  return (
    <a
      className={`w-fit items-center rounded ${color} py-2
    px-4 text-base font-medium text-gray-50 shadow-sm
    hover:${hoverColor} hover:shadow-lg ${customClass}`}
      href={link}
      target={target}
      onClick={onClick}
    >
      {children}
      {icon && <i className={`uil ${icon} ml-2 text-xl`}></i>}
    </a>
  );
};

export default LinkButton;
