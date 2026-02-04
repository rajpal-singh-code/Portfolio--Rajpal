import React from 'react'
import profile from '../assets/profile.jpeg'
import LinkPage from './LinkPage'
import resume from '../assets/Resume.pdf'
import Skills from './Skills'

const About = () => {
  return (
    <>
      <div>
        <div className='pt-12 md:pt-16'>
          <h1 className='text-4xl font-bold md:text-7xl '>About</h1>
          <p className='py-2 text-xl md:text-[22px] opacity-70 font-extralight font-serif'>A glimpse into my journey, skills, and passion for web development!</p>
        </div>
        <div className='flex flex-col items-center justify-center py-8'>
          <div className='h-60 w-60 bg-red-50 rounded-full'>
              <img className='overflow-hidden  w-full h-full rounded-full object-cover' src={profile} alt="" />
          </div>
              <h5 className='py-1.5 font-semibold text-2xl'>Rajpal Kumar</h5>
              <p className='opacity-70'>Mern Stack Developer</p>
        </div>
        <div className=''>
          <h3 className='font-semibold text-xl'>👨‍🎓 Education & Background</h3>
          <p className='py-2 opacity-50 font-thin text-md font-serif md:text-lg'>I am a final year Computer Science student with a strong passion for web development. My academic journey has equipped me with problem-solving skills and a solid foundation in programming and software development.</p>
        </div>
        <div className=''>
          <h3 className='font-semibold text-xl'>💻 Skills & Expertise</h3>
          <p className='py-2 pb-6 opacity-50 font-thin text-[16.5px] font-serif md:text-lg'>I specialize in Mern Stack development, where I enjoy creating responsive and visually appealing user interfaces. Additionally, I have a basic yet growing understanding of Data Structures and Algorithms (DSA), which helps me write efficient and optimized code.</p>
        </div>

        <a href={resume} target="_blank" rel="noopener noreferrer"
          className="text-md md:text-lg font-bold border-2 py-6 w-fit px-3  md:px-4 md:py-1 rounded-sm hover:bg-black-hover transition-all flex items-center gap-2">
          <i className="ri-file-text-line text-xl"></i> Resume
        </a>

        <div className='py-10'>
          <h3 className='font-semibold text-xl'>🛠️ Tech Stack & Tools</h3>
          <p className='py-2 opacity-50 font-thin text-[16.5px] font-serif md:text-lg'>I am proficient in the following technologies:</p>
          <Skills/>
        </div>

        <LinkPage/>
      </div>
    </>
  )
}

export default About
