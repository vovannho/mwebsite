import React from 'react'
import { NavLink} from 'react-router-dom'
import logo from '../image/logo.png';

const navLink = [
    {
        name: 'Home', 
        link: '/'
    },

    {
        name: 'About', 
        link: '/About'
    },
    
    {
        name: 'Project', 
        link: '/Project'
    },
    {
        name: 'Actical', 
        link: '/Actical'
    },
];


export const Header = () => {
  return (
    <div className='flex justify-between text-black text-[18px]'>
        
        <nav className='flex items-center gap-x-10'>
          {navLink.map((item, index)=> {
            return(
                <NavLink  className={({isActive}) => 
                isActive ? 'border-b-2 border-black': ''
                } to={item.link} key={index}>
                        {item.name}
                </NavLink>
            )
          })}
        </nav>
        <div className='absolute text-black left-1/2 top-[25px]'>
        <img className='w-[100px] ' src={logo} alt="" />
        </div>
        <div>
          {/* <iconHeaders/> */}
        </div>
    </div>
  )
}
 