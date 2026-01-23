import { AlertDataType } from "@/types/types";
import Image from "next/image";



interface MessageBarProps {
    data: AlertDataType
    latestMessage: number
}


export default function MessageBar({ data, latestMessage }: MessageBarProps) {
    const isActive = latestMessage === data.index;

    let positionClass = "translate-y-0 opacity-0 scale-95";

    if (isActive) {
        positionClass = "translate-y-0 opacity-100 scale-100 z-30 ";
    } else if (
        latestMessage + 1 === data.index ||
        latestMessage - 2 === data.index
    ) {
        positionClass = "translate-y-5 opacity-60 scale-95";
    } else if (
        latestMessage + 2 === data.index ||
        latestMessage - 1 === data.index
    ) {
        positionClass = "translate-y-9 opacity-40 scale-90";
    }

    return (
        <div
            className={`
        absolute w-full flex items-start justify-between
        bg-[#2A2929]/78 backdrop-blur-[2px]
        rounded-[25px] border border-[#FFFFFF33]
        py-3.5 px-5
        transition-all duration-500 ease-in-out
        ${positionClass}
      `}
        >
            {/* Logo */}
            <div
                className={`
          self-center py-3 w-full max-w-25 flex items-center justify-center
          rounded-[15px] border-2 border-[#FFFFFF8C]
          bg-[linear-gradient(180deg,#CCB9E0_0%,rgba(255,255,255,0.25)_100%)]
          transition-opacity duration-300
          ${isActive ? "opacity-100" : "opacity-0"}
        `}
            >
                <Image src="/images/logos/symbol.svg" alt="logo" height={35} width={68.23} />
            </div>

            {/* Text */}
            <div
                className={`
          w-fit flex flex-col items-start font-medium text-base
          transition-opacity duration-300
          ${isActive ? "opacity-100" : "opacity-0"}
        `}
            >
                <h5>Credit</h5>
                <h5>Amt: ₦{data.amount.toLocaleString()}</h5>
                <h5>Acc: {data.acctNum}</h5>
                <h5>Balance: ₦{data.balance.toLocaleString()}</h5>
            </div>

            <span
                className={`
          text-sm font-normal
          transition-opacity duration-300
          ${isActive ? "opacity-100" : "opacity-0"}
        `}
            >
                1 min ago
            </span>
        </div>
    );
}
