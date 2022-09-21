import { social } from '../constants/index'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <div>
        <div>
            <Image src="/flc_logo_crop.png" width={100} height={100} />
            <a>Finite Loop Club</a>
        </div>
        <p>
        NMAM Institute of Technology, Nitte, SH1, Karkala, Karnataka, KARKALA, NMAMIT 574110, IN
        </p>
        <ul>
        {social.map((link, index)=>(
        <li key={index}>
            <Link href={link.link}>
                <a rel="noopener noreferrer "target="_blank">
                {link.icon}
                </a>
            </Link>
        </li>
        ))}
        </ul>
    </div>
  )
}
