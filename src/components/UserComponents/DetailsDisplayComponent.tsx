import React from "react";

// Type Porps
type DetailsDisplayProps = {
  label: string;
  value: string;
  className?: string;
};

const DetailsDisplayComponent: React.FC<DetailsDisplayProps> = ({
  label,
  value,
  className,
}) => {
  return (
    <div
      className={`flex flex-col lg:flex-row justify-start items-start lg:items-center gap-2 ${className}`}
    >
      <p className="font-semibold text-sm md:text-md underline underline-offset-4">
        {label}:
      </p>
      <span className="text-xs md:text-md">{value}</span>
    </div>
  );
};

export default DetailsDisplayComponent;
