import React from "react";

type Props = {
  label: string;
  type: string;
  placeholder: string;
  onchange: (value: any) => void;
  name: string;
};

const Input = ({ onchange, type, placeholder, name }: Props) => {
  return (
    <div>
      <input
        className="w-32 lg:border rounded-full py-2 px-3 text-grey-darker  sm:w-64 md:w-64 lg:w-64 xl:w-64 2xl:w-64"
        type={type}
        placeholder={placeholder}
        onChange={onchange}
        name={name}
      />
    </div>
  );
};

export default Input;
