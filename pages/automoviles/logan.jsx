import Carousel from '../../components/Carousel'
import Layout from '../../components/Layout/Layout'
import TemplateAutos from '../../components/TemplateAutos'

const logan = ({ logan, equipoLogan }) => {
  const imgCarrouselDesktop = logan.data.attributes.ImgCarrouselDesktop.data[0].attributes.url
  const imgCarrouselTablet = logan.data.attributes.ImgCarrouselTablet.data[0].attributes.url
  const imgCarrouselMobile = logan.data.attributes.ImgCarrouselMobile.data[0].attributes.url
  const images = [
    { img: imgCarrouselDesktop, auto: true },
    { imgTablet: imgCarrouselTablet, auto: true },
    { imgMobile: imgCarrouselMobile, auto: true }
  ]
  return (
        <Layout title="Logan">
            <div className="mt-24 lg:mt-20" >
            <Carousel images={images} autoPlay={false} showButtons={false} />
            </div>
            <TemplateAutos props={logan} propsEquip={equipoLogan}/>
        </Layout>
  )
}

export default logan

export async function getServerSideProps () {
  const data = await fetch(`${process.env.API_URL}/automovils/2?populate=%2A`)
  const dataEquip = await fetch(`${process.env.API_URL}/automovils/2?populate=Equipamiento.ImgEquipamiento`)
  const LoganData = await data.json()
  const LoganEquip = await dataEquip.json()
  return {
    props: {
      logan: LoganData,
      equipoLogan: LoganEquip
    }
  }
}
