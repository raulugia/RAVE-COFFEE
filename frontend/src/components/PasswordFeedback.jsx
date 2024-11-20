import React from 'react'

const PasswordFeedback = ({errors, isPassword}) => {
  return (
    <div className='text-sm mb-10'>
        <p>Your password must:</p>
        <ul>
            <li className={!isPassword ? "text-gray-400" : errors.password.includes("long") ? "text-red-600" : "text-green-600"}>Be at least 8 characters long</li>
            <li className={!isPassword ? "text-gray-400" : errors.password.includes("lowercase") ? "text-red-600" : "text-green-600"}>Have at least 1 lowercase letter</li>
            <li className={!isPassword ? "text-gray-400" : errors.password.includes("uppercase") ? "text-red-600" : "text-green-600"}>Have at least 1 uppercase letter</li>
            <li className={!isPassword ? "text-gray-400" : errors.password.includes("number") ? "text-red-600" : "text-green-600"}>Have at least one number</li>
        </ul>
    </div>
  )
}

export default PasswordFeedback