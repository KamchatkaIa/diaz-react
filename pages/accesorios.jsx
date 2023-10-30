import Layout from '../components/Layout/Layout'
import Carousel from '../components/Carousel'
import FormsRombo from '../components/FormsRombo'
import dataAccesorios from '../json/dataAccesorios'
import Image from 'next/image'

const accesorios = () => {
  const images = [
    { img: '/accesorios/accesorios.jpg', title: 'ACCESORIOS RENAULT', public: true, p: 'Una solución para cada necesidad', auto: false },
    { imgTablet: '/accesorios/accesorios.jpg', public: true, auto: false },
    { imgMobile: '/accesorios/accesorios-mobile.jpeg', public: true, auto: false }
  ]
  return (
    <Layout title="Accesorios" description="F. O. Diaz S.A., Concesionario Oficial Renault. Venta de autos 0km y planes de ahorro Plan Rombo. Accesorios y Service Oficial para tu Renault. Test Drive.">
      <div className="mt-24 lg:mt-20">
        <Carousel images={images} autoPlay={false} showButtons={false} />
      </div>
      <div className="lg:mt-16 mt-2 w-full flex flex-col justify-center items-center text-center px-6 py-6">
        <h3 className="text-clamp-title font-bold">Accesorios que hacen tu vida más fácil.</h3>
        <p className="text-clamp-p">¿Querés agregar más personalidad a tu Renault?</p>
        <p className="text-clamp-p">Mayor comodidad, soluciones para mejorar la capacidad de carga, equipamiento multimedia, etc. Tenemos todo lo que necesitás para crear tu propio Renault.</p>
        <div className="w-full flex flex-col md:flex-row gap-3 mt-8">
          <div className="flex flex-col md:w-8/12 w-full h-fit">
            <div>
              <div className="flex flex-row flex-no-wrap content-center justify-between items-center uppercase font-bold bg-gray-200 mt-2 px-2 py-4">
                <div>
                  <p>Descripción</p>
                </div>
                <div><span>Precio</span></div>
              </div>
            </div>

            <ul id="accesorios">
            { dataAccesorios
              ? dataAccesorios.map((accesorio, index) => {
                return (
                <li className="py-4 px-2" key={index}>
                  <div className="flex flex-row flex-no-wrap content-center justify-between items-center">
                    <div className="flex w-full flex-row flex-no-wrap content-center items-center justify-start">
                      <div className="w-1/5">
                        <Image className="rounded" src={`/accesorios/${accesorio.img}`} width="128" height="72" alt="Alarma" />
                      </div>
                      <div className="w-4/5">
                        <p className="font-bold text-start pl-2">{accesorio.nombre}</p>
                        <p className="text-start pl-2 text-clamp-p3">{accesorio.desc}</p>
                      </div>
                    </div>
                    <div>
                      <span><a href={`https://wa.me/5491167164249?text=Me%20gustaria%20consultar%20por%20un%20${accesorio.nombre}`} target="_blank" className="py-1 px-4 verde-link text-white inline-block rounded" rel="noreferrer"><Image src="/accesorios/whatsapp.webp" width="34" height="34" alt="Whatsapp" /></a></span>
                    </div>
                  </div>
                </li>
                )
              })
              : null }
            </ul>

          </div>
        <div className="md:w-4/12 w-full grid bg-black p-2 rounded h-fit">
          <FormsRombo tipo="planesVigentes" />
        </div>
        </div>
      </div>
    </Layout>
  )
}

export default accesorios
