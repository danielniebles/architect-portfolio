interface InputProps {
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  value: string;
}

const Input = ({ label, onChange, type, value }: InputProps) => {
  return (
    <div className="flex flex-col rounded border border-terra-blue bg-terra-blue p-[0.75rem_1rem_0.25rem]">
      <label className="text-base font-normal text-white">{label}</label>
      <input
        type={type}
        className="border-none bg-terra-blue pt-1 pr-2 pb-1 pl-0 text-white outline-none"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
