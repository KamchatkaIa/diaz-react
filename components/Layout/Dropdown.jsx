import MenuItems from './MenuItems'
const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1
  const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : ''
  return (
    <div className={`dropdown block md:fixed ${dropdownClass} ${dropdown ? 'show' : ''} bg-white top-16 left-0 w-full h-max mt-2.5 border-2 border-zinc-600 lg:border-none`}>
      <ul className="lg:w-1/6 w-full md:flex-col lg:border-r-2 lg:hover:border-amber-400 lg:border-amber-400 lg:hover:transition-all lg:hover:duration-300 lg:bg-white bg-zinc-700">
        {submenus.map((submenu, index) => (
            <MenuItems
              items={submenu}
              key={index}
              depthLevel={depthLevel}
              submenu={true}
            />
        ))}
      </ul>
    </div>
  )
}

export default Dropdown
