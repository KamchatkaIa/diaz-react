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
              <div className="flex nowrap justify-center flex-col py-3 text-clamp-p2 leading-7 items-center md:items-start md:text-left">
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
                  <div className="flex flex-row nowrap gap-x-3 mt-3">
                    <a href={'https://www.facebook.com/DiazRenault/'} target="_blank" rel="noopener noreferrer"><Image src={'/icons/facebook.svg'} width={30} height={30} /></a>
                    <a href={'https://twitter.com/diazrenault'} target="_blank" rel="noopener noreferrer"><Image src={'/icons/twitter.svg'} width={30} height={30} /></a>
                    <a href={'https://www.instagram.com/renaultdiaz/'} target="_blank" rel="noopener noreferrer"><Image src={'/icons/instagram.svg'} width={30} height={30} /></a>
                    <a href={'https://www.youtube.com/channel/UC-Nufue3LqvO3r7HXqfVBRw'} target="_blank" rel="noopener noreferrer"><Image src={'/icons/youtube.svg'} width={30} height={30} /></a>
                    <a href={'https://www.tiendadiazsa.com/'} target="_blank" rel="noopener noreferrer"><Image src={'/icons/buy.svg'} width={30} height={30} /></a>
                    <a href={'contacto'} target="_blank" rel="noopener noreferrer"><Image src={'/icons/mail.svg'} width={30} height={30} /></a>
                  </div>
              </div>
          </div>
          <div className="w-full bg-white text-gray-500 text-clamp-p2 text-center flex wrap justify-around flex-col content-between px-10 py-3 md:flex-row md:items-start md:justify-center border-t">
            <p>Copyright 2017 - 2022
            <Link href={'terminos-legales'}> Términos Legales.</Link>
            </p>
            <p>Todos los derechos reservados.</p>
          </div>
        </>
  )
}

export default Footer
