import { navLinks } from '../constants/index'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {
  const [open,setOpen]=useState(false);
  return (
  <div className='shadow-md w-full fixed top-0 left-0 z-[1] bg-white backdrop-filter backdrop-blur-lg bg-opacity-30'>
  <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
  <div className='font-bold text-xl md:text-2xl cursor-pointer flex items-center
  text-white'>
          <div className='relative w-[50px] min-h-[50px] mr-2 pt-2'>
            <Image src="/flc_logo_crop.png" layout="fill" objectFit="cover" alt="club-logo" className=' hover:border-yellow ease-in transition-all'/>
          </div>
    <a href='/'>Finite Loop Club</a>
  </div>

  <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white'>
    {open ? <AiOutlineClose/>:<AiOutlineMenu/>}
  </div>

  <ul className={`bg-white bg-opacity-30 md:bg-white md:bg-opacity-0 md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
    {
      navLinks.map((link)=>(
        <li key={link.name} className='md:ml-8 text-lg md:text-xl md:my-0 my-7'>
          <Link href={link.link}>
            <a className='text-white hover:text-yellow-400 duration-500'>{link.name}</a>
          </Link>
        </li>
      ))
    }
  </ul>
  </div>
  </div>
  )
}