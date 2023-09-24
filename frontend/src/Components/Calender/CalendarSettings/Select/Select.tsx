import React from 'react'

import './Select.scss'

interface SelectProps {
    options: { value: string; label: string }[];
    value: string | null;
    onChange: (value: string | null) => void;
}


const Select = ({ options, value, onChange }: SelectProps) => {
    return (
        <select className='Select' value={value || ''} onChange={(e) => onChange(e.target.value || null)}>
          {options.map((option) => (
            <option className='Select__option' key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
}

export default Select