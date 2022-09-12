import { useEffect, useState } from 'react'
import MenuItems from './MenuItems'
const navMenu = [{
  title: 'Vehículos',
  id: '0',
  href: '#',
  submenu: [{
    title: 'Automoviles',
    href: '#',
    submenu: [
      {
        auto: 'Captur',
        href: '/automoviles/captur',
        img: '/automoviles/captur'
      },
      {
        auto: 'Logan',
        href: '/automoviles/logan',
        img: '/automoviles/logan'
      },
      {
        auto: 'Kangoo',
        href: '/automoviles/kangoo',
        img: '/automoviles/kangoo'
      },
      {
        auto: 'Sandero',
        href: '/automoviles/sandero',
        img: '/automoviles/sandero'
      },
      {
        auto: 'Stepway',
        href: '/automoviles/stepway',
        img: '/automoviles/stepway'
      },
      {
        auto: 'Duster',
        href: '/automoviles/duster',
        img: '/automoviles/duster'
      },
      {
        auto: 'Koleos',
        href: '/automoviles/koleos',
        img: '/automoviles/koleos'
      }]
  },
  {
    title: 'Utilitarios',
    href: '/utilitarios',
    submenu: [
      {
        auto: 'Kangoo Express',
        href: '/utilitarios/kangoo-express',
        img: '/utilitarios/kangoo-express'
      },
      {
        auto: 'Master Furgón',
        href: '/utilitarios/master-furgon',
        img: '/utilitarios/master-furgon'
      },
      {
        auto: 'Master Minibús',
        href: '/utilitarios/kangoo-express',
        img: '/utilitarios/kangoo-express'
      },
      {
        auto: 'Nueva Oroch',
        href: '/utilitarios/nueva-oroch',
        img: '/utilitarios/nueva-oroch'
      },
      {
        auto: 'Alaskan',
        href: '/utilitarios/alaskan',
        img: '/utilitarios/alaskan'
      }
    ]
  }, {
    title: 'Electricos',
    href: '/electricos',
    submenu: [
      {
        auto: 'Kangoo ZE',
        href: '/electricos/kangoo-ze',
        img: '/electricos/kangoo-ze'
      }
    ]
  }, {
    title: 'Pick Ups',
    href: '/pickups',
    submenu: [
      {
        auto: 'Nueva Oroch',
        href: '/pickups/nueva-oroch',
        img: '/pickups/nueva-oroch'
      },
      {
        auto: 'Alaskan',
        href: '/pickups/alaskan',
        img: '/pickups/alaskan'
      }
    ]
  }]
}, {
  title: 'Plan Rombo',
  id: '1',
  href: '#',
  submenu: [
    {
      title: 'Planes Vigentes',
      href: '/planes',
      submenu: [{}]
    },
    {
      title: 'Imprimí tu Cuota',
      href: '/imprimi-tu-cuota',
      submenu: [{}]
    },
    {
      title: 'Actos de Adjudicación',
      href: '/actos-de-adjudicacion',
      submenu: [
        {
          title: 'Resultados de Adjudicación',
          href: '/resultados-adjudicacion'
        }
      ]
    },
    {
      title: 'Información General',
      href: '/informacion-general',
      submenu: [{}]
    }
  ]
}, {
  title: 'Usados',
  id: 'renaultSelection',
  href: '/usados'
}, {
  title: 'Post Venta',
  href: '/post-venta',
  submenu: [
    {
      title: 'Promociones',
      href: '/promociones',
      submenu: [{}]
    },
    {
      title: 'Accesorios',
      href: '/accesorios',
      submenu: [{}]
    },
    {
      title: 'Talleres',
      href: '/talleres',
      submenu: [{}]
    },
    {
      title: 'Renault Minuto',
      href: '/renault-minuto',
      submenu: [{}]
    },
    {
      title: 'Turnos Online',
      href: '/turnos-online',
      submenu: [{}]
    }
  ]
}, {
  title: 'Empresas',
  href: '/#',
  submenu: [
    {
      title: 'Renault PRO+',
      href: '/renault-pro',
      submenu: [{}]
    },
    {
      title: 'Ventas Coorporativas',
      href: '/ventas-coorporativas',
      submenu: [{}]
    },
    {
      title: 'Transformaciones',
      href: '/transformaciones',
      submenu: [{}]
    },
    {
      title: 'Financiación',
      href: '/financiación',
      submenu: [{}]
    },
    {
      title: 'Test Drive',
      href: '/test-drive',
      submenu: [{}]
    },
    {
      title: 'Ventas Especiales',
      href: '/ventas-especiales',
      submenu: [{}]
    }
  ]
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
              subitems={item.submenu}
              key={index}
              depthLevel={depthLevel}
            />
          )
        })}
    </>
  )
}

export default Navbar
