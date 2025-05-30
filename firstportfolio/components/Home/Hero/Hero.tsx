import { BaseInfo } from "@/Data/data";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";

export default function Hero() {
    return (
        <div className="w-full pt-[4vh] md:pt-[12] h-screen bg-[#01194A] overflow-hidden relative ">
            <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                    {/* Text Content */}
                    <div>
                        {/* Sub Heading */}
                        <h1 className="text-2xl md:text-3xl lg:text-4xl mb-5 text-[#a3e635] font-mono">
                            I am {BaseInfo.fullName} 👾
                        </h1>
                        {/* Title*/}
                        <h1 className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-mono md:leading-[3rem]
                        lg:leading-[3.5rem] xl:leading-[4rem] text-white"> 
                        {BaseInfo.position} 
                        </h1>
                        {/* Description*/}
                        <p className="mt-6 text-sm md:text-base text-white text-opacity-60"> 
                            {BaseInfo.description} 
                        </p>
                        {/* Button */}
                        <button className="mt-7 bg-[#E2A01A] text-white font-bold px-6 py-2 rounded-lg shadow-lg shadow-[#E2A01A]/50 hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <span>Download CV</span>
                            <FaDownload/>
                        </button>
                    </div>
                    {/* Image content */}
                    <div className="mx-auto hidden lg:block rounded-[2rem] border-[4px] border-[#E2A01A] bg-[#111] p-2 shadow-[6px_6px_0_#E2A01A] overflow-x-hidden">
                        <Image 
                        src={BaseInfo.profilePic} 
                        alt={BaseInfo.fullName} 
                        width={500} 
                        height={500}
                        className="rounded-[1.5rem] grayscale hover:grayscale-0 transition duration-500 " />
                    </div>
                </div>
            </div>
        </div>
    )
}