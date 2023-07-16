"use client"
import React, { useState } from 'react'

const navLink = (url: string, label: string) => (
  <li className="mx-4 my-6 md:my-[10px] text-center">
    <a href={url} className="text-xl text-white hover:text-slate-300 duration-300">
      {label}
    </a>
  </li>
)

export default function Navbar() {
  const [navMenu, setMenu] = useState(false);

  return (
    <>
      <nav className="w-full h-[50px] fixed bg-purple-600 z-[100]">
        <img src="./icon.webp" alt="null image source!" className='absolute left-[5%] top-[10px] w-[30px]' />
        <input type="checkbox" id="checkbox" onChange={() => setMenu(navMenu => !navMenu)} />
        <label htmlFor="checkbox" className="absolute right-0 m-[10px] toggle flex md:hidden z-[1]">
          <div className="bars" id="bar1"></div>
          <div className="bars" id="bar2"></div>
          <div className="bars" id="bar3"></div>
        </label>

        <ul className={`
        w-[50%] fixed bg-purple-600 justify-center top-[50px] duration-[0.3s] h-full z-[0] ease-in
      md:relative md:w-full md:flex md:bg-transparent md:translate-x-0 md:top-0 md:justify-center md:right-[0]
      ${navMenu ? 'right-0' : 'right-[-100%]'}`}>
          {navLink('#best', 'Best Seller')}
          {navLink('#product', 'All Product')}
          {navLink('#comment', 'Comment')}
        </ul>

        <a href="#footer" className='absolute right-[15%] md:right-[5%] top-[7px] py-[5px] px-[10px] bg-purple-200 hover:opacity-70 rounded-[5px] duration-300'>Contact Us</a>
      </nav>
    </>
  )
}
