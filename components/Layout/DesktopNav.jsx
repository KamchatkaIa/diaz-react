import Image from 'next/image'
import NavLinks from './NavLinks'

const Nav = () => {
  return (
        <header className="flex-row flex-wrap justify-between bg-black px-1 h-20 content-center hidden lg:flex">
          <div className="text-white flex justify-center pr-2 w-auto">
            <Image src="/logo-diaz.jpeg" width={100} height={50} />
          </div>
          <nav className="flex items-center w-10/12">
            <ul className="flex flex-row flex-nowrap justify-around items-end content-center w-full text-sm ">
              <NavLinks />
            </ul>
          </nav>
          <div className="text-white flex justify-center pr-2 w-auto">
            <Image src="/logo-nuevo-renault.png" width={50} height={50} />
          </div>
        </header>
  )
}

export default Nav
