import { Wallet } from "lucide-react";
import { Button } from "../common/Button";

export default function Ready() {
  return (
    <section className="bg-[#08090E] py-20 px-4 relative z-0 overflow-hidden font-sfPro">
      <div className="absolute rounded-full w-120 h-120 md:w-140 md:h-140 bg-[#2B7FFF] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-30 z-10"></div>

      <div className="relative bg-linear-to-b from-[#0F172BCC] to-[#020618CC] py-10 mx-auto max-w-4xl px-6 flex flex-col justify-center items-center text-center gap-10 rounded-xl my-5 z-20">
        <div className="max-w-xl gap-6 flex flex-col">
          <h2 className="text-4xl md:text-6xl font-medium">
            Ready to Make Crypto Accessible?
          </h2>
          <p className="text-lg text-gray-300">
            Join thousands making crypto payments without internet or
            smartphones. Connect your wallet now and start sending money from
            any phone.
          </p>
        </div>
        <Button
          variant="primary"
          className="flex items-center justify-center gap-2.5 px-10 py-5"
        >
          <Wallet size={17} /> Connect Wallet
        </Button>
      </div>
    </section>
  );
}
