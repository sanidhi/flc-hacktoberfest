import { social } from '../constants/index'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-zinc-900" id='contact'>
    <div className="max-w-5xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
            <div className="relative w-[100px] h-[100px]">
                <Image src="/flc_logo_crop.png" layout="fill" objectFit='cover' alt="club-logo"/>
            </div>
            <a className="ml-3 text-lg md:text-xl cursor-pointer flex items-center text-white">Finite Loop Club</a>
        </div>

        <p className="max-w-md mx-auto mt-6 leading-relaxed text-center text-white">
        NMAM Institute of Technology, Nitte, SH1, Karkala, Karnataka, KARKALA, NMAMIT 574110, IN
        </p>

        <ul className="flex justify-center mt-12 gap-6 md:gap-8">
        {social.map((link, index)=>(
        <li key={index}>
            <Link href={link.link}>
                <a
                rel="noopener noreferrer"
                target="_blank"
                className="text-white transition hover:text-gray-300 text-3xl"
                >
                {link.icon}
                </a>
            </Link>
        </li>
        ))}
        </ul>
    </div>
    </footer>
  )
}