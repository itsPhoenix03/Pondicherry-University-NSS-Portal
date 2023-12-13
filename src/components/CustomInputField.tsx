//! Custom Input Field

// Props Type
type CustomInputFieldProps = {
  label: string;
  placeholder: string;
  filedName: string;
  className?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CustomInputField = ({
  label,
  placeholder,
  filedName,
  className = "col-span-1",
  handleChange,
}: CustomInputFieldProps) => (
  <div className={`w-full relative mt-4 ${className}`}>
    <input
      type="text"
      name={filedName}
      id="name"
      placeholder={placeholder}
      className="peer placeholder:text-transparent bg-transparent focus:placeholder:text-primary/50 w-full px-4 py-2 outline-none border-b border-b-neutral-200 focus:border-b-accent/50 transition-all duration-300 ease-in-out"
      onChange={(e) => handleChange(e)}
    />
    <label
      htmlFor="name"
      className="absolute left-0 ml-1 -z-10 text-primary/75 -translate-y-3 bg-transparent px-1 duration-100 ease-linear peer-placeholder-shown:translate-y-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-primary/75 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-xs"
    >
      {label}
    </label>
  </div>
);

export default CustomInputField;
