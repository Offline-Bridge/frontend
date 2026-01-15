"use client"

import { Delete, Phone, WifiOff } from "lucide-react";
import Image from "next/image";
import { useState } from "react";




export default function DialPad() {
    const [code, setCode] = useState<string>("")


    // Function to play key sound
    const playKeySound = () => {
        let sound = "/sounds/phone-keypad-button-dial-ni-sound-1-1-00-00.mp3";

        const audio = new Audio(sound);
        audio.currentTime = 0;
        audio.play();

    };


    // Click function: it plays the sound and then sets the input code if input character length < 5
    const handleClick = (val: string) => {
        if (code.length < 5) {
            playKeySound()
            setCode(prev => prev + val);
        }

        return;
    }



    // This delete function
    const handleDelete = () => {
        setCode(prev => prev.slice(0, -1))
    }







    return (
        // wraps the dialpad and the hand
        <div className="w-full max-w-77 lg:max-w-80 z-10  h-fit flex flex-col relative " >


            {/* This is the dial pad (phone) interface  */}
            <form className=" w-full py-7 pb-20 px-5 flex flex-col items-center gap-10 border border-white rounded-3xl bg-[#0379D933] backdrop-blur-sm font-sfPro z-10  " >
                <div className=" w-full flex items-center justify-between gap-10  " >
                    <small>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</small>
                    <WifiOff size={20} />
                </div>


                <div className="font-sfPro flex items-center justify-between w-full gap-5 " >

                    <button
                        type="submit"
                        aria-label="dial"
                        className="size-12 shrink-0 shadow-[inset_0_0_10px_0_#7091E3D9] backdrop-blur-[100px] flex items-center justify-center rounded-full bg-[#1D3589CC] py-3 px-2 font-normal text-xl text-[#7091E3] cursor-pointer hover:brightness-150 duration-100 ease-in-out"
                    >
                        <Phone size={20} />
                    </button>


                    <input
                        value={code}
                        readOnly
                        className=" text-white w-full max-w-17.5  text-center outline-none text-xl font-semibold  "
                    />

                    <button
                        onClick={handleDelete}
                        type="button"
                        aria-label="delete"
                        className=" cursor-pointer hover:text-[#1D3589CC] transition-all duration-100 ease-in-out outline-none " >
                        <Delete size={20} />
                    </button>
                </div>

                <span className="w-full border-b border-white " />

                {/* The key pad  */}
                <div className="w-full max-w-52 mx-auto grid grid-cols-3 gap-y-1 gap-x-2.5 place-items-center justify-items-center justify-center font-open-sans z-30 ">
                    {Array.from({ length: 9 }, (_, i) => i + 1).map(num => (
                        <button
                            key={num}
                            type="button"
                            aria-label={String(num)}
                            onClick={() => {
                                handleClick(String(num))
                            }}
                            disabled={code.length >= 5}
                            className="w-full h-full disabled:pointer-events-none flex items-center justify-center bg-[#0379D94D] py-3 px-2 font-normal text-xl text-white cursor-pointer hover:brightness-150 duration-100 ease-in-out active:scale-80 "
                        >
                            {num}
                        </button>
                    ))}

                    {["*", 0, "#"].map((specialChar, i) => (
                        <button
                            key={i}
                            type="button"
                            aria-label={String(specialChar)}
                            onClick={() => {
                                handleClick(String(specialChar))
                            }}
                            disabled={code.length >= 5}
                            className="w-full h-full disabled:pointer-events-none flex items-center justify-center bg-[#0379D94D] py-3 px-2 font-normal text-xl text-white cursor-pointer hover:brightness-150 duration-100 ease-in-out active:scale-80"
                        >
                            {specialChar}
                        </button>
                    ))}
                </div>

            </form>



            {/* This is the hand image  */}
            <Image src={"/images/abstract-images/Hand_PressHR 1.svg"} alt="hand" height={1000} width={1000} className=" w-full max-w-60 lg:max-w-77  z-10 -mt-25  " />

        </div>
    )
}