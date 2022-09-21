import { Data } from '../../data.js';
import {AiFillGithub} from 'react-icons/ai';
import Link from 'next/link.js';
import Image from 'next/image.js';

export default function CardComp() {
  return (
    <>
    <a>Total members: {Data.length}</a>
    <div>
        {Data.map((person, index) => (
            <div key={index}>
                <Image src={`https://github.com/${person.username}.png`} width={100} height={100} alt="profile picture" />
                <h1>{person.name}</h1>
                <AiFillGithub/><a>@{person.username}</a>
                <a>Branch: {person.branch}</a>
                <a>Year: {person.year}</a>
                <Link href={`https://github.com/${person.username}`}>
                  <a>Visit Profile</a>
                </Link>
            </div>
        ))}
    </div>
    </>
  )
}
