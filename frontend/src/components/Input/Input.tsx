import React from 'react';

type Props = {
    label: string,
    type: string,
    placeholder: string,
    handleValueMethod: (value: string) => void
}

const Input = ({ label, type, placeholder, handleValueMethod }: Props ) => {
    
    return (
        <div>
            <div className="flex flex-col lg:flex-row mx-auto items-start justify-around lg:mb-0">
                <label className="mb-2 lg:mb-0 lg:mr-4" htmlFor={label}>{label}</label>
                <input
                    className=" lg:border rounded-full py-2 px-3 text-grey-darker w-28 sm:w-96"
                    type={type}
                    placeholder={placeholder}
                    onChange={(e) => handleValueMethod(e.target.value)}
                />
            </div>
        </div>
    );
}

export default Input;
