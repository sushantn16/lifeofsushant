'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {

    const pathname = usePathname();

    return (
        <>
            <div className="header-container flex justify-center p-5 pb-0">
                <div className="logo"><Link href="/"><Image src="/logo.svg" width={500} height={300} alt="Logo"/></Link></div>
            </div>
            <div>
                <ul className="flex text-orange font-medium justify-center text-xl">
                    <li className={pathname == "/" ? "active font-bold p-5" : "p-5 hover:font-bold"}><Link href="/" >Home</Link></li>
                    <li className={pathname == "/blogs" ? "active font-bold p-5" : "p-5 hover:font-bold"}><Link href="/blogs">Blogs</Link></li>
                    <li className={pathname == "/about-me" ? "active font-bold p-5" : "p-5 hover:font-bold"}><Link href="/about-me">About Me</Link></li>
                </ul>
            </div>
        </>
    )
}