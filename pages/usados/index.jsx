import { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import Carousel from '../../components/Carousel'
import FormsRombo from '../../components/FormsRombo'
import Image from 'next/image'
export default function Usados ({ slider, usados }) {
  const [usadoConsult, setUsadoConsult] = useState()
  const imgsUsados = usados.data.map((img) => {
    return (
      img.attributes.Images.data.map((item) => {
        return { img: item.attributes.url }
      })
    )
  })
  const images = slider.data.attributes.Slider.map((item) => {
    return (
      { img: item.ImgDesktop.data.attributes.url, tablet: item.ImgTablet.data.attributes.url, mobile: item.ImgMobile.data.attributes.url, title: item.Title, p: item.subtitle, link: item.Link, pBoton: item.TextButton, auto: item.Auto }
    )
  })

  return (
    <Layout title="Usados" description="F. O. Diaz S.A., Concesionario Oficial Renault. Venta de autos 0km y planes de ahorro Plan Rombo. Accesorios y Service Oficial para tu Renault. Test Drive.">
      <div className="mt-24 lg:mt-20">
        <Carousel images={images} autoPlay={slider.data.attributes.autoPlay} showButtons={slider.data.attributes.showButtons} interval={slider.data.attributes.interval} />
      </div>
      <div className="lg:mt-16 mt-2 w-full flex flex-col justify-center items-center text-center px-6 py-3">
        <div className="w-full flex flex-col md:flex-row gap-1 mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 md:w-8/12 w-full rounded gap-1 p-2 h-fit">
            { usados.data.map((usado, index, i) => {
              return (
                <div key={index} className="flex flex-col nowrap content-center items-center justify-end gap-3 p-2 rounded bg-white min-h-max">
                  <h5 className="text-clamp-3 font-bold p-0">{usado.attributes.Nombre}</h5>
                  <Image src={`http://localhost:1337${usado.attributes.Images.data[0].attributes.url}` } width={250} height={180} className="rounded"/>
                  <p className=" text-clamp-p3 p-0">Año: {usado.attributes.Ano} - {usado.attributes.Kilometros}km</p>
                  <p className=" p-0"><span className="text-clamp-p font-bold text-clamp-p3">${usado.attributes.Price}</span></p>
                  <button type="button" data-name={usado.attributes.Nombre} onClick={e => setUsadoConsult(usado.attributes.Nombre)} className=" w-3/4 text-clamp-p2 font-bold py-3 px-5 text-black bg-amber-400 transition-all duration-300 hover:bg-black hover:text-white rounded">Consultar</button>
                </div>
              )
            }) }
          </div>

          <div className="md:w-4/12 w-full grid bg-black p-2 rounded h-fit">
            <FormsRombo tipo="usados" usadoConsult={usadoConsult} usados={usados} />
          </div>

          </div>
      </div>

    </Layout>
  )
}

export async function getStaticProps () {
  const data = await fetch(`${process.env.API_URL}/sliders-usado/?populate=Slider.ImgDesktop&populate=Slider.ImgTablet&populate=Slider.ImgMobile`)
  const usadosData = await fetch(`${process.env.API_URL}/usados?populate=Images`)
  const sliderData = await data.json()
  const usados = await usadosData.json()
  return {
    props: {
      slider: sliderData,
      usados
    }
  }
}
