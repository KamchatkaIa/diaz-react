import Image from 'next/image'
import Link from 'next/link'
const ListaAutosTabs = ({ autos }) => {
  return (
      <div className='grid gap-4 lg:grid-cols-3 md:grid-cols-2 w-full'>
          { autos.map(({ nombre, precio, href }) => (
            <Link href={`/${href}`} key={nombre}>
                <div className='w-full p-0 m-0 transition-all duration-300 hover:bg-gray-300 cursor-pointer rounded' >
                  <Image src={`/${href}.png`} width={300} height={200} />
                  <p className='font-bold text-black'>{nombre}</p>
                  <p>Desde ${precio}</p>
                </div>
            </Link>
          ))}
      </div>
  )
}

export default ListaAutosTabs
