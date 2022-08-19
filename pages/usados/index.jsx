import Layout from '../../components/Layout/Layout'
import Carousel from '../../components/Carousel'
export default function Usados () {
  const images = [
    { img: '1' },
    { img: '2', link: 'usados', pBoton: 'Comprar2', title: 'Compra tu Usado 2', p: 'Los mejores precios del Mercado 2' },
    { img: '3', link: 'usados', pBoton: 'Comprar3', title: 'Compra tu Usado 3', p: 'Los mejores precios del Mercado 3' }
  ]
  return (
    <Layout title="Usados" description="F. O. Diaz S.A., Concesionario Oficial Renault. Venta de autos 0km y planes de ahorro Plan Rombo. Accesorios y Service Oficial para tu Renault. Test Drive.">
      <div className="mt-24 lg:mt-20">
        <Carousel images={images} autoPlay={true} showButtons={false} interval={3000}/>
      </div>
    </Layout>
  )
}
