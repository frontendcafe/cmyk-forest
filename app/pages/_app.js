import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  console.log('Está andando')

  return <Component {...pageProps} />
}

export default MyApp
