import Carousel from '../components/Carousel'
import Layout from '../components/Layout/Layout'
import FormsRombo from '../components/FormsRombo'
import Image from 'next/image'
import Link from 'next/link'

const imprimiTuCuota = ({ imprimi }) => {
  const imgCarrouselDesktop = imprimi.data.attributes.Slider[0].ImgDesktop.data.attributes.url
  const imgCarrouselTablet = imprimi.data.attributes.Slider[0].ImgTablet.data.attributes.url
  const imgCarrouselMobile = imprimi.data.attributes.Slider[0].ImgMobile.data.attributes.url
  const images = [
    { img: imgCarrouselDesktop, title: imprimi.data.attributes.Slider[0].Title, auto: true },
    { imgTablet: imgCarrouselTablet, auto: true },
    { imgMobile: imgCarrouselMobile, auto: true }
  ]
  return (
        <Layout title="Imprimí tu Cuota">
            <div className="mt-24 lg:mt-20" >
                <Carousel images={images} autoPlay={false} showButtons={false} />
            </div>
            <div className="flex flex-col text-center flex-nowrap content-center justify-center items-center py-5">
                <h3 className="text-clamp-h2 font-bold">{imprimi.data.attributes.Title}</h3>
                <div className="lg:mt-16 mt-2 w-full flex flex-col justify-center items-center text-center px-6 py-3">
                    <div className="w-full flex flex-col md:flex-row gap-3 mt-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 md:w-8/12 w-full rounded gap-4 p-2 h-fit">
                            <div>
                                <h3 className="text-clamp-p font-bold text-start">Aquí podrás:</h3>
                                <ul className="text-clamp-p2 text-start">
                                    <li>Descargar tu Talón de Cuota</li>
                                    <li>Realizar consultas sobre tu Plan de Ahorro</li>
                                    <li> Obtener tu Código de Identificación</li>
                                    <li>Hacer trámites de Cambio de Domicilio y mucho más!</li>
                                </ul>
                                <Link href={'https://www.planrombo.com.ar/mipr/auth/login'} passHref >
                                    <a target="_blank" rel="noopener noreferrer" className="block mt-10 w-full text-clamp-p2 font-bold py-3 px-5 text-black bg-amber-400 transition-all duration-300 hover:bg-black hover:text-white rounded">
                                    IMPRIMÍ TU CUOTA
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Image src={`http://localhost:1337${imprimi.data.attributes.Img.data.attributes.url}`} width={620} height={320} layout="responsive" />
                            </div>
                        </div>

                        <div className="md:w-4/12 w-full grid bg-black p-2 rounded h-fit">
                            <FormsRombo tipo="imprimiTuCuota" />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
  )
}

export default imprimiTuCuota

export async function getStaticProps () {
  const data = await fetch(`${process.env.API_URL}/imprimi-tu-cuota?populate=*&populate=Slider.ImgDesktop&populate=Slider.ImgTablet&populate=Slider.ImgMobile&populate=Img`)
  const imprimi = await data.json()
  return {
    props: {
      imprimi
    }
  }
}
