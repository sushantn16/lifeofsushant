'use client'
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="header-container flex justify-between md:justify-center p-5 md:pb-0">
        <div className="logo">
          <Link href="/">
            <Image src="/logo.svg" width={500} height={300} alt="Logo" />
          </Link>
        </div>
        <button
          className="hamburger-menu md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#EA3C12"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M3 12h18M3 6h18M3 18h18"></path>
          </svg>
        </button>
      </div>
      <div className="navigation-container hidden md:block">
        <ul className="flex text-orange font-medium justify-center text-xl">
          <li className={pathname === "/" ? "active font-bold p-5" : "p-5 hover:font-bold"}>
            <Link href="/">Home</Link>
          </li>
          <li className={pathname === "/blogs" ? "active font-bold p-5" : "p-5 hover:font-bold"}>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li className={pathname === "/about-me" ? "active font-bold p-5" : "p-5 hover:font-bold"}>
            <Link href="/about-me">About Me</Link>
          </li>
        </ul>
      </div>
      <div
        className={`navigation-container md:hidden absolute top-0 right-0 h-screen w-full bg-gold z-50 transition-transform ease-in-out duration-300 transform justify-between flex flex-col ${isMenuOpen ? "translate-x-0" : "hidden translate-x-full"}`}
      >
        <button
          className={`cross-button md:hidden absolute top-8 right-5 ${isMenuOpen ? "block" : "hidden"}`}
          onClick={closeMenu}
          aria-label="Close Menu"
        >
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#EA3C12" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ul className="flex text-orange font-medium flex-col items-center text-xl mt-10">
          <li className={pathname === "/" ? "active font-bold p-5" : "p-5 hover:font-bold"}>
            <Link href="/" onClick={closeMenu}>Home</Link>
          </li>
          <li className={pathname === "/blogs" ? "active font-bold p-5" : "p-5 hover:font-bold"}>
            <Link href="/blogs" onClick={closeMenu}>Blogs</Link>
          </li>
          <li className={pathname === "/about-me" ? "active font-bold p-5" : "p-5 hover:font-bold"}>
            <Link href="/about-me" onClick={closeMenu}>About Me</Link>
          </li>
        </ul>
        <Image className="p-10" src="/logo.svg" width={500} height={300} alt="Logo" />
      </div>
    </>
  );
}
