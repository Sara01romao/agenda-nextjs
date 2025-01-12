'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IconType } from "react-icons";
import { IoMdMenu } from "react-icons/io";
import { PiCalendarDots, PiHouseLine, PiHouseSimple, PiUsersThree } from "react-icons/pi";


type menuType= {
    href: string;
    label: string;
    icon:IconType;
}

export default function Header(){

    const router = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState <boolean>(false)

    const menuItems:menuType[] = [
        { href: "/", label: "Início", icon: PiHouseSimple },
        { href: "/schedule", label: "Agenda", icon: PiCalendarDots},
        { href: "/clients", label: "Clientes", icon: PiUsersThree },
        { href: "/real-estate", label: "Imóveis", icon: PiHouseLine },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Alterna o estado
    };

    return(
        <header className="flex flex-col pt-4 px-3">
            <Image 
                src={"/logo.svg"} 
                width={102}
                height={51}
                priority
                alt="Logo Local" 
                className="m-auto mb-4"

            />
            <nav className="  bg-white m-auto max-w-3xl w-full p-5 px-7 rounded-2xl shadow-lg ">
                <button className="w-full hidden items-center gap-2 max-sm:flex" onClick={toggleMenu}>
                    <IoMdMenu size={36} />
                    Menu
                </button>

             
                <ul className={`${isMenuOpen ? "flex" : " max-sm:hidden"} flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:mt-3 `}>

                   {menuItems.map(({href,icon: Icon,label}) => 
                         <li key={href} className={`max-sm:w-full  duration-300 rounded-xl group ${router == href ? "bg-[#F6F6F6]" : ""} `}>
                        
                         <Link 
                             href={href} 
                             className={`max-sm:w-full py-2 px-3  flex items-center gap-1 text-lg group-hover:text-[#229BFF] ease-in duration-300 ${router == href ? "text-[#229BFF]" : "text-[#525252]"}`}
                         >
                             <Icon
                                 size={24} 
                                 className={` group-hover:text-[#229BFF] ease-in duration-300 ${router == href ? "text-[#229BFF]" : "text-[#525252]"}`}
                             />
                             {label}
                         </Link>
                     </li>

                   )}

               
                   
                </ul>
            </nav>
        </header>
    )
}