interface DetailCardProps {
  area: string;
  city: string;
  neighborhood: string;
  responsible: string;
  year: string;
}

//TODO: Check repeating component
const Divider = () => <div className="border-t border-gray-300"></div>;

const DetailCard = ({ responsible, city, neighborhood, area, year }: DetailCardProps) => {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-xl p-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <div className="flex items-center">
        <i className="uil uil-constructor mr-2 text-2xl text-terra-green" />{' '}
        <span>{responsible}</span>
      </div>
      <Divider />
      <div className="flex items-center">
        <i className="uil uil-building mr-2 text-2xl text-terra-green" />{' '}
        <span>{neighborhood}</span>
      </div>
      <Divider />
      <div className="flex items-center">
        <i className="uil uil-map-marker mr-2 text-2xl text-terra-green" />{' '}
        <span>{city}</span>
      </div>
      <Divider />
      <div className="flex items-center">
        <i className="uil uil-expand-arrows mr-2 text-2xl text-terra-green" />{' '}
        <span>{area}</span>
      </div>
      <Divider />
      <div className="flex items-center">
        <i className="uil uil-calender mr-2 text-2xl text-terra-green" />{' '}
        <span>{year}</span>
      </div>
    </div>
  );
};

export default DetailCard;
