import React from 'react'
import logoR from '../assets/logoR.png'
import { NavLink } from 'react-router-dom'


const Navigation = ({setShowmodel}) => {
  return (
    <>
        <div className='fixed top-0 left-0 w-full h-16 bg-black z-50 shadow-md text-white py-3 md:px-42 px-7 flex items-center justify-between '>
            <div className='h-11 md:h-14 w-11 md:w-14 bg-white rounded-full overflow-hidden'>
                <img src={logoR} alt="Logo" className='h-full w-full object-contain' />
            </div>
            <div className='sm:flex gap-8 hidden text-lg opacity-60'>
                <NavLink style={(e) => {return {color: e.isActive? "tomato": "", fontWeight: e.isActive? "bold" : ""}}} to="/">Home</NavLink>
                <NavLink style={(e) => {return {color: e.isActive? "tomato": "", fontWeight: e.isActive? "bold" : ""}}} to="/projects">Projects</NavLink>
                <NavLink style={(e) => {return {color: e.isActive? "tomato": "", fontWeight: e.isActive? "bold" : ""}}} to="/about">About</NavLink>
                <NavLink style={(e) => {return {color: e.isActive? "tomato": "", fontWeight: e.isActive? "bold" : ""}}} to="/blog">Blog</NavLink>
            </div>

            <div className='md:text-3xl text-2xl'>
                <i onClick={() => setShowmodel(true)} class="ri-command-line"></i>
            </div>
        </div>

    </>
  )
}

export default Navigation
