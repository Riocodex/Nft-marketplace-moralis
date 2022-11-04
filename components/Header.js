 import { ConnectButton } from "web3uikit";
 import Link from "next/link"


const Header = () => {
  return (
        <nav className="p-5 border-b-2 flex flex-row justify-between items-center">
            <h1 className="py-4 px-4 font-bold text-3xl">NFT Marketplace</h1>
           <div className="flex flex-row items-center">
           <Link href="/">
                    <p className="mr-4 p-6">Home</p>
                </Link>
                <Link href="/sell-nft">
                   <p className="mr-4 p-6">Sell NFT</p>
                </Link>
            <ConnectButton moralisAuth={false}/>
            {/* i put moralis auth off above to ensure we do not connect with moralis database */}
           </div>
        </nav>
  )
}

export default Header
