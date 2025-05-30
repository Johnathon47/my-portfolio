"use client";

import { navLinks } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

// define props type

type Props = {
    openNav:()=>void
}

export default function Nav({ openNav }: Props) {
    const [navBg, setNavBg] = useState(false);

    useEffect(()=>{
        const handler = () => {
            if(window.scrollY >= 90){
                setNavBg(true);
            }
            if(window.scrollY < 90){
                setNavBg(false);
            }
        };

        window.addEventListener("scroll", handler);

        return () => {
            window.removeEventListener("scrolle", handler);
        };
    }, []);

    return (
        <div className={`fixed ${navBg ? "bg-[#01194A]":"fixed"
        } h-[12vh] z-[10] w-full transition-all duration-200`}>
            <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
                {/* LOGO */}
                <Image 
                src="/image/logo_hei.png" 
                alt="LOGO HEI MY UNIVERSITY" 
                width={100} height={100} 
                className="ml-0 sm:ml-0 "
                />
                {/* Nav links */}
                <div className="flex items-center space-x-10">
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((navlink)=>{
                        return <Link key={navlink.id} href={navlink.url}>
                            <p className="nav_link">{navlink.label}</p>
                        </Link>
                    })}
                    </div>
                    {/* Button */}
                    <div className="flex items-center space-x-4">
                        <button className="bg-[#E2A01A] text-white font-bold px-6 py-2 rounded-lg shadow-lg shadow-[#E2A01A]/50 hover:shadow-xl hover:scale-105 transition-all duration-300">
                            Hire me
                        </button>
                        {/* Burger*/}
                        <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-white lg:hidden" />
                    </div>
                </div>
            </div>
        </div>
    )
}