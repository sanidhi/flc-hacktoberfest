import { navLinks } from '../constants/index'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
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
