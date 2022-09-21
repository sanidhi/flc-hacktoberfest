import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
    <title>Hacktoberfest - 2022 [FLC]</title>
    <meta name="description" content="Hacktoberfest 2022 website of Finite Loop Club" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <Navbar />
  <Component {...pageProps} />
  <Footer />
  </>
  )
}

export default MyApp
