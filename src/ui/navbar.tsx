'use client'
import { poppins, poppinsSB } from "@/fonts/font"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

type Navbar = {
    notelp:string
}

export default function Navbar({notelp}:Navbar) {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return(
        <nav className="relative z-40">
            <div className="fixed top-0 right-0 left-0">
                <div className={`${poppins.className} flex justify-between px-10 py-4 bg-[#372415] rounded-b-xl shadow-lg/10`}>
                    <div className="flex items-center gap-2">
                    <Image
                        src="/logo.png"
                        alt="Logo Drafteraja"
                        width={24}
                        height={24}
                        className="object-contain"
                    />
                    <p className={`${poppinsSB.className} sm:text-[15px] text-[14px] md:text-[16px] lg:text-[18px] text-[#D0CECB] leading-none`}>
                        drafteraja
                    </p>
                    </div>
                <div className="flex justify-between lg:w-120 sm:mt-1 sm:w-80 w-45 text-[#D0CECB] lg:flex md:flex hidden">
                    <Link href="/#home" className="transition ease-in-out duration-200 hover:scale-110 sm:text-[13px] text-[11px] md:text-[16px] lg:text-[16px]">Home</Link>
                    <Link href="/#about" className="transition ease-in-out duration-200 hover:scale-110 sm:text-[13px] text-[11px] md:text-[16px] lg:text-[16px]">About</Link>
                    <Link href="/#product" className="transition ease-in-out duration-200 hover:scale-110 sm:text-[13px] text-[11px] md:text-[16px] lg:text-[16px]">Product</Link>
                    <Link href="/#contact" className="transition ease-in-out duration-200 hover:scale-110 sm:text-[13px] text-[11px] md:text-[16px] lg:text-[16px]">Contact</Link>
                </div>
                <a href={`https://wa.me/${notelp}`} className="sm:text-[13px] text-[13px] md:text-[16px] lg:text-[16px] transition hover:scale-105 duration-300 ease-in-out hover:from-[#6B21A8] hover:to-[#9333EA] px-5 sm:px-6 md:px-8 lg:px-8 rounded-lg pt-[3] sm:py-1 md:py-1 lg:py-1 bg-linear-65 from-[#E49313] to-[#FEEF4C] text-[#2A323F] text-[12px] lg:flex md:flex hidden">Contact Us!</a>
                <Menu size={24} onClick={handleClick} className="mt-[2px] flex lg:hidden md:hidden" color="#D0CECB"/>
                </div>

                <div className="relative z-50">
                <div className={`
                    fixed top-0 left-0 w-full bg-[#372415] text-[#D0CECB] px-10 py-5 rounded-b-lg
                    ${poppins.className} text-[16px] shadow-xl/20
                    transform transition-all duration-300 ease-in-out
                    ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
                `}>
                    <div className="flex justify-between mb-2">
                    <Link href="/#home">Home</Link>
                    <X onClick={handleClick} size={24} color="#D0CECB" />
                    </div>
                    <div className="mb-2"><Link href="/#about">About</Link></div>
                    <div className="mb-2"><Link href="/#product">Product</Link></div>
                    <div className="mb-2"><Link href="/#contact">Contact</Link></div>
                    {/* <div className="mb-2 text-[#CF8A3F]"><a onClick={handleClick} href="https://wa.me/6289666823165?text=Halo%2C%20mas.%20Saya%20ingin%20memesan%20Frozen food">Pesan</a></div> */}
                </div>
                </div>
            </div>
        </nav>
    )
}