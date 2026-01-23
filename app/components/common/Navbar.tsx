"use client"

import { navLinks } from "@/public/data/navlinks";
import Image from "next/image";
import Link from "next/link";
import { Wallet } from "lucide-react";
import { Button } from "./Button";
import { useEffect, useRef, useState } from "react";



export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false)
    const [navbarHeight, setNavbarHeight] = useState(0)
    const navRef = useRef<HTMLElement>(null)



    useEffect(() => {
        // Calculating the navbar height
        if (navRef.current) {
            setNavbarHeight(navRef.current.offsetHeight)
        }

        const handleResize = () => {
            if (navRef.current) {
                setNavbarHeight(navRef.current.offsetHeight)
            }
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)

    }, [])


    useEffect(() => {

        document.body.style.overflowY = showMenu ? "hidden" : "auto";

        return () => {
            document.body.style.overflowY = "auto"
        }

    }, [showMenu])




    return (
        <nav className="w-full relative font-sfPro  " >
            <header
                ref={navRef}
                className="w-[93%] mx-auto bg-white/10 backdrop-blur-sm my-5 rounded-[10000px] py-6 px-5 lg:px-10 flex items-center justify-between gap-10  z-50  " >

                <ul className="w-fit hidden lg:flex items-center justify-evenly gap-5 " >
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



                <div className=" w-fit hidden lg:flex items-center gap-6.25  " >
                    <Button variant="secondary" >  Sign in</Button>
                    <Link href={"/connect-wallet"} >   <Button variant="primary" className="flex items-center justify-center gap-2.5 " ><Wallet size={17} /> Connect Wallet</Button></Link>
                </div>



                {/*mobile device menu button  */}
                <button
                    onClick={() => setShowMenu(!showMenu)}
                    className={`size-[26.85px] md:size-10 outline-none rounded-full flex lg:hidden items-center justify-center  relative p-1  group border ${showMenu ? "border-[#FFFFFF40] bg-transparent " : "  bg-[#D6DEED] border-transparent"}   transition-all duration-200 ease-in-out cursor-pointer `} >

                    <span className={`w-[60%] p-0.5  rounded-[1px] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] ${showMenu ? "rotate-45 bg-[#D6DEED]" : "bg-[#000000]"}  cursor-pointer transition-all duration-300 ease-in-out `} />
                    <span className={`w-[60%] p-0.5  rounded-[1px] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] ${showMenu ? "-rotate-45 bg-[#D6DEED]" : "bg-[#000000]"}  cursor-pointer transition-all duration-300 ease-in-out`} />

                </button>





            </header>

            {/* Mobile dropdown menu  */}
            <div
                style={{
                    top: `${navbarHeight}px`,
                    height: `calc(100vh - ${navbarHeight}px)`
                }}
                className={`fixed left-0 right-0  bg-background lg:hidden overflow-y-auto overflow-x-hidden transition-all duration-300 ease-in-out z-50 ${showMenu ? "py-4 translate-x-0 " : "py-4 translate-x-full "} `}
            >


                <div className=" w-full py-3 md:py-6 px-2 bg-[#155DFC] flex items-center justify-evenly gap-6.25  " >
                    <Button variant="secondary" className="border border-[#0000000D]! hover:bg-[#0000000D]! " >  Sign in</Button>
                    <button className="flex items-center justify-center gap-2.5 bg-[#D6DEED] text-[#155DFC] px-6 py-2 rounded-[25px] font-medium  transition-all duration-200 cursor-pointer " ><Wallet size={17} /> Connect Wallet</button>
                </div>


                <ul className={`flex flex-col items-center gap-10 px-6 font-semibold ${showMenu ? " py-5 md:py-10" : "py-5"}`}>
                    {navLinks.map((link, index) => (
                        <li key={index} className="w-full pb-3 md:pb-6 text-[#D6DEED]  cursor-pointer text-xl md:text-4xl font-medium border-b border-[#FFFFFF] hover:text-[#5550D0] transition-all duration-300 ease-in-out " onClick={() => setShowMenu(false)}>
                            <Link href={link.path} >{link.label}</Link>
                        </li>
                    ))}

                    <li className="w-full pb-3 md:pb-6 text-[#D6DEED]  cursor-pointer text-xl md:text-4xl font-medium border-b border-[#FFFFFF] hover:text-[#5550D0] transition-all duration-300 ease-in-out " onClick={() => setShowMenu(false)}>
                        <Link href="/" >Contact Us</Link>
                    </li>
                </ul>



                <div className="w-full flex items-center justify-between gap-8.25 px-5 " >

                    <div className="w-full flex-3/4 flex items-start flex-col gap-6.75 ">
                        <p className=" text-[10px] font-normal text-[#D6DEED] " >Making crypto accessible to everyone,
                            everywhere. Send and receive digital
                            payments from any phone.</p>

                        <small className="flex flex-col  items-start text-[10px] font-normal text-[#D6DEED] opacity-50 "  >
                            <span>© 2026 Offline Bridge.</span>
                            <span>All rights reserved.</span>
                        </small>



                    </div>





                    <ul className="flex items-end flex-col gap-2 text-[#D6DEED] underline text-xs font-medium flex-1/4 opacity-50 " >
                        <li>Created by:</li>
                        <li>@dannyclassi_c</li>
                        <li>@uiuxbyvicko</li>
                        <li>Ugochukwu</li>
                        <li>Nedu</li>
                    </ul>

                </div>


            </div>

        </nav>
    )
}