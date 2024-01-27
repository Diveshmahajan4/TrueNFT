import Image from 'next/image'
import React from 'react'
import { NavItems } from './NavItems'
import { MobileNav } from './MobileNav'

const Navbar = () => {
  return (
    <div className=' flex mx-auto w-50% w-screen-fill-xl px-2.5 md:px-20'>
    <div className='invisible lg:visible w-[80%] md:w-full flex justify-end md:justify-center'>
        {/* Logo */}
        <div className='pt-3'>
            
        </div>
        {/* Menubar */}
        <div className='pt-3'>
            <NavItems/>
        </div>
    </div>
    {/* Mobile navigation toggle */}
    <div className='pt-3 relative md:hidden'>
            <MobileNav/>
    </div>
    </div>
  )
}

export default Navbar