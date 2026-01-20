"use client"

import Image from "next/image";
import WalletOptions from "./WalletOptions";
import { useState } from "react";
import ProfileForm from "./ProfileForm";
import VerifyPhoneNumber from "./VerifyPhoneNumber";


export default function ConnectWalletPage() {

    const [currentStep, setCurrentStep] = useState(3) // Change the current step value to either 1, 2, or 3 to view the current step

    const stepTitle = (step: number) => {
        switch (step) {
            case 1:
                return "Connect Your Wallet";

            case 2:
                return "Complete Your Profile";

            case 3:
                return "Verify Your Phone";
        }

    }


    const stepDescription = (step: number) => {
        switch (step) {
            case 1:
                return "Choose your preferred wallet to get started with Offline Bridge";

            case 2:
                return "Help us personalize your experience";

            case 3:
                return "We sent a code to 08131849363"
        }

    }


    const stepTag = (step: number) => {
        switch (step) {
            case 1:
                return "Connect Wallet";

            case 2:
                return "Complete Profile";

            case 3:
                return "Verify Your Phone"
        }
    }


    const progressWidth = (currentStep: number) => {
        return `${(currentStep / 3) * 100}%`
    }

    return (
        <div className="w-full min-h-screen h-fit flex items-center justify-center  py-28 px-[5%] font-sfPro " >
            <div className=" w-full max-w-2xl flex flex-col items-center justify-center gap-11  " >


                {/* ------------------------------------------------------------------------------------------------------- */}

                <div className=" w-full max-w-131.75 flex items-center flex-col gap-3 " >
                    <div className=" size-16 md:size-25 bg-[linear-gradient(180deg,#155DFC_0%,#827AF2_135%)] rounded-[10px] md:rounded-[25px] flex items-center justify-center shadow-[0px_4px_7px_0px_#2B25AB40]  " >
                        <Image src={"/images/logos/logo-white.svg"} alt="icon" height={300} width={300} className=" w-[39.5px] md:w-[58.5px] h-auto " />
                    </div>
                    <h2 className=" text-xl md:text-[40px] text-white font-bold  " > {stepTitle(currentStep)} </h2>
                    <p className="text-[#90A1B9] font-normal text-base md:text-lg text-center " > {stepDescription(currentStep)} </p>
                </div>




                {/* -------------------------------------------------------------------------------------------- */}

                <div className="w-full flex flex-col items-start gap-8  " >


                    <div className=" flex flex-col items-center w-full gap-2 " >
                        <div className=" w-full flex items-center justify-between gap-10 " >
                            <small className=" text-[#90A1B9] text-sm font-normal " >Step {currentStep} of 3</small>
                            <small className=" text-[#90A1B9] text-sm font-normal "> {stepTag(currentStep)} </small>
                        </div>

                        <div className="w-full bg-[#1D293D] rounded-[22px] h-2 overflow-hidden relative   " >
                            <span
                                style={{ width: progressWidth(currentStep) }}
                                className={`absolute block h-full  bg-linear-to-b from-[#155DFC] to-[#827AF2] rounded-[22px] `} />
                        </div>

                    </div>

                    {/* -------- */}


                    {
                        currentStep === 1 ? <WalletOptions /> :
                            currentStep === 2 ? <ProfileForm /> :
                                <VerifyPhoneNumber />
                    }

                </div>





            </div>
        </div>
    )
}