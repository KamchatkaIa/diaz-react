import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel
} from '@material-tailwind/react'

import dataTabs from '../../json/dataTabs'
import ListaAutos from '../ListaAutos'

export default function Example () {
  return (
    <Tabs value="automoviles">
      <TabsHeader className='flex-col lg:flex-row'>
        {dataTabs.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {dataTabs.map(({ value, autos }) => (
          <TabPanel key={value} value={value}>
            <ListaAutos autos={autos} />
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  )
}
