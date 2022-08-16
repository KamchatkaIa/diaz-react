import Link from 'next/link'
import Image from 'next/image'
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
  title: 'Renault Selection',
  href: '/usados'
}, {
  title: 'Post Venta',
  href: '/#'
}, {
  title: 'Empresas',
  href: '/#'
}, {
  title: 'Suscribite online',
  href: '/#',
  icon: 'subscribe'
}, {
  title: 'Sucursales',
  href: '/#',
  icon: 'sucursales'
}, {
  title: 'Tienda Online',
  href: '/#',
  icon: 'tienda'
}, {
  title: 'Mi Plan Rombo',
  href: '/#',
  icon: 'sucursales'
}, {
  title: 'My Renault',
  href: '/#',
  icon: 'my-renault'
}
]
const NavLinks = () => {
  return (
          <>
            {navMenu.map((item, index) => {
              return (
                <li key={index} className="text-white py-2 md:flex-col md:py-2">
                  <Link href={item.href}>
                    <a className="text-white flex flex-row content-center justify-start md:flex-col">
                    {item.icon && <Image className="fill-white" src={`/icons/menu/${item.icon}.svg`} width={20} height={20} />}
                     <p className={`md:px-0 ${item.icon ? 'px-5 md:pt-2' : ''}`}>{item.title}</p>
                    </a>
                  </Link>
                </li>
              )
            }
            )}
          </>
  )
}

export default NavLinks
