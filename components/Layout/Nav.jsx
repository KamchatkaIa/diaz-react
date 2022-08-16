import Image from 'next/image'
import Link from 'next/link'
const navMenu = [{
  title: 'Vehiculos',
  href: '/#',
  submenu: [{
    title: 'Automoviles',
    href: '/automoviles'
  }, {
    title: 'Utilitarios',
    href: '/utilitarios'
  }, {
    title: 'Electricos',
    href: '/Electricos'
  }, {
    title: 'Pick Ups',
    href: '/pickups'
  }, {
    title: 'Sports',
    href: '/sports'
  }
  ]
}, {
  title: 'Plan Rombo',
  href: '/#'
}, {
  title: 'Renault selection',
  href: '/usados'
}, {
  title: 'Post Venta',
  href: '/#'
}, {
  title: 'Empresas',
  href: '/#'
}, {
  title: 'Suscribite online',
  href: '/#'
}, {
  title: 'Sucursales',
  href: '/#'
}, {
  title: 'Tienda Online',
  href: '/#'
}, {
  title: 'Mi Plan Rombo',
  href: '/#'
}, {
  title: 'My Renault',
  href: '/#'
}
]

const Nav = () => {
  return (
        <header className="flex flex-row flex-wrap justify-between bg-black px-1 h-20 content-center">
          <div className="text-white flex justify-center pr-2 w-auto">
            <Image src="/logo-diaz.jpeg" width={100} height={50} />
          </div>
          <ul className="flex flex-row flex-nowrap justify-around w-10/12 content-center text-sm">
            {navMenu.map((item, index) => {
              return (
                <li key={index} className="flex flex-col content-center justify-center text-white">
                  <Link href={item.href}>{item.title}</Link>
                </li>
              )
            }
            )}
          </ul>
          <div className="text-white flex justify-center pr-2 w-auto">
            <Image src="/logo-nuevo-renault.png" width={50} height={50} />
          </div>
        </header>
  )
}

export default Nav
