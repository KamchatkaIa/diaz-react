import { useState, useEffect, useRef } from 'react'
import Dropdown from './Dropdown'
import Link from 'next/link'
import Image from 'next/image'

const MenuItems = ({ items, depthLevel, condition, subitems, autos, listaAutos }) => {
  const [dropdown, setDropdown] = useState(false)
  const ref = useRef()
  // console.log(subitems[0].subitem)
  useEffect(() => {
    const handler = (event) => {
      if (
        dropdown &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setDropdown(false)
      }
    }
    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [dropdown])

  const onMouseEnter = () => {
    if (typeof window !== 'undefined') {
      window.innerWidth > 960 && setDropdown(true)
    }
  }

  const onMouseLeave = () => {
    if (typeof window !== 'undefined') {
      window.innerWidth > 960 && setDropdown(false)
    }
  }

  const closeDropdown = () => {
    dropdown && setDropdown(false)
  }
  console.log(listaAutos)
  return (
    <li
      className={`${condition ? 'lg:text-black text-white text-clamp-p2 md:px-4 md:py-4' : 'text-white'} ${autos ? 'bg-gray-700 top-0 -mt-2 absolute border-none' : 'lg:hover:border-amber-400'} py-2 md:flex-col lg:border-b-2 lg:border-transparent transition-all duration-300  lg:hover:transition-all lg:hover:duration-300 relative`}
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.href && items.submenu
        ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            { typeof window !== 'undefined' && window.innerWidth < 960 && depthLevel === 0
              ? (
                  items.title
                )
              : (
              <Link href={items.href}>{items.title}</Link>
                )}

            {depthLevel > 0 &&
            window.innerWidth < 960
              ? null
              : depthLevel > 0 &&
              window.innerWidth > 960
                ? (
              <span>&raquo;</span>
                  )
                : (
              <span className="arrow" />
                  )}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
            subitems={subitems}
          />
        </>
          )
        : !items.href && items.submenu
            ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{' '}
            {depthLevel > 0
              ? (
              <span>&raquo;</span>
                )
              : (
              <span className="arrow" />
                )}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
              )
            : (
              <>
                <Link href={items.href ? items.href : ''}>
                      <a className="flex flex-row content-center justify-start md:flex-col">
                      {items.icon && <Image className="fill-white" src={`/icons/menu/${items.icon}.svg`} width={20} height={20} />}
                      <p className={`md:px-0 ${items.icon ? 'px-5 md:pt-2' : ''}${condition ? 'lg:text-black text-white text-clamp-p2 md:pr-8 md:py-2' : ''}`}>{items.title ? items.title : items.auto ? items.auto : null}</p>
                      </a>
                </Link>
              </>
              )}
    </li>
  )
}

export default MenuItems
