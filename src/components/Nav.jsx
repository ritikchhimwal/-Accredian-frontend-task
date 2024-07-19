import React from 'react'

const Nav = () => {
  return (
    <nav className='bg-white px-40 py-2 flex text-center items-center justify-between'>
        <div className='flex text-center items-center gap-4'>
            <h3 className='text-sm font-bold text-blue-600'>accredian</h3>
            <button className='bg-blue-600 text-white px-4 py-2 rounded'>Courses</button>
        </div>
        <div className='flex gap-8 text-sm'>
        <a href="#" className="text-gray-600">Refer & Earn</a>
          <a href="#" className="text-gray-600">Resources</a>
          <a href="#" className="text-gray-600">About Us</a>
          <a href="#" className="text-gray-600">Login</a>
        </div>
    </nav>
  )
}

export default Nav