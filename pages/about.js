import Image from "next/image"
import Link from "next/link"
import {SiNextdotjs, SiTailwindcss} from "react-icons/si"

export default function About() {
  return (
      <section className="pt-28 bg-black">
        <div className="mx-auto px-4 py-16 max-w-screen-xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-lg lg:order-last md:mx-auto">
              <Image src='/hacktoberfest.png' width={360} height={450} className="absolute inset-0 w-full h-full" />
            </div>

            <div className="lg:text-xl">
              <p className="lg:mt-4 text-white">
              Finite Loop Club, NMAMIT is organising a session on Kickstart open source journey with Hacktoberfest to promote open source contributions and introduce everyone to Hacktoberfest-2022. 
              <span className="font-bold"> OPEN TO ALL BRANCHES</span> of 3rd and 4th year!
              </p>
              <ul className="text-white list-disc m-5">
                <li>Get introduced to Open source softwares and contributions</li>
                <li>Learn about Hacktoberfest-2022 and procedure to submit pull requests</li>
                <li>Get involved in hands-on mini session on Git & GitHub along the way</li>
              </ul>
              <p className="text-white">
              <h3 className="text-lg lg:text-2xl font-bold">Schedule</h3>
              <ul className="text-white list-disc mx-5">
                <li>Date: 24th Sept, 2022</li>
                <li>Time: 1.00-4.00pm</li>
                <li>Venue: CPP lab, LC block</li>
              </ul>
            </p>
            <div className='flex justify-center m-5 text-white'>
            <Link href="https://forms.gle/e1rtg1E4MQvUi9f67">
                  <div className='relative group'>
                  <div className='absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-red-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300 animate-text'></div>
                  <button className='relative px-7 py-3 bg-black rounded-lg leading-none group-hover:text-gray-200 transition duration-300'>Register Now!</button>
                  </div>
            </Link>
            </div>
            </div>
          </div>
        </div>
      </section>
  )
}
