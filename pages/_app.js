import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
    <title>Hacktoberfest - 2022 [FLC]</title>
    <meta name="description" content="Hacktoberfest 2022 website of Finite Loop Club" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
