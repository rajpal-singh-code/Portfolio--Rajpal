import React from 'react'
import profile from '../assets/profile.png'
import LinkPage from './LinkPage'

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
              <p className='opacity-70'>Frontend Developer</p>
        </div>
        <div className=''>
          <h3 className='font-semibold text-xl'>👨‍🎓 Education & Background</h3>
          <p className='py-2 opacity-50 font-thin text-md font-serif md:text-lg'>I am a pre-final year Computer Science student with a strong passion for web development. My academic journey has equipped me with problem-solving skills and a solid foundation in programming and software development.</p>
        </div>
        <div className=''>
          <h3 className='font-semibold text-xl'>💻 Skills & Expertise</h3>
          <p className='py-2 opacity-50 font-thin text-[16.5px] font-serif md:text-lg'>I specialize in frontend development, where I enjoy creating responsive and visually appealing user interfaces. Additionally, I have a basic yet growing understanding of Data Structures and Algorithms (DSA), which helps me write efficient and optimized code.</p>
        </div>
        <div>
          <h3 className='font-semibold text-xl'>🛠️ Tech Stack & Tools</h3>
          <p className='py-2 opacity-50 font-thin text-[16.5px] font-serif md:text-lg'>I am proficient in the following technologies:</p>
          <div className='px-2.5 space-y-4'>
            <p className='text-gray-400 font-thin text-[16px] font-serif md:text-lg'><span className='font-semibold text-gray-200'>☻ Languages:</span> C, C++, and JavaScript</p>
            <p className='text-gray-400 font-thin text-[16px] font-serif md:text-lg'><span className='font-semibold text-gray-200'>☻ Frontend:</span>  HTML, CSS, and React.js</p>
            <p className='text-gray-400 font-thin text-[16px] font-serif md:text-lg'><span className='font-semibold text-gray-200'>☻ Styling:</span>CSS3, Tailwind CSS</p>
            <p className='text-gray-400 font-thin text-[16px] font-serif md:text-lg'><span className='font-semibold text-gray-200'>☻ Version Control:</span>  Git and GitHub</p>
          </div>
        </div>

        <LinkPage/>
      </div>
    </>
  )
}

export default About
