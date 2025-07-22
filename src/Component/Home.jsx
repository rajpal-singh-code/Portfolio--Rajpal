import React from 'react'
import { NavLink } from 'react-router-dom'
import ProjectCard from './ProjectCard'
import Blogcard from './Blogcard'
import LinkPage from './LinkPage'


const Home = () => {
  return (
    <>
        <div>
            <div className='pt-15 text-[33px] font-semibold md:text-6xl md:pt-25 leading-tight'>
                <h1 className='mb-1 md:py-1'>Hi, I'm <span className='text-blue-500'>Rajpal Kumar</span></h1>
                <h1 className='mt-0'>Frontend Developer</h1>
            </div>
            <div className='text-xl font-light py-6 leading-tight opacity-80 md:text-3xl'>
                <p>I craft fantastic things with code. I also write about those things.</p>
            </div>
            <div className='flex justify-between text-xl md:font-semibold'>
                <NavLink className="border-2 md:px-4 px-3 py-1 md:py-3 rounded-sm" to="/about">Discover More <i class="ri-arrow-right-s-line"></i></NavLink>
            </div>
            
            <div className='pt-10 md:pt-12 md:pb-7'>
                <h1 className='text-xl font-semibold'>Tech Stack</h1>
                <div className='text-3xl gap-2 py-3 flex md:text-4xl md:gap-3'>
                    <i class="ri-html5-fill"></i>
                    <i class="ri-css3-fill"></i>
                    <i class="ri-javascript-fill"></i>
                    <i class="ri-reactjs-fill"></i>
                    <i class="ri-tailwind-css-fill"></i>
                    <i class="ri-git-merge-line"></i>
                </div>
            </div>

            <div className='py-8 leading-10'>
                <h5 className='text-[18px] font-semibold text-teal-600'>Highlighted Projects</h5>
                <h3 className='text-[25px] font-serif'>What I've been working on</h3>
            </div>

            <div className='flex flex-col gap-5 md:flex-row md:justify-between md:flex-wrap'>
                <ProjectCard/>
            </div>

            <div className='flex justify-center text-xl md:font-semibold py-10 '>
                <NavLink className="border-2 px-3 py-1 md:py-3 rounded-sm text-[19px]" to="/projects">See all Projects <i class="ri-arrow-right-s-line"></i></NavLink>
            </div>

            <h3 className='text-2xl py-3 text-blue-600'>writing</h3>
            <h2 className='text-[24px] font-semibold font-sans'>Latest Posts</h2>
            <div className='md:flex justify-between items-center'>
                <Blogcard/>
            </div>
            <div className='flex justify-center text-xl md:font-semibold py-10 '>
                <NavLink className="border-2 px-3 py-1 md:py-3 rounded-sm text-[19px] font-sans" to="/blog">See all Posts <i class="ri-arrow-right-s-line"></i></NavLink>
            </div>

            <div className='bg-gray-900 p-5 rounded-xl'>
                <div className='flex gap-3 text-[25px] font-semibold font-sans'>
                    <i className="ri-shake-hands-fill bg-gray-600 p-1.5 rounded-full"></i>
                    <h4>Let's work together</h4>
                </div>
                <p className='py-3 text-xl opacity-55 pb-5 md:text-2xl'>Feel free to reach out! Whether you have a project idea, collaboration proposal, or just want to say hello, drop me a message. Let’s build something amazing together!</p>
                <a className="border-2 px-3 py-1 md:py-3 rounded-sm text-[19px]" href="https://t.me/Rajpal_ku" target='_blank'>say hello  <i class="ri-arrow-right-s-line"></i> </a>
            </div>

            <LinkPage/>

        </div>
    </>
  )
}

export default Home
