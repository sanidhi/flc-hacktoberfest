import { navLinks } from '../constants/index'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div>
      <Image src="/flc_logo_crop.png" alt="logo" width={100} height={100} />
      <a>Finite Loop Club</a>
      <ul>
        {
          navLinks.map((link)=>(
            <li key={link.name}>
              <Link href={link.link}>
                <a>{link.name}</a>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
