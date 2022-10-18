import Layout from '../components/Layout/Layout'
import ReactMarkdown from 'react-markdown'

const legalesPlanes = ({ legales }) => {
  console.log(legales)
  return (
    <Layout title="Legales Planes" description="F. O. Diaz S.A., Concesionario Oficial Renault. Venta de autos 0km y planes de ahorro Plan Rombo. Accesorios y Service Oficial para tu Renault. Test Drive.">
      <div className="flex flex-col text-center flex-nowrap content-center justify-center items-center py-6">
        <h3 className="text-clamp-h2 font-bold">PLAN ROMBO</h3>
      </div>
      <div className="lg:mt-4 mt-2 w-full flex flex-col justify-center items-center text-center px-6 py-6">
        <h3 className="text-clamp-p font-bold">Términos legales</h3>
        <ReactMarkdown className="text-clamp-p2 text-start">{legales.data.attributes.Legales}</ReactMarkdown>

      </div>
    </Layout>
  )
}

export default legalesPlanes

export async function getStaticProps () {
  const data = await fetch(`${process.env.API_URL}/legales-plan`)
  const legales = await data.json()
  return {
    props: {
      legales
    }
  }
}
