import Layout from '../components/Layout/Layout'
import Carousel from '../components/Carousel'
import FormsRombo from '../components/FormsRombo'
import Image from 'next/image'

const talleres = () => {
  const images = [
    { img: '/minuto/minuto_new.jpeg', title: 'Renault Minuto', public: true, p: 'No es un taller, es algo mucho más rápido', auto: false },
    { imgTablet: '/minuto/minuto_new.jpg', public: true, auto: false },
    { imgMobile: '/minuto/minuto-mobile.jpg', public: true, auto: false }
  ]
  return (
        <Layout title="Renault Minuto" description="F. O. Diaz S.A., Concesionario Oficial Renault. Venta de autos 0km y planes de ahorro Plan Rombo. Accesorios y Service Oficial para tu Renault. Test Drive.">
            <div className="mt-24 lg:mt-20">
                <Carousel images={images} autoPlay={false} showButtons={false} />
            </div>
            <div className="lg:mt-16 mt-2 w-full flex flex-col justify-center items-center text-center px-6 py-6">
                <h3 className="text-clamp-title font-bold">Centros Renault Minuto</h3>
                <p className="text-clamp-p">De Lunes a Viernes de 8.30 a 18.30 hs y Sábados de 8 a 13 hs.</p>
                <div className="w-full flex flex-col md:flex-row gap-3 mt-8">
                    <div className="flex flex-col md:w-8/12 w-full h-fit">
                        <ul className="grid md:grid-cols-2 grid-cols-1 gap-3 justify-items-center mb-8">
                            <li className="flex flex-col justify-center items-center border w-fit">
                                <div className="px-3 py-2">
                                    <div className="">
                                        <div>
                                            <a href='https://www.google.com.ar/maps/place/Diaz+SA/@-34.5900502,-58.4418023,15.95z/data=!4m13!1m7!3m6!1s0x95bcb58ca342ffaf:0x480371ac1fb4d291!2sAv.+C%C3%B3rdoba+5430,+C1414BBN+CABA!3b1!8m2!3d-34.588504!4d-58.43904!3m4!1s0x95bcb58c98befc3b:0x59cfa5e5d2f16ed4!8m2!3d-34.5885416!4d-58.4392067' target="_blank" rel="noreferrer">
                                                <Image src='/minuto/min1.jpeg' alt="" width="400" height="225" />
                                            </a>
                                        </div>
                                        <div>
                                            <span className="text-clamlp-p2 font-bold">Renault Minuto Palermo</span>
                                            <div className="col-xs-12 col-sm-12 nopadding">
                                                <p className="text-clamlp-p2 font-bold">Av. Córdoba 5430</p>
                                                <p>CABA</p>
                                            </div>

                                            <div className="text-clamlp-p2 py-2">

                                                <p className="text-start">
                                                    <strong>Tel: </strong>
                                                    4508-5900 y 5901
                                                </p>
                                                <p className="text-start">
                                                    15-6716-4214
                                                </p>
                                                <p className="text-start">
                                                    rminuto_cordoba@diazsa.com
                                                </p>
                                            </div>
                                        </div>
                                        <button className="mt-2 py-2 rounded px-2 bg-amber-400 w-full">
                                            <a href="https://turnosweb.oversoftdms.net:8020/Turnos/Index?token=d263b3309e2b4fbc98d013a44792fbfe" target="_blank" className="btn_renault_primary" rel="noreferrer">Turnos Online</a>
                                        </button>
                                    </div>
                                </div>
                            </li>

                            <li className="flex flex-col justify-center items-center border w-fit">
                                <div className="px-3 py-2">
                                    <div className="">
                                        <div>
                                            <a href='https://www.google.com.ar/maps/place/Concesionario+Renault+(F.O.+D%C3%ADaz+S.A.)/@-34.6063921,-58.4441688,15.99z/data=!4m13!1m7!3m6!1s0x95bcca6d18996f2f:0xef4a669eba5a321e!2sLeopoldo+Marechal+1050,+C1414+CABA!3b1!8m2!3d-34.6060045!4d-58.4387091!3m4!1s0x95bcca6d24946345:0x9fde2d1df90c6098!8m2!3d-34.6060151!4d-58.4391721' target="_blank" rel="noreferrer">
                                                <Image src='/minuto/min2.jpeg' alt="" width="400" height="225" />
                                            </a>
                                        </div>
                                        <div>
                                            <span className="text-clamlp-p2 font-bold">Renault Minuto Caballito</span>
                                            <div className="col-xs-12 col-sm-12 nopadding">
                                                <p className="text-clamlp-p2 font-bold">Leopoldo Marechal 1050</p>
                                                <p>CABA</p>
                                            </div>

                                            <div className="text-clamlp-p2 py-2">

                                                <p className="text-start">
                                                    <strong>Tel: </strong>
                                                    4981-6141 y 1387
                                                </p>
                                                <p className="text-start">
                                                15-6716-4243
                                                </p>
                                                <p className="text-start">
                                                rminuto_marechal@diazsa.com
                                                </p>
                                            </div>
                                        </div>
                                        <button className="mt-2 py-2 rounded px-2 bg-amber-400 w-full">
                                            <a href="https://turnosweb.oversoftdms.net:8020/Turnos/Index?token=d263b3309e2b4fbc98d013a44792fbfe" target="_blank" className="btn_renault_primary" rel="noreferrer">Turnos Online</a>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <h3 className="text-clamp-title font-bold">Nuestra promesa cliente</h3>
                        <ul className="grid grid-cols-1 gap-1 md:text-start">
                            <li>Atención inmediata <strong>SIN TURNO PREVIO.</strong></li>
                            <li><b>CONTACTO DIRECTO</b> con el operador a cargo de su vehículo, quien efectúa la prestación delante suyo.</li>
                            <li>Precios <b>TODO INCLUIDO</b> en cada prestación.</li>
                            <li><b>25 PUNTOS DE CONTROL GRATUITO</b> sistemáticamente en su vehículo con cada intervención.</li>
                            <li><b>GARANTÍA DE 1 AÑO</b> en las reparaciones.</li>
                            <li><b>REPUESTOS ORIGINALES</b> Renault.</li>
                            <li><b>PRESUPUESTO GRATUITO</b> ante un simple pedido.</li>
                            <li><b>HORARIOS EXTENDIDOS</b> de atención.</li>
                            <li><b>SALA DE ESPERA</b> confortable.</li>
                            <li>Un <b>CUIDADO ESPECIAL</b> de su vehículo.</li>
                        </ul>

                        <ul className="grid grid-cols-1 gap-1 md:text-start text-clamp-p3 mt-8">
                            <li>El servicio de mantenimiento mecánico inmediato de Renault.</li>
                            <li>No es un taller, es algo mucho más rápido.</li>
                            <li>Usted viene sin pedir turno previo, su vehículo es revisado por un operador especializado que le informa en el momento el motivo y el precio de la reparación.</li>
                            <li>Si está de acuerdo, el trabajo se realiza en el instante con repuestos originales y asegurando la más alta calidad en nuestros servicios.</li>
                            <li>Visite RENAULT MINUTO, en nuestras salas de recepción encontrará el mejor ámbito para aguardar cómodamente por su vehículo.</li>
                            <li>Además, atendemos a otras marcas.</li>
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
