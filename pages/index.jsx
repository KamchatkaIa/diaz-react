import Tabs from '../components/Tabs/Tabs'
import Layout from '../components/Layout/Layout'
import Carousel from '../components/Carousel'
import Link from 'next/link'
import IconTestDrive from '../components/icons/icon-test-drive'
import IconAsesor from '../components/icons/icon-asesor'
import IconArrow from '../components/icons/icon-arrow'

export default function Home () {
  const images = [
    { img: '1', title: 'Compra tu Usado', p: 'Los mejores precios del Mercado' },
    { img: '2', link: 'usados', pBoton: 'Comprar2', title: 'Compra tu Usado 2', p: 'Los mejores precios del Mercado 2' },
    { img: '3', link: 'usados', pBoton: 'Comprar3', title: 'Compra tu Usado 3', p: 'Los mejores precios del Mercado 3' }
  ]
  return (
    <Layout title="Home" description="F. O. Diaz S.A., Concesionario Oficial Renault. Venta de autos 0km y planes de ahorro Plan Rombo. Accesorios y Service Oficial para tu Renault. Test Drive.">
      <div className="mt-24 lg:mt-20">
        <Carousel images={images} autoPlay={true} showButtons={true} interval={2000}/>
      </div>
      <div className="flex flex-col text-center flex-nowrap content-center justify-center items-center py-10">
        <h3 className="text-clamp-title font-bold">¡INGRESÁ AL MUNDO DE LOS VEHÍCULOS RENAULT!</h3>
        <div className="w-4/5 my-10">
          <Tabs />
        </div>
        <div className="w-3/4 my-10 grid lg:grid-cols-3 gap-4">
          <Link href={'/'}>
              <a className="text-clamp-p2 font-bold flex flex-nowrap content-center justify-center items-center py-4 text-white bg-black transition-all duration-300 hover:bg-amber-400 hover:text-black  fill-white hover:fill-black rounded">
              <IconTestDrive className="mr-2"/>
               SOLICITAR TEST DRIVE
              </a>
          </Link>
          <Link href={'/'}>
              <a className="text-clamp-p2 border-2 border-black font-bold flex flex-nowrap content-center justify-center items-center py-4 text-black bg-white transition-all duration-300 hover:bg-black hover:text-white  fill-black hover:fill-white rounded">
              <IconAsesor className="mr-2"/>
               SOLICITAR UN ASESOR
              </a>
          </Link>
          <Link href={'/'}>
              <a className="text-clamp-p2 font-bold flex flex-nowrap content-center justify-center items-center py-4 text-white bg-black transition-all duration-300 hover:bg-amber-400 hover:text-black  fill-white hover:fill-black rounded">
              <IconArrow className="mr-2"/>
               SUCURSALES
              </a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
