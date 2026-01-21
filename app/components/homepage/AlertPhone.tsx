"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import MessageBar from "./MessageBar";
import { alerts } from "@/public/data/Alerts";



export default function AlertPhone() {
    const [latestMessage, setLatestMessage] = useState(3)


    useEffect(() => {
        const interval = setInterval(() => {
            setLatestMessage(prev => (prev % 3) + 1);
        }, 2000)

        return () => clearInterval(interval)
    })


    return (
        <div className="w-full  max-w-105 flex items-center justify-center  relative font-sfPro  " >

            <Image src={"/images/abstract-images/alertPhone.svg"} alt="phone" width={1000} height={1000} className="  w-md  h-fit " />




            <div className="absolute  top-[52%] translate-y-[-50%] left-[50%] translate-x-[-50%]  h-fit w-full max-w-100 " >

                <div className=" w-full h-fit relative bg-amber-950  " >

                    {/* Message text  */}
                    {
                        alerts.map((data, index) => (
                            <MessageBar
                                latestMessage={latestMessage}
                                data={data}
                                key={index} />
                        ))
                    }



                </div>

            </div>

        </div>
    )
}