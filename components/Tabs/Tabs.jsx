import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react'

export default function Example () {
  const data = [
    {
      label: 'Automóviles',
      value: 'automoviles',
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`
    },
    {
      label: 'Eléctricos',
      value: 'eléctricos',
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`
    },

    {
      label: 'Utilitarios',
      value: 'utilitarios',
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're 
      constantly trying to express ourselves and actualize our dreams.`
    },

    {
      label: 'Pick-Ups',
      value: 'pick-ups',
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`
    }
  ]

  return (
    <Tabs value="html">
      <TabsHeader className='flex-col lg:flex-row'>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc, img }) => (
          <TabPanel key={value} value={value}>
            {desc}
            <img src={`${img}`} alt="imgalt" />
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  )
}
