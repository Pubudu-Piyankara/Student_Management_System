
import React from 'react';

type Props = {
    label: string,
    type: string,
    placeholder: string,
    onchange: (value: any) => void
    name: string
}

const Input = ({ onchange, type, placeholder,name }: Props ) => {
    
    return (
        <div>
            <div className="flex flex-col lg:flex-row  items-start lg:mb-0">
                
                <input
                    className="w-96 lg:border rounded-full py-2 px-3 text-grey-darker  sm:"
                    type={type}
                    placeholder={placeholder}
                    onChange={onchange}
                    name={name}
                />
            </div>
        </div>
    );
}

export default Input;
