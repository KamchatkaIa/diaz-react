import Layout from '../components/Layout/Layout'
import Carousel from '../components/Carousel'
import FormsRombo from '../components/FormsRombo'
import dataTalleres from '../json/dataTalleres'
import Image from 'next/image'
import Link from 'next/link'
const talleres = () => {
  const images = [
    { img: '/talleres/talleres.jpg', title: 'TALLERES', public: true, p: 'Talleres y Mano de obra.', auto: false },
    { imgTablet: '/talleres/talleres.jpg', public: true, auto: false },
    { imgMobile: '/talleres/talleres-mobile.jpg', public: true, auto: false }
  ]
  return (
        <Layout title="Talleres" description="F. O. Diaz S.A., Concesionario Oficial Renault. Venta de autos 0km y planes de ahorro Plan Rombo. Accesorios y Service Oficial para tu Renault. Test Drive.">
            <div className="mt-24 lg:mt-20">
                <Carousel images={images} autoPlay={false} showButtons={false} />
                <div className="py-2 flex flex-row justify-between px-8 items-center bg-black">
                    <p className="text-clamp-p2 text-white">Comprobá si tu vehículo tiene un posible recall</p>
                    <Link href={'https://www.renault.com.ar/recall.html'}>
                        <a className="lg:w-max w-max px-3 text-clamp-p2 font-bold flex flex-nowrap content-center justify-center items-center py-2 text-black bg-white transition-all duration-300 hover:bg-amber-400 hover:text-black  fill-black hover:fill-white rounded">
                            Consultar
                        </a>
                    </Link>
                </div>
            </div>
            <div className="lg:mt-16 mt-2 w-full flex flex-col justify-center items-center text-center px-6 py-6">
                <h3 className="text-clamp-title font-bold">Horarios de Atención</h3>
                <p className="text-clamp-p">De 8 a 13 hs. y de 14 a 18 hs. (Talleres Integrales)</p>
                <div className="w-full flex flex-col md:flex-row gap-3 mt-8">
                    <div className="flex flex-col md:w-8/12 w-full h-fit">

                        <ul className="grid md:grid-cols-2 grid-cols-1 gap-3 justify-items-center">
                            {dataTalleres
                              ? dataTalleres.map((taller, index) => {
                                return (
                                        <li className="flex flex-col justify-center items-center border w-fit" key={index}>
                                            <div className="px-3 py-2">
                                                <div className="">
                                                    <div>
                                                        <a href={taller.link} target="_blank" rel="noreferrer">
                                                            <Image src={`/talleres/${taller.img}`} alt="" width="400" height="225" />
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <span className="text-clamlp-p2 font-bold">{taller.nombre}</span>
                                                        <div className="col-xs-12 col-sm-12 nopadding">
                                                            <p className="text-clamlp-p2 font-bold">{taller.direccion}</p>
                                                            <p>{taller.localidad}</p>
                                                        </div>

                                                        <div className="text-clamlp-p2 py-2">
                                                            <p className="text-start">
                                                                <strong>Email: </strong>
                                                                <a href={`mailto:${taller.email}`}>{taller.email}</a>
                                                            </p>

                                                            <p className="text-start">
                                                                <strong>Tel: </strong>
                                                                {taller.tel}
                                                            </p>
                                                            <p className="text-start">
                                                                <strong>Turnos: </strong>
                                                                {taller.turnos}
                                                            </p>
                                                            <p className="text-start">
                                                                <strong>WhatsApp para turnos: </strong>
                                                                {taller.wp}
                                                            </p>
                                                        </div>

                                                            <button className="bg-teal-500 text-white mt-2 rounded py-2 px-2 w-full">
                                                                <a className="flex flex-row items-center align-middle justify-center" href="https://walink.co/494aab" title="Consultanos por WhatsApp y te contestaremos al instante" target="_blank" rel="noreferrer">
                                                                    <svg className=" w-4" id="logowtsp" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
                                                                    <span className="texto_boton_whatsapp"><strong>Whatsapp para Turnos</strong></span>
                                                                </a>
                                                            </button>
                                                    </div>
                                                    <button className="mt-2 py-2 rounded px-2 bg-amber-400 w-full">
                                                        <a href="https://turnosweb.oversoftdms.net:8020/Turnos/Index?token=d263b3309e2b4fbc98d013a44792fbfe" target="_blank" className="btn_renault_primary" rel="noreferrer">Turnos Online</a>
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                )
                              })
                              : null}
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

export default talleres
