import { useEffect, useState } from 'react'
import MenuItems from './MenuItems'
const navMenu = [{
  title: 'Vehiculos',
  id: '0',
  href: '#',
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
  }]
}, {
  title: 'Plan Rombo',
  id: '1',
  href: '#',
  submenu: [{
    title: 'Planes Vigentes',
    href: '/planes'
  }]
}, {
  title: 'Usados',
  id: 'renaultSelection',
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
const Navbar = () => {
  const [menu, setMenu] = useState([])
  useEffect(() => {
    setMenu(navMenu)
  }, [navMenu])
  return (
    <>
        {menu.map((item, index) => {
          const depthLevel = 0
          return (
            <MenuItems
              items={item}
              key={index}
              depthLevel={depthLevel}
            />
          )
        })}
    </>
  )
}

export default Navbar
