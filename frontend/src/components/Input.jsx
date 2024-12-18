import React from 'react'

const Input = ({type, name, onChange, onBlur, placeholder, errors=[], label="", ...props}) => {
  return (
    <div>
      <label htmlFor={label} className='sr-only'>{label}</label>
        <input type={type} name={name} placeholder={placeholder} 
            onChange={onChange} onBlur={onBlur}
            className={`border border-gray-200 px-3 py-3 w-full ${errors.length > 0 ? "border-red-600" : "border-gray-200"}`}
            id={label}
            {...props}
        />
        {
            errors.map((error, index) => (
                <p key={index+error} className='text-red-600 font-fira text-xs mt-1'>{error}</p>
            ))
        }
    </div>
  )
}

export default Input