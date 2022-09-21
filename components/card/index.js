import { Data } from '../../data.js';
import {AiFillGithub} from 'react-icons/ai';
import Link from 'next/link.js';
import Image from 'next/image.js';

export default function CardComp() {
  return (
    <>
    <h3 className="text-center bg-zinc-900 text-yellow-500 py-10 text-5xl font-mono font-bold">MEMBERS</h3>
    <div className="flex flex-wrap w-screen min-h-[900px] align-center justify-center bg-zinc-900 pb-10">
        {Data.map((person, index) => (
            <div key={index} className="w-[250px] min-h-[350px] lg:min-w-[300px] lg:min-h-[400px] bg-gray-400 m-5 rounded-xl shadow-md hover:shadow-gray-200 hover:rotate-3">
                <div class="w-full h-48 lg:h-72 relative">
                  <Image src={`https://github.com/${person.username}.png`} layout="fill" objectFit="cover" alt="profile picture" className="rounded-t-xl"/>
                </div>
                <div className="flex flex-col">
                <h1 className="font-mono text-center text-2xl font-bold my-3">{person.name}</h1>
                <div class="flex flex-row gap-2 items-center place-content-center">
                  <AiFillGithub className="w-8 h-8"/>
                  <a className="font-mono text-center text-md">{person.username}</a>
                </div>
                <a className="font-mono text-center text-md">Branch: {person.branch}</a>
                <a className="font-mono text-center text-md">Year: {person.year}</a>
                <Link href={`https://github.com/${person.username}`}>
                  <a className="bg-gray-900 w-1/2 h-10 rounded-lg mx-auto my-4 text-white flex items-center place-content-center font-mono font-bold border-4 border-gray-600 hover:border-yellow-300 hover:-rotate-3 transition-all ease-in">Visit Profile</a>
                </Link>
                </div>
            </div>
        ))}
    </div>
    <div className="bg-yellow-500 h-20 flex items-center place-content-center">
      <a className="text-red-800 hover:text-blue-900 ease-in transition-colors font-mono font-bold text-xl md:text-2xl lg:text-4xl">Total Members So Far: {Data.length}</a>
    </div>
    </>
  )
}
