import Image from 'next/image'
import Link from 'next/link'
const ListaAutos = ({ autos }) => {
  return (
      <div className='grid gap-8 lg:grid-cols-3 md:grid-cols-2 w-90 p-9'>
          { autos.map(({ nombre, href }) => (
            <Link href={`/${href}`} key={nombre}>
                <div className='w-full m-0 transition-all duration-300 bg-gray-100 hover:bg-gray-300 cursor-pointer rounded p-3' >
                  <p className=' text-black text-clamp-title uppercase'>{nombre}</p>
                  <Image src={`/${href}.png`} width={300} height={200} />
                  <a className="relative font-bold bottom-0 left-90 w-max text-clamp-p2 flex flex-nowrap content-center justify-center items-center py-1 px-3 text-white bg-black transition-all duration-300 hover:bg-amber-400 hover:text-black rounded">
                    +
                  </a>
                </div>
            </Link>
          ))}
      </div>
  )
}

export default ListaAutos
