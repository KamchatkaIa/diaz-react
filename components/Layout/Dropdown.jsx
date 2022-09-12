import { useState, useEffect } from 'react'
import MenuItems from './MenuItems'
const Dropdown = ({ submenus, dropdown, depthLevel, subitems }) => {
  depthLevel = depthLevel + 1
  const [autos, setAutos] = useState(true)
  const [listaAutos, setListaAutos] = useState([])
  useEffect(() => {
    if (subitems !== undefined && autos === true && subitems[0].submenu !== 'false') {
      for (let i = 0; i < subitems.length; i++) {
        if (subitems[i].submenu !== undefined && subitems[i].submenu !== 'false') {
          const subAutos = subitems[i].submenu
          setListaAutos(subAutos)
          setAutos(false)
        }
      }
    }
  }, [subitems])
  const dropdownClass = depthLevel > 1 && !autos ? 'dropdown-submenu' : depthLevel > 1 && autos ? 'dropdown-submenu-autos' : ''
  return (
      <div className={`${autos ? 'ml-0 w-full h-4/5' : 'bg-white top-16 left-0 w-full h-max mt-2.5 border-2 border-zinc-600 lg:border-none block md:fixed'} dropdown ${dropdownClass} ${dropdown && !autos ? 'show' : dropdown && autos ? 'show-autos' : ''}`}>
      <ul className={`${autos ? 'border-r-0 border-l-2 border-amber-400 w-max grid grid-cols-4 gap-3' : 'lg:border-r-2 lg:hover:border-amber-400 lg:border-amber-400 lg:w-1/6 w-full md:flex-col  lg:hover:transition-all lg:hover:duration-300 lg:bg-white bg-gray-700'}  `}>
        {submenus.map((submenu, index) => (
          <MenuItems
              items={submenu}
              key={index}
              depthLevel={depthLevel}
              condition={true}
              autos={autos}
              listaAutos={listaAutos}
            />
        ))}
      </ul>
    </div>
  )
}

export default Dropdown
