import Carousel from '../components/Carousel'
import Layout from '../components/Layout/Layout'
import FormsRombo from '../components/FormsRombo'
import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

const imprimiTuCuota = ({ resultado }) => {
  const imgCarrouselDesktop = resultado.data.attributes.Slider.ImgDesktop.data.attributes.url
  const imgCarrouselTablet = resultado.data.attributes.Slider.ImgTablet.data.attributes.url
  const imgCarrouselMobile = resultado.data.attributes.Slider.ImgMobile.data.attributes.url
  const images = [
    { img: imgCarrouselDesktop, title: resultado.data.attributes.Slider.Title, auto: true },
    { imgTablet: imgCarrouselTablet, auto: true },
    { imgMobile: imgCarrouselMobile, auto: true }
  ]
  return (
        <Layout title="Resultados de Adjudicación">
            <div className="mt-24 lg:mt-20" >
                <Carousel images={images} autoPlay={false} showButtons={false} />
            </div>
            <div className="flex flex-col text-center flex-nowrap content-center justify-center items-center py-5">
                <h3 className="text-clamp-h2 font-bold">{resultado.data.attributes.Title}</h3>
                <div className="lg:mt-16 mt-2 w-full flex flex-col justify-center items-center text-center px-6 py-3">
                    <div className="w-full flex flex-col md:flex-row gap-3 mt-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 md:w-8/12 w-full rounded gap-4 p-2 h-fit">
                            <div>
                                <ReactMarkdown className="text-start whitespace-pre-wrap">{resultado.data.attributes.Parrafo}</ReactMarkdown>
                                <Link href={'https://www.planrombo.com.ar/actos-de-adjudicacion/resultados'} passHref >
                                    <a target="_blank" rel="noopener noreferrer" className="block mt-10 w-full text-clamp-p2 font-bold py-3 px-5 text-black bg-amber-400 transition-all duration-300 hover:bg-black hover:text-white rounded">
                                    VER RESULTADOS
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Image src={`http://localhost:1337${resultado.data.attributes.Img.data[0].attributes.url}`} width={620} height={320} layout="responsive" />
                            </div>
                        </div>

                        <div className="md:w-4/12 w-full grid bg-black p-2 rounded h-fit">
                            <FormsRombo tipo="resultado" />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
  )
}

export default imprimiTuCuota

export async function getStaticProps () {
  const data = await fetch(`${process.env.API_URL}/resultado?populate=*&populate=Slider.ImgDesktop&populate=Slider.ImgTablet&populate=Slider.ImgMobile&populate=Img`)
  const resultado = await data.json()
  return {
    props: {
      resultado
    }
  }
}
