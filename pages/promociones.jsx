import Layout from '../components/Layout/Layout'
import Carousel from '../components/Carousel'
import FormsRombo from '../components/FormsRombo'
import Image from 'next/image'
import Link from 'next/link'

const promociones = () => {
  const images = [
    { img: '/promociones/promociones-desktop.jpeg', title: 'Promociones', public: true, p: 'Increíbles descuentos para tu Renault', auto: false },
    { imgTablet: '/promociones/promociones-tablet.jpg', public: true, auto: false },
    { imgMobile: '/promociones/promociones-mobile.jpg', public: true, auto: false }
  ]
  return (
    <Layout title="Planes Vigentes" description="F. O. Diaz S.A., Concesionario Oficial Renault. Venta de autos 0km y planes de ahorro Plan Rombo. Accesorios y Service Oficial para tu Renault. Test Drive.">
      <div className="mt-24 lg:mt-20">
        <Carousel images={images} autoPlay={false} showButtons={false} />
      </div>
      <div className="lg:mt-16 mt-2 w-full flex flex-col justify-center items-center text-center px-6 py-6">
        <h3 className="text-clamp-title font-bold">DIAZ Te brinda descuentos especiales.</h3>
        <p className="text-clamp-p">¡Aprovechá las mejores promociones para disfrutar de tu auto al máximo!</p>
        <p className="text-clamp-p">Beneficios especiales para vos y tu auto</p>
        <div className="w-full flex flex-col md:flex-row gap-3 mt-8">
            <div className="flex flex-col md:w-8/12 w-full p-2 gap-5 h-fit">
                <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
                    <div className="p-2 border-gray-100 border">
                        <Image src="/promociones/promo1.jpeg" width="380" height="676" />
                    </div>
                    <div className="p-2 border-gray-100 border">
                        <Image src="/promociones/promo3.jpeg" width="380" height="676" />
                    </div>
                    <div className="p-2 border-gray-100 border">
                        <Image src="/promociones/promo4.jpeg" width="380" height="676" />
                    </div>
                </div>
                <div>
                    <p className="text-start">Vigencia de la promoción desde el <b>01/11/2022</b> al <b>31/12/2022</b> inclusive o hasta agotar stock. El descuento se aplicará sobre el precio de lista vigente al momento de realizar la operación. No acumulable ni combinable con otras promociones, beneficios o descuentos.</p>
                    <p className="text-start"><b>- 10% de Descuento en Reemplazo de Pastillas de Freno</b> (Todos los modelos delanteras/traseras )</p>
                    <p className="text-start"><b>- 15% de Descuento en Control y Carga de Aire Acondicionado</b> (Todos los modelos )</p>
                    <p className="text-start"><b>- 20% de Descuento en Reemplazo de Amortiguadores</b> (Todos los modelos delanteros/traseros )</p>
                </div>
                <Link href={'https://turnosweb.oversoftdms.net:8020/Turnos/Index?token=d263b3309e2b4fbc98d013a44792fbfe'}>
                  <a target="_blank" className="w-fit text-clamp-p2 font-bold py-3 px-5 text-black bg-amber-400 transition-all duration-300 hover:bg-black hover:text-white rounded">
                  Turnos Online
                  </a>
                </Link>
                <div className="flex flex-col gap-4">
                  <Image className="rounded" src="/promociones/monopatin.jpg" width="720" height="405" layout="responsive"/>
                  <p className="text-start font-bold">Nuevo Monopatín Renault Emblem</p>
                  <Link href={'https://www.tienda.renault.com.ar/monopatin'}>
                    <a target="_blank" className="w-fit text-clamp-p2 font-bold py-3 px-5 text-black bg-amber-400 transition-all duration-300 hover:bg-black hover:text-white rounded">
                    Ver
                    </a>
                  </Link>
                  <Image className="rounded" src="/promociones/beneficios.jpg" width="720" height="405" layout="responsive"/>
                  <p className="text-start font-bold">Beneficios MY RENAULT - Desde el 01/01/2022 al 31/12/2022.</p>
                  <p className="text-start text-legales">Beneficio exclusivo para socios MY RENAULT que acrediten tal circunstancia mediante la exhibición del codigo correspondiente otorgado por la aplicación. Promoción válida en Argentina desde el 01/01/2022 al 31/12/2022 (ambas fechas inclusive) en los talleres Renault Minuto y en los talleres de mecánica de los concesionarios oficiales Renault.*Descuentos aplicables a todos los modelos, inclusive Master y Alaskan, cuyos services se realizan cada 20.000km. En todos los casos el descuento aplicará sobre el precio de los services de mantenimiento oficial (incluye repuestos + mano de obra) desde los 20.000 kms. y hasta los 120.000kms. inclusive, según el siguiente detalle: Beneficio del 10% de descuento sobre el precio del service de mantenimiento de 20.000kms; beneficio del 20% de descuento sobre el precio de los services de mantenimiento desde 30.000 a 50.000 kms. inclusive; beneficio del 25% de descuento sobre precio de los services de mantenimiento desde los 60.000 kms. y hasta los 120.000kms. inclusive. El beneficio aplicará para operaciones realizadas sobre los vehículos de la marca Renault, sobre el precio de lista vigente al momento de realizarse cada operación, y conforme el cronograma de mantenimiento de cada modelo según el kilometraje. En todos los casos, para acceder al mencionado beneficio el cliente deberá: i) acreditar la realización de la totalidad de los services de mantenimiento anteriores de manera oficial y ii) presentar el código de descuento MY RENAULT. Conocé los Términos y Condiciones del Programa MY RENAULT en https://myrenault.com.ar/. Los descuentos detallados no aplican a operaciones ni repuestos adicionales. En todos los casos, se podrán adicionar intervenciones técnicas en función al estado técnico de la unidad y las condiciones de utilización del vehículo, cuyo valor no está incluido en el descuento precitado. No acumulable, no combinable, ni canjeable con otras operaciones. Consulte Servicios de Mantenimiento aplicable a otros kilometrajes y el precio de las operaciones adicionales. El beneficio es intransferible. Renault Argentina S.A.. 30-50331781-4, F.J.S.M. de Oro 1744, CABA.</p>
                  <Image className="rounded" src="/promociones/celebramos-25.jpg" width="720" height="405" layout="responsive"/>
                  <p className="text-start font-bold">CAMBIO DE FILTRO Y ACEITE - Desde el 01/07/2022 al 31/08/2022</p>
                  <p className="text-start text-legales">Promoción válida en Argentina desde el 01/07/2022 al 31/08/2022 (ambas fechas inclusive), únicamente para Operaciones de “cambio de aceite y filtro” que sean adquiridos e instalados en los Talleres Oficiales o Talleres Renault Minuto de Renault Argentina, sobre los vehículos Renault de los siguientes modelos, versiones y motorización: CLIO II con Motor 1.2 16V D4F; CLIO II, KANGOO, MEGANE I, DUSTER-OROCH, LOGAN, SANDERO, FLUENCE-MEGANE III con Motor 1.6 16V K4M, LOGAN SANDERO con Motor 1.6 8V K7M; DUSTER-OROCH, CAPTUR, con Motor 2.0 16V F4R; FLUENCE-MEGANE III, CAPTUR, KOLEOS I Y II con Motor 2.0 16V M4R; CAPTUR, LOGAN SANDERO, KANGOO PH2 con motor 1.6 16V H4M; KANGOO PH1 con motor 1.6 8V K9K; KWID con motor 1.0 12V B4D; MASTER 2.5 16v G9U. Consultar marca y origen de los filtros para cada modelo aquí. En todos los casos, incluirá a su vez un chequeo integral del vehículo a través del análisis “25 puntos de control”. (1) El precio promocionado corresponde a la Operación anteriormente citada para KWID con motor 1.0 12V B4D e incluye aceite a granel (8671099266), repuesto, mano de obra e IVA, así como chequeo integral del vehículo a través del análisis “25 puntos de control”. En todos los casos se podrán adicionar intervenciones técnicas en función del estado técnico de la unidad y las condiciones de utilización del vehículo, cuyo valor no estará incluido en el descuento precitado. No acumulable, no combinable, ni canjeable con otras operaciones. Consulte Servicios de Mantenimiento aplicable a otros kilometrajes y el precio de las operaciones adicionales. Renault Argentina, 30-50331781-4, F.J.S.M. de Oro 1744, Capital Federal.</p>
                  <Image className="rounded" src="/promociones/mano-de-obra.jpg" width="720" height="405" layout="responsive"/>
                  <p className="text-start font-bold">Oferta Flotas - Desde el 01/04/2022 al 31/10/2022</p>
                  <p className="text-start text-legales">Fe de erratas, válida a partir del 01/05/2022: *mediante el canal de ventas especiales, por personas físicas o jurídicas que soliciten factura A por la adquisición del service de mantenimiento. Promoción válida en Argentina desde el 01/04/2022 al 31/10/2022 (ambas fechas inclusive). (1) 30% off en mano de obra para service de mantenimiento: Descuento aplicable exclusivamente en los Talleres Renault Minuto y Talleres oficiales de la red de concesionarios Renault, sobre Operaciones de servicio de mantenimiento hasta los 120.000 km (inclusive) realizadas sobre vehículos adquiridos bajo modalidad de Flota*, y únicamente para los modelos y con motor: Nueva Kangoo Furgón (Motor H4M; K9K), Master (Motor G9; UM9T; S9W 2,8D; G9U 2,5 DCI; M9T 2,3 DCI), Oroch (Motor K4M; H4M; F4R) y Alaskan (Motor M9T); el beneficio consistirá en obtener un 30% de descuento aplicable únicamente sobre el costo de mano de obra vigente al momento de realizar la Operación. El descuento detallado no aplica sobre piezas, repuestos, ni mano de obra adicionales. En todos los casos, al momento del service se podrán adicionar intervenciones técnicas en función del estado técnico de la unidad y las condiciones de utilización del vehículo, cuyo valor no estará incluido en los descuentos precitados. Promociones no acumulables, no combinables, ni canjeables con otras operaciones. Renault Argentina S.A., 30-50331781-4, F.J.S.M. de Oro 1744, Capital Federal.</p>
                  <Image className="rounded" src="/promociones/3-6-cuotas.jpg" width="720" height="405" layout="responsive"/>
                  <p className="text-start font-bold">Financiación en service - Desde el 01/04/2022 al 31/12/2022</p>
                  <p className="text-start text-legales">Promoción válida en la República Argentina desde el 01/04/2022 al 31/12/2022 (ambas fechas inclusive), en los talleres Renault Minuto y en los talleres de mecánica de los concesionarios oficiales Renault, exclusivamente para los Planes de mantenimiento programados según cronograma diseñado por Renault para cada modelo y según su kilometraje. (1) Promoción abonando con Tarjetas de Crédito Visa ó Mastercard: El beneficio consiste en la posibilidad de acceder a un plan de financiación, a elección del cliente, en 3 ó 6 cuotas sin interés, fijas y mensuales sobre el precio de lista vigente al momento de realizarse la operación. Consulte con su Banco Emisor la eventual aplicación de cargos y/o seguros asociados a la operatoria en cuotas. Quedan excluidos de esta promoción los pagos realizados a través de Plataformas y/o Portales de pago (2) Plan Ahora 3, 6 ó 12: Otorga la posibilidad para el cliente de acceder a un plan de financiación de 3, 6 ó 12 cuotas fijas y mensuales, a su elección, sobre el precio de lista vigente al momento de realizarse la operación. Consulte en el comercio cuál es la tasa de interés aplicable al programa para cada plan de cuotas al momento de efectuarse la compra. Consulte con su Banco Emisor la eventual aplicación de cargos y/o seguros asociados a la operatoria en cuotas. Promoción aplicable solo para pagos con las tarjetas de crédito, emitidas en la República Argentina, a las que se encuentre adherido el comercio al momento del pago. No acumulable, no combinable, ni canjeable con otras operaciones. Renault Argentina S.A.. 30-50331781-4, F.J.S.M. de Oro 1744, CABA.</p>
                  <Image className="rounded" src="/promociones/mantenimiento.jpg" width="720" height="405" layout="responsive"/>
                  <p className="text-start font-bold">Contrato de mantenimiento - Desde el 02/05/2022 al 31/12/2022.</p>
                  <p className="text-start text-legales">Cartera de consumo y Comercial. Promoción válida en toda la red de concesionarios oficiales Renault de Argentina. Exclusivo para las operaciones ingresadas y aprobadas a partir del 01/08/2022 hasta el 31/08/2022 inclusive. Consulta la red de concesionarios oficiales en https://www.renault.com.ar/concesionarios.html. La promoción consiste en otorgar préstamo personal por Rombo Compañía Financiera S.A., mediante el cual el solicitante podrá adquirir de manera anticipada hasta los primeros tres servicios de mantenimiento (“Services”), según el plan de mantenimiento establecido para cada modelo. Consulta la web oficial en https://www.renault.com.ar/servicios/promociones.html. El solicitante podrá optar entre: a) la obtención de un préstamo personal para la adquisición de los primeros tres Services a realizar por su vehículo; b) la obtención de un préstamo personal para la adquisición del segundo y tercer Service, una vez realizado el primero exclusivamente de manera oficial en la Red Renault. La presente campaña es aplicable a todos los modelos: Alaskan, Kangoo, Sandero, Logan, Duster, Duster Oroch, Captur, Kwid y Koleos. En todos los casos, los Services contratados deberán ser realizados exclusivamente en el taller de postventa del concesionario Renault donde fuera adquirida/contratada la presente operación. A su vez, el solicitante deberá respetar el kilometraje establecido para cada Service en el plan de mantenimiento de cada modelo, o en su defecto realizar cada uno de los Services contratados dentro del plazo de 1 año desde realizado el inmediatamente anterior, de ambos lo que suceda primero. En todos los casos, los Services incluirán mano de obra y repuestos. La presente promoción no es acumulable, no combinable, ni canjeable con otras operaciones. Consulta los Taller Renault Minuto / Taller Oficial de la red de Concesionarios Renault en https://www.renault.com.ar/concesionarios.html Datos del Préstamo a contratar:Plazo 12 meses: Moneda: pesos. Tipo de Tasa: Fija. Tasa Nominal Anual (TNA): 0%. Tasa Efectiva Anual (TEA): 0%. Costo Financiero Total efectivo anual (CFT) 0%.Monto mínimo a financiar: $15000, Monto máximo a financiar: $250.000. El valor de la primera cuota podrá variar en caso en que los días contados desde la fecha de liquidación del préstamo a la fecha de vencimiento de dicha cuota, superen los 30 días. El CFTEA y las cuotas incluyen capital, intereses, IVA sobre intereses e impuestos. No incluye seguro del auto. El crédito está sujeto a la aprobación de Rombo Compañía Financiera S.A., cuyos accionistas limitan su responsabilidad según ley 19.550 y 25.738. Domicilio: Fray Justo Santa María de Oro 1744. CABA.La política de envío de e-mails de RENAULT ARGENTINA S.A. no incluye la solicitud de ningún tipo de información confidencial (como por ejemplo: claves personales, n° de cuentas, n° de tarjetas de crédito y/o débito, etc.), por lo tanto le sugerimos no enviar dicha información vía e-mail ni tampoco ingresarla en ningún sitio al que usted pueda acceder desde un link disponible dentro de un e-mail excepto que sea bajo el Dominio www.renaultcredit.com.ar.El titular de los datos puede ejercer su derecho de acceso a la información de sus datos, solicitarla rectificación, actualización o supresión, el retiro o bloqueo, total o parcial, de sus datos comunicándose con servicios de atención cliente a la casilla src-renault.argentina@renault.com Renault Argentina S.A., 30-50331781-4, F.J.S.M. DE ORO 1744, CABA.</p>
                </div>
            </div>
          <div className="md:w-4/12 w-full grid bg-black p-2 rounded h-fit">
              <FormsRombo tipo="planesVigentes" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default promociones
