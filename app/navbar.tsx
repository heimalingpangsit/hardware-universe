"use client"
import React, { useState } from 'react'
import Image from 'next/image'

const navLink = (url: string, label: string) => (
  <li className="mx-4 my-6 md:my-[10px] text-center">
    <a href={url} className="text-xl text-white hover:text-slate-500 duration-300">
      {label}
    </a>
  </li>
)

export default function Navbar() {
  const [navMenu, setMenu] = useState(false);

  return (
    <>
      <nav className="w-full h-[50px] stick bg-purple-500">
        <Image src={'./icon.webp'} alt="null image source!" width={500} height={500} className='absolute left-[5%] top-[10px] w-[30px]' />
        <input type="checkbox" id="checkbox" onChange={() => setMenu(navMenu => !navMenu)} />
        <label htmlFor="checkbox" className="absolute right-0 m-[10px] toggle flex md:hidden">
          <div className="bars" id="bar1"></div>
          <div className="bars" id="bar2"></div>
          <div className="bars" id="bar3"></div>
        </label>

        <ul className={`
      w-full bg-purple-500 justify-center top-[50px] absolute duration-[0.3s]
      md:relative md:flex md:bg-transparent md:translate-x-0 md:top-0 md:justify-center md:left-[0]
      ${navMenu ? 'left-[0]' : 'left-[100%]'}`}>
          {navLink('#best', 'Best Seller')}
          {navLink('#product', 'All Product')}
          {navLink('#comment', 'Comment')}
        </ul>

        <a href="#footer" className='absolute right-[10%] md:right-[5%] top-[7px] py-[5px] px-[10px] bg-purple-200 hover:opacity-70 rounded-[5px] duration-300'>Contact Us</a>
      </nav>
    </>
  )
}
