import Image from "next/image";

export default function Nav() {
    return (
        <div className="fixed h-[12vh] z-[10] bg-blue-950 w-full">
            <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
                {/* LOGO */}
                <Image src="/image/logo_hei.png" alt="LOGO HEI MY UNIVERSITY" width={100} height={100} className="ml-[-1.5rem] sm:ml-0 "/>
            </div>
        </div>
    )
}