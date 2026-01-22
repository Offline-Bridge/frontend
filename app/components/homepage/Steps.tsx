import Image from "next/image";
import AlertPhone from "./AlertPhone";





export default function Steps() {
    return (
        <section className=" w-full flex flex-col items-center justify-center gap-22 my-20 font-sfPro " >

            <Image src={"/images/logos/logo.svg"} alt="logo" height={100} width={500} className=" w-50 h-fit opacity-65 " />


            <div
                className="w-full aspect-square flex flex-col items-center justify-evenly gap-10  bg-background rounded-full py-20 px-2  big-circle  " >

                <AlertPhone />



                <div className="w-full px-[8%] flex items-center justify-center  " >
                    <Image src={"/images/abstract-images/ProcessFlow.svg"} width={1000} height={1000} alt="process flow" className=" w-full max-w-8xl h-fit   " />

                </div>




                <div className=" w-full  max-w-113 flex items-center justify-center flex-col gap-2.5 text-center px-[8%] md:px-0   " >
                    <h3 className=" font-medium text-[30px] md:text-[60px] lg:text-[80px] text-[#D6DEED] " >How It Works</h3>
                    <p className=" font-normal text-base md:text-lg lg:text-xl text-[#FFFFFFB2] " >Get started in minutes and start making crypto
                        payments from any phone.</p>
                </div>
            </div>

        </section>
    )
}