import Link from 'next/link'
import Image from 'next/image'
import Form from './Form'
const TemplateAutos = ({ props }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center text-center">
      <div className="grid lg:grid-cols-2 grid-cols-1 w-4/5 p-5">
        <div className="flex flex-col content-start justify-center lg:items-start lg:border-r-2 lg:border-gray-200">
          <h2 className="text-clamp-h2 font-bold uppercase">{`renault ${props.data.attributes.Name}`}</h2>
          <p className="text-clamp-p">{props.data.attributes.SubTitle}</p>
        </div>
        <div className="flex flex-col content-start justify-center items-center lg:items-end mt-4 md:mt-4">
          <p className="text-clamp-title font-bold pb-3">{`Desde $ ${props.data.attributes.Price}`}</p>
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
            <span className="block leading-10 uppercase font-bold ">{props.data.attributes.GalleryTitle}</span>
          </h3>
          <div className="mb-6 text-clamp-p2 leading-8 text-start">
            <p >{props.data.attributes.GallerySubTitle}</p>
          </div>
        </div>
        <ul className="relative flex flex-row flex-wrap list-none m-0 p-0">
          {props.data.attributes.SixGallery.data.map((item, index) => {
            return (
              <li key={index} className={`relative block lg:absolute lg:translate-x-0 ${item.attributes.name.split('-')[0]}-of-type lg:px-0 gallery-mobile`}>
                <a role="button">
                  <figure className="lg:relative flex h-full overflow-hidden align-baseline">
                    <Image className="lg:absolute lg:scale-100 overflow-hidden lg:w-auto h-full" src={`http://localhost:1337${item.attributes.url}`} layout="fill" />
                  </figure>
                </a>
              </li>
            )
          })}

        </ul>
      </div>

      <div className="lg:mt-16 mt-8 w-full flex flex-col justify-center items-center text-center px-10">
        <h3 className="text-clamp-h2 font-bold">EQUIPAMIENTO</h3>
        <p className="text-clamp-p">{props.data.attributes.SubTitleEquipamiento}</p>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 my-4">
          {props.data.attributes.Equipamiento.map((item, index) => {
            return (
              <div key={index} className="lg:text-start p-3">
                <Image src={`http://localhost:1337${item.ImgEquipamiento.data[0].attributes.url}`} width="360" height="200" layout="responsive" />
                <h5 className="text-clamp-title font-bold pt-3">{item.TitleEquipamiento}</h5>
                <div className="w-1/6 bg-black h-px my-3 mx-auto lg:mx-0"></div>
                <p className="text-clamp-p2">{item.SubEquipamiento}</p>
              </div>
            )
          })}
        </div>
      </div>

      <div className="lg:mt-16 mt-8 w-full flex flex-col justify-center items-center text-center px-10 py-10 bg-gray-200">
        <h3 className="text-clamp-h2 font-bold">Conocé sus versiones</h3>
        <p className="text-clamp-p">Hay una versión para cada una de tus expectativas</p>
        <div className="w-full flex flex-col md:flex-row gap-3 mt-3">
          <div className="grid md:grid-cols-3 grid-cols-1 md:w-8/12 w-full rounded gap-4 p-2">

            {props.data.attributes.Versiones
              ? props.data.attributes.Versiones.map((version, index) => {
                return (
                <div key={index} className="p-2 rounded bg-white border-2 shadow-md">
                  <Image src={`http://localhost:1337${version.imgVersion.data.attributes.url}`} width="300" height="200" layout="responsive" />
                  <h5 className="text-clamp-title font-bold text-center p-3">{version.Name}</h5>
                </div>
                )
              })
              : null}
          </div>

          <div className="md:w-4/12 w-full grid bg-black p-2 rounded">
              <Form />
          </div>
        </div>
        <p className="text-clamp-p2 text-start mt-6">*Los precios pueden sufrir modificaciones sin previo aviso. Imágenes no contractuales.</p>
      </div>
    </div>
  )
}

export default TemplateAutos
