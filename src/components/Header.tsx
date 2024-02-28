import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import HeaderLinks from "./HeaderLinks";



export default function Header() {
  return (
    <header className="flex flex-col md:flex-row bg-walmart px-10 py-7 space-x-5 items-center">
        <Link href='/' className="mb-5 md:mb-0">
            <Image src='https://i.imgur.com/5V4wehM.png' alt='logo' width={150} height={150} style={{ width: 'auto', height: 'auto' }} priority/>
        </Link>
        <SearchBar/>
        <HeaderLinks/>
    </header>
  )
}
