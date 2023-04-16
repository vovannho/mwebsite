import React from 'react'
import { NavLink} from 'react-router-dom'
import logo from '../image/logo.png';
import {   FaFacebook,FaGoogle,FaGithub ,FaTelegram } from "react-icons/fa";


const navLink = [
    {
        name: 'Home', 
        link: '/'
    },

    {
        name: 'Service', 
        link: '/Service'
    },
    
    {
        name: 'Artical', 
        link: '/Artical'
    },
    {
        name: 'About', 
        link: '/About'
    },
];

const icons = [
  {
    icon: FaFacebook,
    color : 'text-blue-700',
    link : 'https://www.facebook.com/mwebsitegiare'
  },
  {
    icon: FaGoogle,
    color : 'text-red-500'
  },
  {
    icon: FaGithub,
    color : 'text-black'
  },
  {
    icon: FaTelegram,
    color : 'text-blue-500'
  }

]


export const Header = () => {
  return (
    <div className='flex relative justify-between text-black text-[18px] px-3'>
        <nav className='flex items-center xl:gap-x-10 lg:gap-x-4 space-x-3'>
          {navLink.map((item, index)=> {
            return(
                <NavLink  className={({isActive}) => 
                isActive ? 'border-b-2 border-blue-500 font-bold   text-blue-500': ''
                } to={item.link} key={index}>
                        {item.name}
                </NavLink>
            )
          })}
        </nav>
        <div className='absolute  text-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'> 
        <img className='w-[100px] hover:w-[120px] duration-100' src={logo} alt="" />
        </div>
        <ul className='flex items-center xl:gap-x-10 lg:gap-x-4 h-[50px] space-x-3'>
        {icons.map((item,index)=> {
          return(
            <li className=' hover:mb-2 duration-100 ' key={index}>
              <item.icon className={`${item.color} w-[30px] h-[30px]`} />
            </li>
          )})
          }
        </ul>
        {/* <ul className='flex items-center xl:gap-x-10 lg:gap-x-4 h-[50px] space-x-3'>
          <li className=' hover:mb-2 duration-100 ' >
            <FaFacebookF className='text-blue-700 w-[30px] h-[30px]'/>
          </li>
          <li className=' hover:mb-2 duration-100 ' >
            <FaGoogle className='text-red-500 w-[30px] h-[30px]'/>
          </li>
          <li className=' hover:mb-2 duration-100 ' >
            <FaGithub className='text-black w-[30px] h-[30px]'/>
          </li>
          <li className=' hover:mb-2 duration-100 ' >
            <FaTelegram className='text-blue-500 w-[30px] h-[30px]'/>
          </li>
        </ul> */}
        
    </div>
  )
}
 