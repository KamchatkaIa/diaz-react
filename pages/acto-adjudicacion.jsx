import Carousel from '../components/Carousel'
import Layout from '../components/Layout/Layout'
import FormsRombo from '../components/FormsRombo'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

const actoAdjudicacion = ({ actos }) => {
  const imgCarrouselDesktop = actos.data.attributes.Slider.ImgDesktop.data.attributes.url
  const imgCarrouselTablet = actos.data.attributes.Slider.ImgTablet.data.attributes.url
  const imgCarrouselMobile = actos.data.attributes.Slider.ImgMobile.data.attributes.url
  const images = [
    { img: imgCarrouselDesktop, title: actos.data.attributes.Slider.Title, auto: true },
    { imgTablet: imgCarrouselTablet, auto: true },
    { imgMobile: imgCarrouselMobile, auto: true }
  ]
  return (
        <Layout title="Actos de Adjudicación">
            <div className="mt-24 lg:mt-20" >
                <Carousel images={images} autoPlay={false} showButtons={false} />
            </div>
            <div className="flex flex-col text-center flex-nowrap content-center justify-center items-center py-5">
                <h3 className="text-clamp-h2 font-bold"></h3>
                <div className="lg:mt-16 mt-2 w-full flex flex-col justify-center items-center text-center px-6 py-3">
                    <div className="w-full flex flex-col md:flex-row gap-3 mt-4">
                        <div className="grid grid-cols-1 md:w-8/12 w-full rounded gap-4 p-2 h-fit">
                            <div>
                                <ReactMarkdown className="text-start whitespace-pre-wrap" >{actos.data.attributes.text}</ReactMarkdown>
                            </div>
                            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                {actos.data.attributes.Imgs.data.map((img, index) => {
                                  return (
                                        <Image key={index} src={`http://localhost:1337${img.attributes.url}`} width={300} height={300} layout="responsive" />
                                  )
                                })}
                            </div>
                        </div>

                        <div className="md:w-4/12 w-full grid bg-black p-2 rounded h-fit">
                            <FormsRombo tipo="actosAdjudicacion" />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
  )
}

export default actoAdjudicacion

export async function getStaticProps () {
  const data = await fetch(`${process.env.API_URL}/acto-adjudicacion?populate=*&populate=Slider.ImgDesktop&populate=Slider.ImgTablet&populate=Slider.ImgMobile&populate=Imgs`)
  const actos = await data.json()
  return {
    props: {
      actos
    }
  }
}
