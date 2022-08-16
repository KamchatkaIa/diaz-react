import Head from 'next/head'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import Footer from './Footer'
const Layout = ({ children, title, description }) => {
  return (
        <>
            <Head>
                <title>{`Diaz Renault S.A. | ${title}`}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DesktopNav />
            <MobileNav />
            <div>
                {children}
            </div>
            <Footer/>
        </>
  )
}

Layout.defaultProps = {
  title: 'Diaz Renault S.A.',
  description: 'Diaz S.A. es una empresa de servicios de automotores que se dedica a la venta y reparación de vehículos de todo tipo, con una amplia gama de modelos y marcas.'
}

export default Layout
