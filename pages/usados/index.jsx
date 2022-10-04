import Layout from '../../components/Layout/Layout'
import Carousel from '../../components/Carousel'
export default function Usados ({ slider }) {
  const images = slider.data.attributes.Slider.map((item) => {
    return (
      { img: item.ImgDesktop.data.attributes.url, tablet: item.ImgTablet.data.attributes.url, mobile: item.ImgMobile.data.attributes.url, title: item.Title, p: item.subtitle, link: item.Link, pBoton: item.TextButton, auto: item.Auto }
    )
  })

  return (
    <Layout title="Usados" description="F. O. Diaz S.A., Concesionario Oficial Renault. Venta de autos 0km y planes de ahorro Plan Rombo. Accesorios y Service Oficial para tu Renault. Test Drive.">
      <div className="mt-24 lg:mt-20">
        <Carousel images={images} autoPlay={slider.data.attributes.autoPlay} showButtons={slider.data.attributes.showButtons} interval={slider.data.attributes.interval}/>
      </div>
    </Layout>
  )
}

export async function getStaticProps () {
  const data = await fetch(`${process.env.API_URL}/sliders-usado/?populate=Slider.ImgDesktop&populate=Slider.ImgTablet&populate=Slider.ImgMobile`)
  const sliderData = await data.json()
  return {
    props: {
      slider: sliderData
    }
  }
}
