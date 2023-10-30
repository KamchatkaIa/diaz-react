import Layout from '../components/Layout/Layout'
import Carousel from '../components/Carousel'
import FormsRombo from '../components/FormsRombo'
import Image from 'next/image'
import Link from 'next/link'
const planesVigentes = ({ planes, rombo }) => {
  const imgCarrouselDesktop = rombo.data.attributes.Slider.ImgDesktop.data.attributes.url
  const imgCarrouselTablet = rombo.data.attributes.Slider.ImgTablet.data.attributes.url
  const imgCarrouselMobile = rombo.data.attributes.Slider.ImgMobile.data.attributes.url
  const images = [
    { img: imgCarrouselDesktop, title: rombo.data.attributes.Slider.Title, auto: true, p: rombo.data.attributes.Slider.subtitle },
    { imgTablet: imgCarrouselTablet, auto: true },
    { imgMobile: imgCarrouselMobile, auto: true }
  ]
  return (
    <Layout title="Planes Vigentes" description="F. O. Diaz S.A., Concesionario Oficial Renault. Venta de autos 0km y planes de ahorro Plan Rombo. Accesorios y Service Oficial para tu Renault. Test Drive.">
      <div className="mt-24 lg:mt-20">
        <Carousel images={images} autoPlay={false} showButtons={false} />
      </div>
      <div className="flex flex-col text-center flex-nowrap content-center justify-center items-center py-5">
        <h3 className="text-clamp-h2 font-bold py-2">Llegar al auto que necesitás es muy sencillo con Plan Rombo.</h3>
        <p className="text-clamp-p2">Podés seleccionar un Plan de los modelos de suscripción y cambiarlo a la hora de la adjudicación participando por Sorteo o Licitación.</p>
        <div className="grid md:grid-cols-3 grid-cols-1 w-4/5 rounded gap-4 p-4 h-fit mt-10">
          {planes.data
            ? planes.data.map((plan, index) => {
              return (
                  <div key={index} className="p-2 rounded bg-white border-2 shadow-md min-h-max">
                    <h5 className="text-clamp-title font-bold text-start p-0">{plan.attributes.Title}</h5>
                    <p className="text-start text-clamp-p3 p-0">{plan.attributes.CantidadCuotas}</p>
                    <p className="text-start text-clamp-p3 p-0">Cuotas desde: <span className="text-clamp-p font-bold">${plan.attributes.Cuota}</span></p>
                    <p className="text-start text-clamp-p3 p-0">X Mes - Plan {plan.attributes.Type}</p>
                    <Image src={`http://localhost:1337${plan.attributes.Image.data.attributes.url}`} width="450" height="450" layout="responsive" />
                  </div>
              )
            })
            : null}
        </div>
      </div>
      <div className="lg:mt-16 mt-2 w-full flex flex-col justify-center items-center text-center px-6 py-6">
        <h3 className="text-clamp-title font-bold">Para todas tus necesidades</h3>
        <p className="text-clamp-p">Informaciones Plan Rombo</p>
        <div className="w-full flex flex-col md:flex-row gap-3 mt-8">
          <div className="grid md:grid-cols-2 grid-cols-1 md:w-8/12 w-full rounded gap-6 p-2 h-fit">
          {rombo.data
            ? rombo.data.attributes.Info.map((item, index) => {
              return (
                  <div key={index} className="p-4 rounded bg-white shadow-md min-h-max">
                    <Image src={`http://localhost:1337${item.ImgEquipamiento.data[0].attributes.url}`} width="600" height="337" layout="responsive" />
                    <h5 className="text-clamp-title font-bold text-start p-0 py-2">{item.TitleEquipamiento}</h5>
                    <p className="text-start text-clamp-p3 p-0">{item.SubEquipamiento}</p>
                  </div>
              )
            })
            : null}
          </div>

          <div className="md:w-4/12 w-full grid bg-black p-2 rounded h-fit">
              <FormsRombo tipo="planesVigentes" />
          </div>
        </div>
      </div>
      <div className="flex flex-col my-3 px-6 py-6 gap-2">
        <p className="text-clamp-p2 text-start">*Los precios pueden sufrir modificaciones sin previo aviso. Imágenes no contractuales.</p>
            <Link href={'/legales-planes'}>
              <a className="w-fit text-clamp-p2 font-bold py-3 px-5 text-black bg-amber-400 transition-all duration-300 hover:bg-black hover:text-white rounded">
               Legales
              </a>
            </Link>
      </div>
    </Layout>
  )
}

export default planesVigentes

export async function getStaticProps () {
  const planesData = await fetch(`${process.env.API_URL}/planes?populate=*`)
  const romboData = await fetch(`${process.env.API_URL}/plan-vigente?populate=*&populate=Slider.ImgDesktop&populate=Slider.ImgTablet&populate=Slider.ImgMobile&populate=Info.ImgEquipamiento`)
  const planes = await planesData.json()
  const rombo = await romboData.json()
  return {
    props: {
      planes,
      rombo
    }
  }
}
