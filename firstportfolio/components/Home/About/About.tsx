"use client"

import generateProgressBar from "@/components/Helper/GenerateProgressBar";
import SectionHeading from "@/components/Helper/SectionHeading";
import { aboutInfo } from "@/Data/data";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";

export default function About() {
    const [progress, setProgress] = useState(0);

    useEffect(()=> {
        const interval = setInterval(()=> {
            setProgress((prev)=> (prev >= 100 ? 0 : prev +1));
        }, 100); // vitesse (100ms entre chaque étape)
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="pt-16 pb-16 bg-[#01194A]">
            {/* SectionHeading*/}
            <SectionHeading>About Me</SectionHeading>
            <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
                {/* Text Content*/}
                <div>
                    <h1 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-mono text-gray-200"> 
                        {aboutInfo.title} 
                        </h1>
                        <p className="mt-6 mb-6 text-base text-white">
                            {aboutInfo.description}
                            </p>
                            <div className="flex items-center space-x-2 mb-6">
                                <div className="w-7 bg-blue-800 flex flex-col items-center justify-center">
                                    <FaCheck className="text-white"/>
                                </div>
                                <p className="text-sm sm:text-base md:text-lg font-mono text-gray-300">
                                    Frontend Development
                                    </p>
                            </div>
                             <div className="flex items-center space-x-2 mb-6">
                                <div className="w-7 bg-green-800 flex flex-col items-center justify-center">
                                    <FaCheck className="text-white"/>
                                </div>
                                <p className="text-sm sm:text-base md:text-lg font-mono text-gray-300">
                                    Data
                                    </p>
                            </div>
                </div>
                {/* Stats Content*/}
                <div className="grid grid-cols-2 gap-16 items-center lg:mx-auto">
                    <div>
                        <Image 
                        src="/image/experience.png" 
                        alt="image" 
                        width={80} 
                        height={80}
                        className="mx-auto"
                        />
                        <p className="mt-3 font-mono text-xl text-white text-center">
                            {aboutInfo.experience}
                        </p>
                        <p className="text-base sm:text-lg text-gray-400 text-center">
                            Year Experience
                        </p>
                    </div>
                    <div>
                        <div className="mx-auto text-sm text-[#a3e635] text-center w-61 ">
                                {generateProgressBar(progress)}
                        </div>
                        <p className="mt-3 font-mono text-xl text-white text-center">
                            {aboutInfo.academicProject}
                        </p>
                        <p className="text-base sm:text-lg text-gray-400 text-center">
                            Loading Academic Project
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};