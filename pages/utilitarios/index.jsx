import Layout from '../../components/Layout/Layout'
import dataUtilitarios from '../../json/dataUtilitarios'
import ListaAutos from '../../components/ListaAutos'
const utilitarios = () => {
  return (
        <Layout title="Utilitarios">
          <div className="w-full flex flex-col justify-center items-center text-center mt-24 lg:mt-20">
          <h2 className="text-clamp-h2 font-bold py-6">UTILITARIOS</h2>
            {dataUtilitarios.map(({ value, autos }) => (
                <ListaAutos key={value} autos={autos} />
            ))}
          </div>
        </Layout>
  )
}

export default utilitarios
