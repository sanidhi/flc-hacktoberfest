import { navLinks } from '../constants/index'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className="bg-zinc-800 flex flex-col md:flex-row items-center place-content-between py-3">
      <div className="flex flex-row items-center gap-2">
        <div className='relative w-[100px] min-h-[100px]'>
          <Image src="/flc_logo_crop.png" layout="fill" objectFit="cover" alt="club-logo" className=' hover:border-yellow ease-in transition-all'/>
        </div>
        <p className="text-2xl text-white hover:text-yellow-300 hover:rotate-2 ease-in transition-all font-mono">Finite Loop Club</p>
        {/*Hacktober Fest Logo*/}
      </div>
      <ul className='flex flex-col md:flex-row gap-2 md:gap-12 px-10 text-xl md:text-2xl lg:text-3xl text-white font-mono'>
        {
          navLinks.map((link)=>(
            <li key={link.name} className="hover:rotate-2 hover:text-yellow-300 ease-in transition-all">
              <Link href={link.link}>
                <a>{link.name}</a>
              </Link>
            </li>
          ))
        }
      </ul>
      <hr className="inline-block md:hidden border-yellow-300 "></hr>
    </div>
  )
}
