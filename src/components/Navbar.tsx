"use client"

import Image from 'next/image'
import React from 'react'
import { NavItems } from './NavItems'
import { MobileNav } from './MobileNav'
import { Button } from './ui/button'
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {

  const handleCick = () => {
      
  }

  return (
    <div className=' flex mx-auto w-50% w-screen-fill-xl px-2.5 md:px-20'>
    <div className='invisible lg:visible w-[80%] md:w-full flex justify-end md:justify-between'>
        {/* Logo */}
        <div className='pt-3 w-8'>
            
        </div>
        {/* Menubar */}
        <div className='pt-3'>
            <NavItems/>
        </div>
        <div className='pt-3 '>
            <ConnectButton/>
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