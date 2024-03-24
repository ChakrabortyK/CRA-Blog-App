import React, { useId } from 'react'

//TEMPLATE: 
// import { forwardRef } from 'react';
// const MyInput = forwardRef(function MyInput(props, ref) {
//   // ...
// }); 

function Select({
    options,
    label,
    className = '',
    ...props
}, ref) {
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label htmlFor={id} className='block text-sm font-medium text-gray-700'>{label}</label>}
            <select name="" id={id} ref={ref} className={`${className}`} {...props}>
                {options?.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default React.forwardRef(Select);