import '../styles/globals.css'
import { MoralisProvider } from "react-moralis"
import Header from "../components/Header"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NFT Marketplace</title>
        <meta name="description" content="NFT Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* initalizeOnMoun = false cuz we dont want servers */}
    <MoralisProvider initializeOnMount={false}>
        <Header/>
        <Component {...pageProps} />
    </MoralisProvider>
    </>
    
  )
    
}

export default MyApp
