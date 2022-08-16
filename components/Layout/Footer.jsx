import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
        <>
          <div className="w-full bg-black flex wrap justify-around flex-col content-between px-10 py-6 md:flex-row">
              <div className="flex nowrap justify-center flex-col py-3">
                  <Image src={'/icons/icon3.svg'} width={48} height={48} ></Image>
                  <p className="text-clamp-p2 text-white text-center mt-2">Obtené una respuesta<br />en menos de cuatro horas</p>
              </div>
              <div className="flex nowrap justify-center flex-col py-3">
                  <Image src={'/icons/icon2.svg'} width={48} height={48} ></Image>
                  <p className="text-clamp-p2 text-white text-center mt-2">Manejá con confianza <br /> con garantías Renault</p>
              </div>
              <div className="flex nowrap justify-center flex-col py-3">
                  <Image src={'/icons/icon1.svg'} width={48} height={48} ></Image>
                  <p className="text-clamp-p2 text-white text-center mt-2">Hacé la vida más fácil <br /> con MI Renault</p>
              </div>
          </div>
          <div className="w-full bg-white flex wrap justify-around flex-col content-between px-10 py-6 md:flex-row md:items-start">
              <div className="flex nowrap justify-center flex-col py-3 text-clamp-p2 leading-7 items-center">
                  <h5 className="text-clamp-p2 font-bold">Servicio Relación Cliente</h5>
                  <Link href={'contacto'}>Contactanos</Link>
                  <Link href={'sucursales'}>Encontra tu Sucursal </Link>
                  <Link href={'contacto'}>Solicitá Información </Link>
              </div>
              <div className="flex nowrap justify-center flex-col py-3 text-clamp-p2 leading-7 items-center md:items-start md:text-left">
                  <h5 className="text-clamp-p2 font-bold">Acerca de Nosotros</h5>
                  <Link href={'contacto'}>Quiénes Somos</Link>
                  <Link href={'sucursales'}>Trabajá con Nosotros</Link>
              </div>
              <div className="flex nowrap justify-center flex-col py-3 text-clamp-p2 leading-7 items-center md:items-start md:text-left">
                  <h5 className="text-clamp-p2 font-bold">Herramientas</h5>
                  <Link href={'contacto'}>Solicitud de Test Drive</Link>
                  <Link href={'sucursales'}>Solicitá un Asesor</Link>
                  <Link href={'contacto'}>Mi Renault</Link>
              </div>
              <div className="flex nowrap justify-center flex-col py-3 text-clamp-p2 leading-7 items-center md:items-start md:text-left">
                  <h5 className="text-clamp-p2 font-bold">Redes Sociales</h5>
                  <Link href={'contacto'}>facebook</Link>
                  <Link href={'sucursales'}>inst</Link>
                  <Link href={'contacto'}>twitter</Link>
              </div>
          </div>
        </>
  )
}

export default Footer
