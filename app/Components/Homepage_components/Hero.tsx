import Image from "next/image";
import DialPad from "./Dialpad";



export default function Hero() {
    return (
        <section className=" w-full  lg:h-[138vh] relative  overflow-hidden flex flex-col items-center justify-between gap-20 pt-28 font-sfPro " >

            <div className=" w-full max-w-4xl  flex flex-col items-center justify-center gap-3 md:gap-2.5 text-center px-4 md:px-0" >



                {/* Web Accessibility switch UI  */}
                <div
                    className="w-fit rounded-full bg-[linear-gradient(90deg,rgba(214,222,237,0.1)_0%,rgba(214,222,237,0)_100%)]  p-0.5 z-10 mb-6 flex items-center justify-center "
                >
                    <div className=" bg-[#2A2929CC] rounded-[25px] flex items-center p-0.5 pl-5 justify-between text-sm md:text-base font-normal gap-6   " >
                        <h5  >Web3 Accessibility </h5>
                        <span className=" h-full rounded-[25px] bg-[#3A3939CC]  py-3 px-5 " >Offline</span>
                    </div>
                </div>



                <h1 className=" text-3xl md:text-[40px] lg:text-[80px] font-medium lg:leading-22.5  " >Send Crypto Without <span className="bg-linear-to-b from-[#827CFF] to-[#5550D0] bg-clip-text text-transparent" >Internet or Smartphones</span>
                </h1>

                <p className=" text-sm md:text-xl font-normal text-white w-full max-w-176  " >Make crypto payments from any phone using simple USSD codes. No internet
                    connection needed, no complex apps required.</p>
            </div>




            <Image src={"/images/abstract-images/wave.svg"} alt="wave" height={1500} width={1500} className=" w-full h-[75%] object-cover object-center absolute bottom-0 left-0   " />


            {/* glowing light  */}
            <div
                style={{
                    background: "radial-gradient(#CAC1FF, #2B25AB , #2B25AB)",
                    boxShadow: `
      0 0 1000px 60px #2B25AB,
      0 0 1000px 60px #2B25AB,
      0 0 1000px 90px #2B25AB
    `,
                    backdropFilter: "blur(300px)",
                }}
                className="w-[75%] aspect-square rounded-full absolute  bottom-[-15%] md:bottom-[-70%] lg:bottom-[-65%] left-[50%] translate-x-[-50%] "
            />

            <DialPad />
        </section>
    )
}