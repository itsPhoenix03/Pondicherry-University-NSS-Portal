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
    <div className={`flex justify-start items-center gap-2 ${className}`}>
      <p className="font-semibold text-md underline underline-offset-4">
        {label}:
      </p>
      <span className="text-md">{value}</span>
    </div>
  );
};

export default DetailsDisplayComponent;
