import Carousel from '../../components/Carousel'
import Layout from '../../components/Layout/Layout'
import TemplateAutos from '../../components/TemplateAutos'

const captur = ({ captur, equipoCaptur }) => {
  const imgCarrouselDesktop = captur.data.attributes.ImgCarrouselDesktop.data[0].attributes.url
  const imgCarrouselTablet = captur.data.attributes.ImgCarrouselTablet.data[0].attributes.url
  const imgCarrouselMobile = captur.data.attributes.ImgCarrouselMobile.data[0].attributes.url
  const images = [
    { img: imgCarrouselDesktop, auto: true },
    { imgTablet: imgCarrouselTablet, auto: true },
    { imgMobile: imgCarrouselMobile, auto: true }
  ]
  return (
        <Layout title="Captur">
            <div className="mt-24 lg:mt-20" >
            <Carousel images={images} autoPlay={false} showButtons={false} />
            </div>
            <TemplateAutos props={captur} propsEquip={equipoCaptur}/>
        </Layout>
  )
}

export default captur

export async function getServerSideProps () {
  const data = await fetch(`${process.env.API_URL}/automovils/1?populate=%2A`)
  const dataEquip = await fetch(`${process.env.API_URL}/automovils/1?populate=Equipamiento.ImgEquipamiento`)
  const CapturData = await data.json()
  const CapturEquip = await dataEquip.json()
  return {
    props: {
      captur: CapturData,
      equipoCaptur: CapturEquip
    }
  }
}
