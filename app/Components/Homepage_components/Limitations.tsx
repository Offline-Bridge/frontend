import React from "react";
import { Wallet, WifiOff } from "lucide-react";
import { PressPhone } from "../icons";

interface Limitation {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const limitations: Limitation[] = [
  {
    title: "Internet Dependency",
    description:
      "Most crypto wallets require constant internet connection, making them useless in areas with poor connectivity.",
    icon: WifiOff,
  },
  {
    title: "Device Limitation",
    description:
      "Traditional crypto apps need expensive smartphones, excluding millions who only have basic feature phones.",
    icon: PressPhone,
  },
  {
    title: "Complex Wallets",
    description:
      "Crypto wallets are often confusing and intimidating for everyday users who just want to send and receive money.",
    icon: Wallet,
  },
];

export default function Limitations() {
  return (
    <section className="py-20 px-4 bg-[#0A0A0F]">
      <div className="text-center max-w-xl mx-auto mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-[#D6DEED] mb-4">
          Crypto {"Shouldn't"} Be This Hard
        </h2>
        <p className="text-gray-400 text-lg">
          Current crypto solutions create barriers that keep everyday people
          from accessing digital finance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {limitations.map((limitation, index) => (
          <div
            key={index}
            className="relative p-px rounded-2xl bg-linear-to-b from-[#5550D0]/50 to-transparent"
          >
            <div className="bg-[#0D0D14] rounded-2xl p-8 h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-[#08090E] from-45% via-[#2B25AB] via-70% to-[#6960FD] to-100% pointer-events-none" />

              <div className="relative w-14 h-14 rounded-xl bg-[#FB2C361A] flex items-center justify-center mb-6">
                <limitation.icon className="w-6 h-6 text-[#FF6467]" />
              </div>

              <h3 className="relative text-xl font-semibold text-white mb-3">
                {limitation.title}
              </h3>
              <p className="relative text-gray-400 text-sm leading-relaxed">
                {limitation.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
