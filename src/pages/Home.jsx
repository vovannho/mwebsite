import React from 'react'
import { Header } from '../components/Header'
import developerImg from '../image/developer.webp';
import lamp from '../image/lamp.svg';
import { Button } from '../components/Button';
import { FaBeer } from 'react-icons/fa';

const Home = () => {
  return (
    <div>
      <Header />
      <div  className='flex justify-between mt-[100px]'>
        <div className='w-1/2'>
          <img className='w-full' src={developerImg} alt="" />
        </div>
        <div className='w-1/2'>
          <h1 className='text-6xl font-semibold mt-[50px]'>
            Turning Vision Into Reality With Code And Design. 
          </h1>
          <div className='flex mt-[30px]'>
            <div className='w-[2/3]'>
              <h3 className='text-xl'>
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </h3>
              <div className='flex space-x-4 mt-4 text-xl'>
                <Button size='small' text = 'resume' icon={FaBeer}/>
                <button>contact</button>
              </div>
            </div>
            <div className='w-[2/3]'>
              <img className='w-full' src= {lamp} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home