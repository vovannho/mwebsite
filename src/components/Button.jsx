import classNames from 'classnames'
import React from 'react'
import { FaBeer } from 'react-icons/fa';


const sizes= {
    xsmall: 'px-3 py-1.5',
    small: 'px-4 py-2',
    medium: 'px-5 py-2.5'
}

export const Button = ({text, rounded, roundedNone, color = 'red', variant = 'fill', size='small', icon, drop}) => {
  return (
    <button className={classNames('rounded-[5px] p-3  flex items-center',
    sizes[size],
        {
        "rounded-full": rounded,
        "rounded-none": roundedNone,
        "bg-black text-[#fff] hover:bg-white hover:text-black": color === 'red' && variant === 'fill',
        "border border-black text-red-500 hover:bg-red-500": color === 'red' && variant === 'outline',

    })}>
        {text}
        {icon && <div className='mr-2'>{icon}</div>}
    </button>
  )
}
