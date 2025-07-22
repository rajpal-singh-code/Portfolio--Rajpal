import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from '../Component/Home'
import Projects from '../Component/Projects'
import About from '../Component/About'
import Blog from '../Component/Blog'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/'  element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/blog' element={<Blog/>}/>
        </Routes>
    </div>
  )
}

export default Routing
