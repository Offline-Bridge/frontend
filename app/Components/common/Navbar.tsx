import { navLinks } from "@/public/data/navlinks";
import Image from "next/image";
import Link from "next/link";

import { Wallet } from "lucide-react";
import { Button } from "./Button";



export default function Navbar() {
    return (
        <nav className="w-[93%] mx-auto bg-white/10 backdrop-blur-sm my-5 rounded-[10000px] py-6 px-10 flex items-center justify-between gap-10 font-sfPro " >

            <ul className="w-fit  flex items-center justify-evenly gap-5 " >
                {
                    navLinks.map((link, index) => (
                        <li
                            key={index}
                            className="text-base font-medium text-(--medium-gray) hover:text-[#5550D0] transition-all duration-300 ease-in-out "
                        >
                            <Link href={link.path} > {link.label} </Link>
                        </li>
                    ))
                }
            </ul>


            <Link href={"/"}>
                <Image src={"/images/logos/logo.svg"} alt="logo" height={100} width={500} className=" w-50 h-fit " />
            </Link>



            <div className=" w-fit flex items-center gap-6.25  " >
                <Button variant="secondary" >  Sign in</Button>
                <Button variant="primary" className="flex items-center justify-center gap-2.5 " ><Wallet size={17} /> Connect Wallet</Button>
            </div>



        </nav>
    )
}