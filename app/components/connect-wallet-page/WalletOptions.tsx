import { useAuthStore } from "@/store/auth-store";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useConnect, useConnectors } from "wagmi";








export default function WalletOptions() {

    // const { currentStep, nextStep, prevStep } = useAuthStore();
    const { connect } = useConnect()
    const connectors = useConnectors()

    const metaMaskConnector = connectors.find(
        (connector) => connector.name === "MetaMask"
    )

    const walletConnectConnector = connectors.find(
        (connector) => connector.name === "WalletConnect"
    )

    const coinbaseConnector = connectors.find(
        (connector) => connector.name === "Coinbase Wallet"
    )

    const trustWalletConnector = connectors.find(
        (connector) => connector.name === "Trust Wallet"
    )

    return (
        <>
            <div className="w-full flex flex-col items-start gap-4 " >

                {/* Metamask button  */}
                <button
                    onClick={() => {
                        if (!metaMaskConnector) return;
                        connect({ connector: metaMaskConnector });
                    }}
                    className="font-sfPro w-full flex items-center justify-between gap-5 bg-[linear-gradient(135deg,rgba(15,23,43,0.65)_0%,rgba(29,41,61,0.65)_100%)]  border-[0.67px] border-[#314158] py-6 px-4 rounded-[14px] cursor-pointer hover:scale-[101%] transition-all duration-300 ease-in-out  " >
                    <div className=" flex-3 flex items-center gap-4   " >
                        <div className=" bg-[#F2F8FF] size-13 flex items-center justify-center rounded-[10px]  " >
                            <Image src={"/images/logos/metamask-logo.svg"} alt="connector logo" width={300} height={300} className=" size-8 " />
                        </div>

                        <div className="w-fit flex flex-col items-start text-start  " >
                            <h3 className=" text-white text-base md:text-lg font-bold tracking-wider " >Metamask</h3>
                            <p className="text-sm font-normal text-[#90A1B9] " >Connect using MetaMask browser extension</p>
                        </div>
                    </div>

                    <ArrowRight size={15} />

                </button>


                {/* WalletConnect button  */}
                <button
                    className="font-sfPro w-full flex items-center justify-between gap-5 bg-[linear-gradient(135deg,rgba(15,23,43,0.65)_0%,rgba(29,41,61,0.65)_100%)]  border-[0.67px] border-[#314158] py-6 px-4 rounded-[14px] cursor-pointer hover:scale-[101%] transition-all duration-300 ease-in-out  " >

                    <div className=" flex-3 flex items-center gap-4   " >
                        <div className=" bg-[#3C99F7] size-13 flex items-center justify-center rounded-[10px]  ">
                            <Image src={"/images/logos/wallet-connect-logo.svg"} alt="connector logo" width={300} height={300} className=" size-9 " />
                        </div>

                        <div className="w-fit flex flex-col items-start text-start  " >
                            <h3 className=" text-white text-base md:text-lg font-bold tracking-wider " >WalletConnect</h3>
                            <p className="text-sm font-normal text-[#90A1B9] " >Connect using MetaMask browser extension</p>
                        </div>
                    </div>

                    <ArrowRight size={15} />

                </button>



                {/* Coinbase Wallet button  */}
                <button
                    onClick={() => {
                        if (!coinbaseConnector) return;
                        connect({ connector: coinbaseConnector });
                    }}
                    className="font-sfPro w-full flex items-center justify-between gap-5 bg-[linear-gradient(135deg,rgba(15,23,43,0.65)_0%,rgba(29,41,61,0.65)_100%)]  border-[0.67px] border-[#314158] py-6 px-4 rounded-[14px] cursor-pointer hover:scale-[101%] transition-all duration-300 ease-in-out  " >

                    <div className=" flex-3 flex items-center gap-4   " >
                        <Image src={"/images/logos/coinbase-logo.svg"} alt="connector logo" width={300} height={300} className=" size-13 flex items-center justify-center rounded-[10px] " />

                        <div className="w-fit flex flex-col items-start text-start  " >
                            <h3 className=" text-white text-base md:text-lg font-bold tracking-wider " >Coinbase Wallet</h3>
                            <p className="text-sm font-normal text-[#90A1B9] " >Connect using MetaMask browser extension</p>
                        </div>
                    </div>

                    <ArrowRight size={15} />

                </button>



                {/* Trust Wallet button */}
                <button
                    onClick={() => {
                        if (!trustWalletConnector) return;
                        connect({ connector: trustWalletConnector });
                    }}
                    className="font-sfPro w-full flex items-center justify-between gap-5 bg-[linear-gradient(135deg,rgba(15,23,43,0.65)_0%,rgba(29,41,61,0.65)_100%)]  border-[0.67px] border-[#314158] py-6 px-4 rounded-[14px] cursor-pointer hover:scale-[101%] transition-all duration-300 ease-in-out  " >

                    <div className=" flex-3 flex items-center gap-4   " >
                        <div className="bg-[#0600FF] size-13 flex items-center justify-center rounded-[10px] " >
                            <Image src={"/images/logos/Trust-wallet-logo.svg"} alt="connector logo" width={300} height={300} className=" size-8 " />
                        </div>

                        <div className="w-fit flex flex-col items-start text-start  " >
                            <h3 className=" text-white text-base md:text-lg font-bold tracking-wider " >Trust Wallet</h3>
                            <p className="text-sm font-normal text-[#90A1B9] " >Connect using MetaMask browser extension</p>
                        </div>
                    </div>

                    <ArrowRight size={15} />

                </button>

            </div>

            <div className="w-full py-5 flex items-center justify-center text-center bg-[#1624564D] border-[0.5px] border-[#193CB84D] rounded-[14px] px-6 text-sm md:text-base font-normal text-[#CAD5E2] " >
                <p>Your wallet connection is secure and encrypted. We never store your private keys.</p>
            </div>
        </>
    )
}