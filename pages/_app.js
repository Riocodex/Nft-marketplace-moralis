import '../styles/globals.css'
import { MoralisProvider } from "react-moralis"
import Header from "../components/Header"
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <div>
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
    </div>
    
  )
    
}

export default MyApp
