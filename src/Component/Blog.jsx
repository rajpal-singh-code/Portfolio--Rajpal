import React from 'react'
import Blogcard from './Blogcard'
import LinkPage from './LinkPage'

const Blog = () => {
  return (
    <>
      <div>
        <h4 className='pt-15 text-4xl font-sans font-semibold'>Blogs</h4>
        <p className='py-2 text-xl font-sans font-thin'>A platform where I openly share my thoughts, ideas, and experiences.</p>
        <div className='md:flex justify-between items-center pt-13'>
          <Blogcard/>
        </div>
        <LinkPage/>
      </div>
    </>
  )
}

export default Blog
