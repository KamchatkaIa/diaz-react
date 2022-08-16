import { HiMenuAlt3 } from 'react-icons/hi'
import { CgClose } from 'react-icons/cg'

const Hamburguer = (props) => {
  return (
        <>
            {
                props.open
                  ? (
                    <CgClose className="text-white cursor-pointer" size="40px" onClick={props.handleClick} />
                    )
                  : (
                    <HiMenuAlt3 className="text-white cursor-pointer" size="40px" onClick={props.handleClick} />
                    )
            }
        </>
  )
}

export default Hamburguer
