import { useState } from 'react'
const FormsRombo = ({ tipo }) => {
  const [enviado, setEnviado] = useState(false)
  const [datos, setDatos] = useState({
    form: tipo || '',
    nombre: '',
    email: '',
    cod: '',
    tel: '',
    dni: '',
    typeClient: '',
    provincias: '',
    coments: '',
    condiciones: true
  })
  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }
  const handleChangeCheck = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: !datos.condiciones
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (datos.nombre.length > 2 && datos.email.length > 2) {
      fetch('http://localhost:1337/api/forms-rombos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: {
            Form: datos.form,
            NombreApellido: datos.nombre,
            Email: datos.email,
            Codigo: datos.cod,
            Telefono: datos.tel,
            Dni: datos.dni,
            TipoDeCliente: datos.typeClient,
            Provincia: datos.provincias,
            Comentarios: datos.coments,
            Condiciones: datos.condiciones
          }
        })
      })
        .then(response => response.json())
        .then(data => console.log(data))
      setTimeout(() => {
        setEnviado(true)
      }, 2000)
    } else {
      console.log('no enviado')
    }
  }

  return (
    <div className="mt-0 md:col-span-2">
    { enviado
      ? <div className="lg:mt-8 mt-0 p-1"><p className="text-green-400 text-clamp-p">Su consulta fué enviada.</p><p className="text-white text-clamp-p2">Nuestro horario de atención para consultas web es de lunes a sábado de 9 a 18 hs.</p></div>
      : <form action="#" method="POST" onSubmit={handleSubmit}>
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="bg-transparent px-2 py-3 sm:p-3">
            <div className="flex gap-y-4 flex-wrap col content-start justify-start items-start">
              <h4 className="text-clamp-title text-white text-start">Contactanos</h4>
              <div className=" w-full h-1 bg-amber-400"></div>
              <p className="text-white text-start text-clamp-p2">Estamos a tu disposición y deseamos responder a tu consulta rápidamente y con precisión. <br /> Por favor, completá la siguiente información.</p>
              {tipo
                ? <input type="hidden" name="tipo" value={tipo} />
                : null
              }
              <div className="w-full text-start">
                <input required
                  onChange={handleChange}
                  value={datos.nombre}
                  type="text"
                  name="nombre"
                  id="nombre"
                  placeholder="Nombre y Apellido"
                  autoComplete="given-name"
                  className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-400 focus:ring-amber-400 sm:text-sm"
                />
              </div>

              <div className="w-1/3 text-start">
                <div className="pr-2 w-full">
                  <input
                    onChange={handleChange}
                    value={datos.cod}
                    type="text"
                    name="cod"
                    id="cod"
                    placeholder="Cod. Area"
                    autoComplete="given-name"
                    className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-400 focus:ring-amber-400 sm:text-sm"
                  />
                </div>
              </div>

              <div className="w-2/3 text-start">
                <div className="w-full">
                  <input
                    onChange={handleChange}
                    value={datos.tel}
                    type="text"
                    name="tel"
                    id="tel"
                    placeholder="Teléfono"
                    autoComplete="given-name"
                    className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-400 focus:ring-amber-400 sm:text-sm"
                  />
                </div>
              </div>

              {tipo === 'imprimiTuCuota'
                ? <div className="w-full text-start">
                  <input required
                    onChange={handleChange}
                    value={datos.dni}
                    type="dni"
                    name="dni"
                    id="dni"
                    autoComplete="dni"
                    placeholder="DNI"
                    className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-400 focus:ring-amber-400 sm:text-sm"
                  />
                </div>
                : null
               }

              <div className="w-full text-start">
                <input required
                  onChange={handleChange}
                  value={datos.email}
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder="Email"
                  className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-400 focus:ring-amber-400 sm:text-sm"
                />
              </div>

              <div className="w-full text-start">
                <select required id="typeClient" name="typeClient" value={datos.typeClient} onChange={handleChange} className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-400 focus:ring-amber-400 sm:text-sm">
                  <option defaultValue="default">Tipo de Cliente</option>
                  <option value="particular" >Particular</option>
                  <option value="empresa" >Empresa</option>
                </select>
              </div>

              <select required name="provincias" id="provincias" value={datos.provincias} onChange={handleChange} className=" p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-400 focus:ring-amber-400 sm:text-sm" >
                   <option defaultValue="default" >Provincia</option>
                   <option value="Capital Federal">Capital Federal</option>
                   <option value="GBA Norte">GBA Norte</option>
                   <option value="GBA Sur">GBA Sur</option>
                   <option value="GBA Oeste">GBA Oeste</option>
                   <option value="Costa Atlántica">Costa Atlántica</option>
                   <option value="Buenos Aires">Buenos Aires</option>
                   <option value="Catamarca">Catamarca</option>
                   <option value="Chaco">Chaco</option>
                   <option value="Chubut">Chubut</option>
                   <option value="Cordoba">Cordoba</option>
                   <option value="Corrientes">Corrientes</option>
                   <option value="Entre Rios">Entre Rios</option>
                   <option value="Formosa">Formosa</option>
                   <option value="Jujuy">Jujuy</option>
                   <option value="La Pampa">La Pampa</option>
                   <option value="La Rioja">La Rioja</option>
                   <option value="Mendoza">Mendoza</option>
                   <option value="Misiones">Misiones</option>
                   <option value="Neuquen">Neuquen</option>
                   <option value="Rio Negro">Rio Negro</option>
                   <option value="Salta">Salta</option>
                   <option value="San Juan">San Juan</option>
                   <option value="San Luis">San Luis</option>
                   <option value="Santa Cruz">Santa Cruz</option>
                   <option value="Santa Fe">Santa Fe</option>
                   <option value="Santiago del Estero">Santiago del Estero</option>
                   <option value="Tierra del Fuego">Tierra del Fuego</option>
                   <option value="Tucuman">Tucuman</option>
                 </select>

                 <textarea placeholder="Comentarios" type="text" name="coments" id="coments" title="Comentarios" value={datos.coments} onChange={handleChange} className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-400 focus:ring-amber-400 sm:text-sm"></textarea>

                 <input className="w-1/12" type="checkbox" name="condiciones" id="condiciones" value="true" onChange={handleChangeCheck} checked={datos.condiciones} />
                 <label htmlFor="condiciones" className="text-start w-11/12 block text-white text-clamp-p3 lg:text-xs">(*) Acepto recibir información en mi dirección de correo electrónico.</label>
            </div>
          </div>
          <div className=" px-4 py-3 text-right sm:px-6">
            <button
              type="submit"
              className="w-full inline-flex justify-center rounded-md border border-transparent bg-amber-400 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    }

    </div>
  )
}

export default FormsRombo
