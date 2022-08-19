import NavLinks from './NavLinks'
import Image from 'next/image'
import Hamburguer from './Hamburguer'
import { useState } from 'react'

const MobileNav = () => {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }
  return (
        <>
        <header className="flex flex-row flex-wrap justify-between bg-black px-1 h-24 content-center lg:hidden fixed w-full z-50 top-0">
          <div className="text-white flex justify-center pr-2 w-auto">
            <Image src="/logo-diaz.jpeg" width={100} height={50} />
          </div>
          <nav className="flex justify-center flex-col nowrap content-center items-center">
            <Hamburguer open={open} handleClick={handleClick}/>
            <div className="overflow-hidden">
              <ul className={`fixed w-full h-auto bg-zinc-700 flex nowrap flex-col top-11p z-50 left-0 justify-around content-center text-lg uppercase transition-all duration-500 px-4 py-2 border-y-4 border-amber-400 ${open ? ' translate-x-0' : ' translate-x-full'}`}>
            <NavLinks />
              </ul>
            </div>
          </nav>
          <div className="text-white justify-center pr-2 w-auto hidden">
            <Image src="/logo-nuevo-renault.png" width={50} height={50} />
          </div>
        </header>
        </>
  )
}

export default MobileNav
