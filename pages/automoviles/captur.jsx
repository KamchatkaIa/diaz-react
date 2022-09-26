import Link from 'next/link'
import Image from 'next/image'
import Carousel from '../../components/Carousel'
import Layout from '../../components/Layout/Layout'

const captur = ({ captur }) => {
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
            <div className="w-full flex flex-col justify-center items-center text-center">
              <div className="grid lg:grid-cols-2 grid-cols-1 w-4/5 p-5">
                <div className="flex flex-col content-start justify-center lg:items-start lg:border-r-2 lg:border-gray-200">
                  <h2 className="text-clamp-h2 font-bold uppercase">{`renault ${captur.data.attributes.Name}`}</h2>
                  <p className="text-clamp-p">{captur.data.attributes.SubTitle}</p>
                </div>
                <div className="flex flex-col content-start justify-center items-center lg:items-end mt-4 md:mt-4">
                  <p className="text-clamp-title font-bold pb-3">{`Desde $ ${captur.data.attributes.Price}`}</p>
                  <Link href={'/'}>
                      <a className="lg:w-max w-full px-3 text-clamp-p2 font-bold flex flex-nowrap content-center justify-center items-center py-4 text-white bg-black transition-all duration-300 hover:bg-amber-400 hover:text-black  fill-white hover:fill-black rounded">
                      RESERVÁ TU TEST DRIVE
                      </a>
                  </Link>
                </div>
              </div>

              <div className="lg:py-16 pb-4 flex flex-col relative overflow-hidden w-full text-black lg:min-h-screen border-t-2 border-gray-200 lg:border-none">
                <div className="lg:absolute gallery-title lg:p-4 py-2 px-4 flex flex-col items-start text-start">
                      <h3 className="lg:mb-4 text-clamp-h2 text-start">
                        <span className="block lg:mb-2 text-gray-700 text-clamp-p2 leading-8 font-normal text-start">Diseño</span>
                        <span className="block leading-10 uppercase font-bold ">{captur.data.attributes.GalleryTitle}</span>
                      </h3>
                      <div className="mb-6 text-clamp-p2 leading-8 text-start">
                        <p >{captur.data.attributes.GallerySubTitle}</p>
                      </div>
                  </div>
                  <ul className="relative flex flex-row flex-wrap list-none m-0 p-0">

                    <li className="relative block lg:absolute lg:translate-x-0 first-of-type lg:px-0 gallery-mobile">
                      <a role="button">
                        <figure className="lg:relative flex h-full overflow-hidden align-baseline">
                          <Image className="lg:absolute lg:scale-100 overflow-hidden lg:w-auto h-full" src="/automoviles/captur/first-captur.png" layout="fill" />
                        </figure>
                        </a>
                    </li>
                    <li className="relative block lg:absolute translate-x-0 second-of-type lg:px-0 gallery-mobile">
                      <a role="button">
                        <figure className="lg:relative flex h-full overflow-hidden align-baseline">
                          <Image className="absolute scale-100 overflow-hidden w-full h-full transition-all duration-300" src="/automoviles/captur/second-captur.png" layout="fill" />
                        </figure>
                        </a>
                    </li>
                    <li className="relative block lg:absolute translate-x-0 third-of-type lg:px-0 gallery-mobile">
                      <a role="button">
                        <figure className="lg:relative flex h-full overflow-hidden align-baseline">
                          <Image className="absolute scale-100 overflow-hidden w-full h-full transition-all duration-300" src="/automoviles/captur/third-captur.png" layout="fill" />
                        </figure>
                        </a>
                    </li>
                    <li className="relative block lg:absolute translate-x-0 fourth-of-type lg:px-0 gallery-mobile">
                      <a role="button">
                        <figure className="lg:relative flex h-full overflow-hidden align-baseline">
                          <Image className="absolute scale-100 overflow-hidden w-full h-full transition-all duration-300" src="/automoviles/captur/fourth-captur.png" layout="fill" />
                        </figure>
                        </a>
                    </li>
                    <li className="relative block lg:absolute translate-x-0 fifth-of-type lg:px-0 gallery-mobile">
                      <a role="button">
                        <figure className="lg:relative flex h-full overflow-hidden align-baseline">
                          <Image className="absolute scale-100 overflow-hidden w-full h-full transition-all duration-300" src="/automoviles/captur/fifth-captur.png" layout="fill" />
                        </figure>
                        </a>
                    </li>
                    <li className="relative block lg:absolute translate-x-0 sixth-of-type lg:px-0 gallery-mobile">
                      <a role="button">
                        <figure className="lg:relative flex h-full overflow-hidden align-baseline">
                          <Image className="absolute scale-100 overflow-hidden w-full h-full transition-all duration-300" src="/automoviles/captur/sixth-captur.png" layout="fill" />
                        </figure>
                        </a>
                    </li>

                  </ul>
              </div>

              <div className="lg:mt-16 mt-8 w-full flex flex-col justify-center items-center text-center px-10">
                <h3 className="text-clamp-h2 font-bold">EQUIPAMIENTO</h3>
                <p className="text-clamp-p">{captur.data.attributes.SubTitleEquipamiento}</p>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 my-4">
                  <div className="lg:text-start p-3">
                    <Image src="/automoviles/captur/equipamiento-captur-1.png" width="360" height="200" layout="responsive"/>
                    <h5 className="text-clamp-title font-bold pt-3">Múltiples espacios</h5>
                    <div className="w-1/6 bg-black h-px my-3 mx-auto lg:mx-0"></div>
                    <p className="text-clamp-p2">Útiles y prácticos para el uso diario. Espacios abiertos, cerrados, generosa guantera, espacio en consola central y en paneles de puerta, entre otros.</p>
                  </div>
                  <div className="lg:text-start p-3">
                    <Image src="/automoviles/captur/equipamiento-captur-1.png" width="360" height="200" layout="responsive"/>
                    <h5 className="text-clamp-title font-bold pt-3">Múltiples espacios</h5>
                    <div className="w-1/6 bg-black h-px my-3 mx-auto lg:mx-0"></div>
                    <p className="text-clamp-p2">Útiles y prácticos para el uso diario. Espacios abiertos, cerrados, generosa guantera, espacio en consola central y en paneles de puerta, entre otros.</p>
                  </div>
                  <div className="lg:text-start p-3">
                    <Image src="/automoviles/captur/equipamiento-captur-1.png" width="360" height="200" layout="responsive"/>
                    <h5 className="text-clamp-title font-bold pt-3">Múltiples espacios</h5>
                    <div className="w-1/6 bg-black h-px my-3 mx-auto lg:mx-0"></div>
                    <p className="text-clamp-p2">Útiles y prácticos para el uso diario. Espacios abiertos, cerrados, generosa guantera, espacio en consola central y en paneles de puerta, entre otros.</p>
                  </div>
                </div>
              </div>

            </div>
        </Layout>
  )
}

export default captur

export async function getServerSideProps ({ props }) {
  const data = await fetch(`${process.env.API_URL}/automovils/1?populate=%2A&Equipamiento&vehiculo`)
  const CapturData = await data.json()
  return {
    props: {
      captur: CapturData
    }
  }
}
