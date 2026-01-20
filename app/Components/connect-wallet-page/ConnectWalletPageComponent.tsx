import { ArrowRight } from "lucide-react";
import Image from "next/image";


export default function ConnectWalletPageComponent() {
    return (
        <div className="w-full min-h-screen h-fit flex items-center justify-center  py-28 px-[5%] font-sfPro " >
            <div className=" w-full max-w-2xl flex flex-col items-center justify-center gap-11  " >


                {/* ------------------------------------------------------------------------------------------------------- */}

                <div className=" w-full max-w-131.75 flex items-center flex-col gap-3 " >
                    <div className="size-25 bg-[linear-gradient(180deg,#155DFC_0%,#827AF2_135%)] rounded-[25px] flex items-center justify-center shadow-[0px_4px_7px_0px_#2B25AB40]  " >
                        <Image src={"/images/logos/logo-white.svg"} alt="icon" height={300} width={300} className="w-[58.5px] h-auto " />
                    </div>
                    <h2 className=" text-xl md:text-[40px] text-white font-bold " >Connect your wallet</h2>
                    <p className="text-[#90A1B9] font-normal text-lg " >Choose your preferred wallet to get started with Offline Bridge</p>
                </div>




                {/* -------------------------------------------------------------------------------------------- */}

                <div className="w-full flex flex-col items-start gap-8  " >


                    <div className=" flex flex-col items-center w-full gap-2 " >
                        <div className=" w-full flex items-center justify-between gap-10 " >
                            <small className=" text-[#90A1B9] text-sm font-normal " >Step 1 of 3</small>
                            <small className=" text-[#90A1B9] text-sm font-normal ">Connect Wallet</small>

                        </div>
                        <progress>he;;</progress>
                    </div>

                    {/* -------- */}
                    <div className="w-full flex flex-col items-start gap-4 " >


                        {/* Metamask button  */}
                        <button className="font-sfPro w-full flex items-center justify-between gap-5 bg-[linear-gradient(135deg,rgba(15,23,43,0.65)_0%,rgba(29,41,61,0.65)_100%)]  border-[0.67px] border-[#314158] py-6 px-4 rounded-[14px] cursor-pointer hover:scale-[101%] transition-all duration-300 ease-in-out  " >

                            <div className=" flex-3 flex items-center gap-4   " >
                                <Image src={"/"} alt="connector logo" width={300} height={300} className=" size-13 " />

                                <div className="w-fit flex flex-col items-start text-start  " >
                                    <h3 className=" text-white text-lg font-bold tracking-wider " >Metamask</h3>
                                    <p className="text-sm font-normal text-[#90A1B9] " >Connect using MetaMask browser extension</p>
                                </div>
                            </div>

                            <ArrowRight size={15} />

                        </button>


                        {/* WalletConnect button  */}
                        <button className="font-sfPro w-full flex items-center justify-between gap-5 bg-[linear-gradient(135deg,rgba(15,23,43,0.65)_0%,rgba(29,41,61,0.65)_100%)]  border-[0.67px] border-[#314158] py-6 px-4 rounded-[14px] cursor-pointer hover:scale-[101%] transition-all duration-300 ease-in-out  " >

                            <div className=" flex-3 flex items-center gap-4   " >
                                <Image src={"/"} alt="connector logo" width={300} height={300} className=" size-13 " />

                                <div className="w-fit flex flex-col items-start text-start  " >
                                    <h3 className=" text-white text-lg font-bold tracking-wider " >Coinbase Wallet</h3>
                                    <p className="text-sm font-normal text-[#90A1B9] " >Connect using MetaMask browser extension</p>
                                </div>
                            </div>

                            <ArrowRight size={15} />

                        </button>



                        {/* Coinbase Wallet button  */}
                        <button className="font-sfPro w-full flex items-center justify-between gap-5 bg-[linear-gradient(135deg,rgba(15,23,43,0.65)_0%,rgba(29,41,61,0.65)_100%)]  border-[0.67px] border-[#314158] py-6 px-4 rounded-[14px] cursor-pointer hover:scale-[101%] transition-all duration-300 ease-in-out  " >

                            <div className=" flex-3 flex items-center gap-4   " >
                                <Image src={"/"} alt="connector logo" width={300} height={300} className=" size-13 " />

                                <div className="w-fit flex flex-col items-start text-start  " >
                                    <h3 className=" text-white text-lg font-bold tracking-wider " >Trust Wallet</h3>
                                    <p className="text-sm font-normal text-[#90A1B9] " >Connect using MetaMask browser extension</p>
                                </div>
                            </div>

                            <ArrowRight size={15} />

                        </button>



                        {/* Trust Wallet button */}
                        <button className="font-sfPro w-full flex items-center justify-between gap-5 bg-[linear-gradient(135deg,rgba(15,23,43,0.65)_0%,rgba(29,41,61,0.65)_100%)]  border-[0.67px] border-[#314158] py-6 px-4 rounded-[14px] cursor-pointer hover:scale-[101%] transition-all duration-300 ease-in-out  " >

                            <div className=" flex-3 flex items-center gap-4   " >
                                <Image src={"/"} alt="connector logo" width={300} height={300} className=" size-13 " />

                                <div className="w-fit flex flex-col items-start text-start  " >
                                    <h3 className=" text-white text-lg font-bold tracking-wider " >Metamask</h3>
                                    <p className="text-sm font-normal text-[#90A1B9] " >Connect using MetaMask browser extension</p>
                                </div>
                            </div>

                            <ArrowRight size={15} />

                        </button>

                    </div>

                </div>





                {/*  ----------------------------------------------------------------------------------------------------------- */}
                <div className="w-full py-5 flex items-center justify-center text-center bg-[#1624564D] border-[0.5px] border-[#193CB84D] rounded-[14px] px-6 text-base font-normal text-[#CAD5E2] " >
                    <p>Your wallet connection is secure and encrypted. We never store your private keys.</p>
                </div>

            </div>
        </div>
    )
}