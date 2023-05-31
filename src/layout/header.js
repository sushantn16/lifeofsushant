'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {

    const pathname = usePathname();

    return(
        <div className="header-container bg-black flex">
            <div className="branding text-white p-5"><Link href="/">LifeOfSushant</Link></div>
            
            <ul className="flex text-gray-400 font-medium justify-center">
                <li className={pathname == "/" ? "active text-white p-5" : "p-5 hover:text-white"}><Link href="/" >Home</Link></li>
                <li className={pathname == "/blogs" ? "active text-white p-5" : "p-5 hover:text-white"}><Link href="/blogs">Blogs</Link></li>
                <li className={...pathname == "/about-me" ? "active text-white p-5" : "p-5 hover:text-white"}><Link href="/about-me">About Me</Link></li>
            </ul>

        </div>
    )
}