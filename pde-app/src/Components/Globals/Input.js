import React from 'react';

const Input = ({type,label,value,defaultValue,placeholder,onChange}) => {
    return (
        <label>
            {label}
            <input type={type} 
            value={value} 
            onChange={onChange} 
            defaultValue={defaultValue}
            placeholder={placeholder}/>
        </label>
    );
};

export default Input;