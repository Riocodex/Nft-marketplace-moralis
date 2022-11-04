 import { ConnectButton } from "web3uikit";
 import Link from "next/link"


const Header = () => {
  return (
        <nav>
            <Link href="/">
                <a> NFT Marketplace</a>
            </Link>
            <ConnectButton/>
        </nav>
  )
}

export default Header
