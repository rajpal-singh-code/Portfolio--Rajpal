import React from 'react'
import { NavLink } from 'react-router-dom'

const LinkPage = () => {
  return (
    <>
        <div>
            <div className='flex gap-10 pt-10 justify-between'>
                <div className='flex flex-col py-10 opacity-50 pl-10 md:px-50 text-xl '>
                    <NavLink className=" px-3 py-1 " to="/">Home</NavLink>
                    <NavLink className=" px-3 py-1 " to="/projects">Projects</NavLink>
                    <NavLink className=" px-3 py-1 " to="/about">About</NavLink>
                    <NavLink className=" px-3 py-1 " to="/blog">Blog</NavLink>
                </div>
                <div className='flex flex-col text-xl opacity-50 py-10 md:px-55 pr-16 '>
                    <a className='py-1' href="https://www.linkedin.com/in/rajpal-ku89/" target='_blank'>Linkedin</a>
                    <a className='py-1' href="https://github.com/rajpal-singh-code" target='_blank'>GitHub</a>
                    <a className='py-1' href="https://t.me/Rajpal_ku" target='_blank'>Telegram</a>
                </div>
            </div>
            <p className='opacity-95'>©2025 Rajpal... Bihar, India</p>
        </div>
    </>
  )
}

export default LinkPage
