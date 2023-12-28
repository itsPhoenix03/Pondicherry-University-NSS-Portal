//! Custom Input Field

// Props Type
type CustomInputFieldProps = {
  label: string;
  placeholder: string;
  fieldName: string;
  className?: string;
  labelClassName?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

const CustomInputField = ({
  label,
  placeholder,
  fieldName,
  className = "col-span-1",
  labelClassName = "",
  handleChange,
  required = false,
}: CustomInputFieldProps) => (
  <div className={`w-full relative mt-4 ${className}`}>
    <input
      type={fieldName !== "password" ? "text" : "password"}
      name={fieldName}
      id={fieldName}
      placeholder={placeholder}
      className="peer placeholder:text-transparent bg-transparent focus:placeholder:text-primary/50 w-full px-4 py-2 outline-none border-b border-b-neutral-200 focus:border-b-accent/50 transition-all duration-300 ease-in-out text-xs md:text-base"
      onChange={(e) => handleChange(e)}
      required={required}
    />
    <label
      htmlFor={fieldName}
      className={`absolute text-xs left-0 ml-1 -z-10 text-primary/75 -translate-y-3 bg-transparent px-1 duration-100 ease-linear peer-placeholder-shown:translate-y-3 peer-placeholder-shown:text-[10px] lg:peer-placeholder-shown:text-sm peer-placeholder-shown:text-primary/75 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-xs ${labelClassName}`}
    >
      {label}
    </label>
  </div>
);

export default CustomInputField;
