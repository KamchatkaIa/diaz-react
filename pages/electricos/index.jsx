import Layout from '../../components/Layout/Layout'
import dataElectricos from '../../json/dataElectricos'
import ListaAutos from '../../components/ListaAutos'
const automoviles = () => {
  return (
        <Layout title="Eléctricos">
          <div className="w-full flex flex-col justify-center items-center text-center mt-24 lg:mt-20">
          <h2 className="text-clamp-h2 font-bold py-6">ELECTRICOS</h2>
            {dataElectricos.map(({ value, autos }) => (
                <ListaAutos key={value} autos={autos} />
            ))}
          </div>
        </Layout>
  )
}

export default automoviles
