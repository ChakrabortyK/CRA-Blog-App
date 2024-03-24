import React, { useId } from 'react'


//TEMPLATE: 
// import { forwardRef } from 'react';
// const MyInput = forwardRef(function MyInput(props, ref) {
//   // ...
// }); 

const Input = React.forwardRef(
    ({ label, type = "text", className = '', ...props }, ref) => {

        const id = useId();
        return (
            <div className="w-full">
                {label && <label className="block text-sm font-medium text-gray-700" htmlFor={id}>{label}</label>}
                <input type={type} className={`${className}`} ref={ref} {...props} id={id} />
            </div>
        )
    })
export default Input