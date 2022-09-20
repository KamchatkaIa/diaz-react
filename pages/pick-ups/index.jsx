import Layout from '../../components/Layout/Layout'
import dataPickups from '../../json/dataPickups'
import ListaAutos from '../../components/ListaAutos'
const automoviles = () => {
  return (
        <Layout title="Pick Ups">
          <div className="w-full flex flex-col justify-center items-center text-center mt-24 lg:mt-20">
          <h2 className="text-clamp-h2 font-bold py-6">PICK UPS</h2>
            {dataPickups.map(({ value, autos }) => (
                <ListaAutos key={value} autos={autos} />
            ))}
          </div>
        </Layout>
  )
}

export default automoviles
