import { on } from 'events';
import React from 'react';

type Props = {
    label: string,
    type: string,
    placeholder: string,
    onchange: (value: any) => void
}

const Input = ({ onchange, type, placeholder }: Props ) => {
    
    return (
        <div>
            <div className="flex flex-col lg:flex-row  items-start lg:mb-0">
                
                <input
                    className="w-96 lg:border rounded-full py-2 px-3 text-grey-darker  sm:"
                    type={type}
                    placeholder={placeholder}
                    onChange={onchange}
                />
            </div>
        </div>
    );
}

export default Input;
