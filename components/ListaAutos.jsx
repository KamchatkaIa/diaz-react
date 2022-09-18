import Image from 'next/image'
const ListaAutos = ({ autos }) => {
  return (
      <div className='grid gap-4 lg:grid-cols-3 md:grid-cols-2 w-full'>
          { autos.map(({ nombre, precio, href, index }) => (
              <div className='w-full p-0 m-0 hover:bg-gray-300' key={index}>
                <Image src={`/${href}.png`} width={250} height={150} />
                <p className='font-bold text-black'>{nombre}</p>
                <p>Desde ${precio}</p>
              </div>
          ))}
      </div>
  )
}

export default ListaAutos
