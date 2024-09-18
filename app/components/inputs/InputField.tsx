import React from 'react';

interface InputFieldProps {
    type?: string;
    id: string;
    name: string;
    value?: string | number;  // Accept both string and number
    placeholder?: string;
    required?: boolean;
    dropdownOptions?: string[];  // New prop for dropdown options
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
    type = 'text',
    id,
    name,
    value,
    placeholder,
    required = false,
    dropdownOptions,
    onChange,
}) => {
    return (
        <>
            {dropdownOptions ? (
                <select
                    id={id}
                    name={name}
                    value={value}
                    required={required}
                    onChange={onChange}
                    className="w-full border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100"
                >
                    <option value="" disabled>
                        {placeholder}
                    </option>
                    {dropdownOptions.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    type={type}
                    id={id}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    required={required}
                    onChange={onChange}
                    className="w-full border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100"
                />
            )}
        </>
    );
};

export default InputField;
