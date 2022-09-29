import { useEffect, useState } from 'react'
import MenuItems from './MenuItems'
import navMenu from '../../json/NavMenu.json'

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
