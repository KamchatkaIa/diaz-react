import Tabs from '../components/Tabs/Tabs'
import Layout from '../components/Layout/Layout'
import Carousel from '../components/Carousel'
import Link from 'next/link'
import IconTestDrive from '../components/icons/icon-test-drive'
import IconAsesor from '../components/icons/icon-asesor'
import IconArrow from '../components/icons/icon-arrow'

export default function Home ({ slider }) {
  const images = slider.data.attributes.Sliders.map((item) => {
    return (
      { img: item.ImgDesktop.data.attributes.url, tablet: item.ImgTablet.data.attributes.url, mobile: item.ImgMobile.data.attributes.url, title: item.Title, p: item.subtitle, link: item.Link, pBoton: item.TextButton, auto: item.Auto }
    )
  })
  return (
    <Layout title="Home" description="F. O. Diaz S.A., Concesionario Oficial Renault. Venta de autos 0km y planes de ahorro Plan Rombo. Accesorios y Service Oficial para tu Renault. Test Drive.">
      <div className="mt-24 lg:mt-20">
        <Carousel images={images} autoPlay={slider.data.attributes.autoPlay} showButtons={slider.data.attributes.showButtons} interval={slider.data.attributes.interval}/>
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

export async function getStaticProps () {
  const data = await fetch(`${process.env.API_URL}/slider-home/?populate=Sliders.ImgDesktop&populate=Sliders.ImgTablet&populate=Sliders.ImgMobile`)
  const sliderData = await data.json()
  return {
    props: {
      slider: sliderData
    }
  }
}
