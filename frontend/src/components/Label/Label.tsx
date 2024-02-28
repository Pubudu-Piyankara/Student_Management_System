import React from "react";

type Props = { label: string };

const Label = ({label}: Props) => {
  return (
    <div>
      <div>
        <label className="mb-2 lg:mb-0 lg:mr-4" htmlFor="label">
          {label}
        </label>
      </div>
    </div>
  );
};

export default Label;
