import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='sticky top-5 w-full h-fit flex justify-center z-20'>
        <ul className='flex flex-wrap gap-8 px-2 py-1 rounded-[60px] items-center text-[20px] font-extrabold w-fit bg-black border-white border text-white'>
            <Link href="/" className='cursor-pointer px-4 py-2 text-black rounded-[50px] bg-white'>Home</Link>
            <Link href="/explore" className='cursor-pointer'>Explore</Link>
            <Link href="/upload" className='cursor-pointer'>Upload</Link>
        </ul>
    </div>
  )
}

export default Navbar