"use client"

import { ArrowRight, RefreshCcw } from "lucide-react";
import { Button } from "../common/Button";
import React, { useRef, useState } from "react";
import { useAuthStore } from "@/store/auth-store";




export default function VerifyPhoneNumber() {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([])



    //   The input entry function
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
        const { value } = e.target

        if (isNaN(Number(value))) return;

        const newOtp = [...otp]
        newOtp[i] = value
        setOtp(newOtp)

        if (value && inputRefs.current[i + 1]) {
            inputRefs.current[i + 1]?.focus()
        }

    }


    //   The function to change input focus
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, i: number) => {
        if (e.key === "Backspace" && !otp[i] && i > 0) {
            inputRefs.current[i - 1]?.focus()
        }
    }





    // value to check if the inputs are all filled
    const isComplete = otp.every((digit) => digit !== "");





    return (
        <div className="w-full flex flex-col items-center gap-5">


            <div className="w-fit flex items-center justify-center gap-3 mt-5 " >

                {otp.map((data, index) => (
                    <input
                        type="text"
                        key={index}
                        ref={(el) => {
                            inputRefs.current[index] = el
                        }}
                        value={data}
                        maxLength={1}
                        onChange={(e) => handleChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        className=" size-10 md:size-14 rounded-[10px] border-[0.67px] border-[#31425D] bg-[#0F172B80] flex items-center justify-center text-lg md:text-[30px] text-center text-white font-medium
                        focus:ring-1 focus:ring-[#476AF7] outline-none
                        "
                    />
                ))}

            </div>

            <button className="flex items-center gap-1.5 text-sm text-[#51A2FF] font-normal cursor-pointer mb-4 " >
                <RefreshCcw size={17} /> Resend Code
            </button>

            <Button variant="primary" className={`rounded-[10px]! w-full! text-sm py-3  shadow-none tracking-wider ${isComplete ? "" : "bg-linear-to-r! from-[#314158] to-[#314158]"} `} > Verify & Continue <ArrowRight size={17} /></Button>


            <div className="w-full py-5 flex items-center justify-center text-center bg-[#1624564D] border-[0.5px] border-[#193CB84D] rounded-[14px] px-6 text-sm md:text-base font-normal text-[#CAD5E2] mt-5 " >
                <p>This phone number will be linked to your USSD wallet for offline access</p>
            </div>
        </div>
    )
}