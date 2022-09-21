import { social } from '../constants/index'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <div id='contact' className="flex flex-col items-center justify-center bg-zinc-700 py-5">
        <div className="relative w-[100px] h-[100px]">
            <Image src="/flc_logo_crop.png" layout="fill" objectFit='cover' alt="club-logo"/>
        </div>
        <a className="text-xl lg:text-2xl font-mono font-bold text-yellow-500">Finite Loop Club</a>
        <p className="text-md lg:text-lg font-mono font-bold text-yellow-500 text-center">
        NMAM Institute of Technology, Nitte, SH1, Karkala, Karnataka, KARKALA, NMAMIT 574110, IN
        </p>
        <ul className="flex flex-row gap-8 py-5">
        {social.map((link, index)=>(
        <li key={index}>
            <Link href={link.link}>
                <a rel="noopener noreferrer "target="_blank" className="text-blue-400 text-3xl lg:text-5xl">
                {link.icon}
                </a>
            </Link>
        </li>
        ))}
        </ul>
    </div>
  )
}
