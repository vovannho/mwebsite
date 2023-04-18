import classNames from 'classnames'
import React from 'react'
// import { FaBeer } from 'react-icons/fa';


const sizes= {
    xsmall: 'px-3 py-1.5',
    small: 'px-4 py-2',
    medium: 'px-5 py-2.5'
}

export const Button = ({text, rounded, roundedNone, variant = 'fill', size='small', icon}) => {
  return (
    <button className={classNames('rounded-[5px] p-3  flex items-center',
    sizes[size],
        {
        "rounded-full": rounded,
        "rounded-none": roundedNone,
        "bg-black text-[#fff] hover:bg-blue-300 hover:text-black": variant === 'fill',
        "border border-black text-black hover:bg-blue-300": variant === 'outline',
        "bg-green-500  text-[#fff] hover:bg-green-700": variant === 'green',

    })}>
        {text}
        {icon && <div className='ml-2'>{icon}</div>}
    </button>
  )
}
