import React from 'react'
import { Header } from '../components/Header'
import developerProfile from '../image/developer-pic-2.webp';

const About = () => {
  return (
    <div>
        <Header/>
        <div className='text-6xl text-center mt-[60px]'>
            About for Mwebsite
        </div>
        <div className='grid grid-cols-3 gap-4 mt-6'>
            <div>
                <h3 className='text-2xl font-medium'>BIOGRAPHY</h3>
                <p className='text-lg'>
                    Hi, I'm Mwebsite, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 4 years of experience in the field. I am always looking for new and innovative ways to bring my clients' visions to life.

I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.

Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.</p>

            </div>
            <div className='w-full flex items-center justify-center '>
                <img className=' rounded-xl border-solid p-2 border' src={developerProfile} alt="" />
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default About