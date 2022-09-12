import Image from 'next/image'
import Link from 'next/link'
import Navbar from './Navbar'
import Hamburguer from './Hamburguer'
import { useState } from 'react'

const Nav = () => {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }
  return (
        <header className="flex flex-row flex-wrap justify-between bg-black px-1 lg:h-20 h-24 content-center fixed w-full z-50 top-0 lg:flex">
          <div className="text-white flex justify-center pr-2 w-auto">
            <Link href='/'><Image src="/logo-diaz.jpeg" width={100} height={50} /></Link>
          </div>
          <nav className="flex items-center lg:w-10/12 justify-center flex-col nowrap content-center">
            <ul className="flex-row flex-nowrap justify-around items-end content-center w-full text-sm hidden lg:flex">
              <Navbar />
            </ul>
            <div className="lg:hidden">
              <Hamburguer open={open} handleClick={handleClick}/>
            </div>
            <div className="overflow-hidden lg:hidden">
              <ul className={`fixed w-full h-auto bg-gray-700 flex nowrap flex-col top-11p z-50 left-0 justify-around content-center text-lg uppercase transition-all duration-500 px-4 py-2 border-y-4 border-amber-400 ${open ? ' translate-x-0' : ' translate-x-full'}`}>
            <Navbar />
              </ul>
            </div>
          </nav>
          <div className="text-white lg:flex justify-center pr-2 w-auto hidden">
            <Image src="/logo-nuevo-renault.png" width={50} height={50} />
          </div>
        </header>
  )
}

export default Nav
