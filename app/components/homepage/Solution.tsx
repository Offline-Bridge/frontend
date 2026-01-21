import { ArrowDown, Check, Globe, Phone, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Phone,
    title: "Works on Any Phone",
    description:
      "No smartphone needed. Just dial a code from any mobile phone.",
  },
  {
    icon: Globe,
    title: "No Internet Required",
    description:
      "Transactions work completely offline through USSD technology.",
  },
  {
    icon: Zap,
    title: "Simple & Fast",
    description:
      "Send money as easily as making a phone call. No complicated menus.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Trusted",
    description:
      "Bank grade encryption and multi factor authentication keep your assets safe.",
  },
];

export default function Solution() {
  return (
    <section className="relative flex flex-col px-6 md:px-10 xl:px-16 py-16 md:py-32 gap-12 md:gap-20 overflow-hidden font-sfPro">
      <div className="absolute bg-radial from-[#CAC1FF] via-[#2B25AB] to-[#2B25AB] blur-[100px] w-[75%] h-150 rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60 z-10"></div>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-0 z-20">
        <div className="w-full lg:w-1/2">
          <p className="text-[#51A2FF] bg-[#2B7FFF1A] border border-[#2B7FFF33] rounded-full w-fit px-4 py-1 mb-4 text-sm md:text-base">
            The Solution
          </p>
          <h2 className="font-medium text-3xl md:text-5xl lg:text-6xl bg-linear-to-r from-white/40 to-white to-50% bg-clip-text text-transparent inline box-decoration-slice">
            Offline Bridge was built to give crypto access for everyone,
            everywhere
          </h2>
        </div>
        <div className="w-full lg:w-1/4 text-left lg:text-center lg:self-end">
          <p className="text-white/70 text-base md:text-lg">
            Connect your crypto wallet to any phone number. Send and receive
            your crypto payments using simple USSD codes
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 md:mt-16 z-20">
        <div className="relative p-3 md:p-5 rounded-2xl bg-linear-to-b from-[#155DFC] to-[#0092B8]">
          <div className="bg-[#0A0A0F] rounded-2xl p-5 md:p-6 h-full">
            <p className="text-[#05DF72] font-medium mb-6">$ USSD Example</p>

            <div className="bg-[#0F172B] border border-[#1D293D] rounded-xl p-4 mb-2">
              <p className="text-gray-400 text-sm mb-1">Dial</p>
              <p className="text-white font-bold text-lg md:text-xl">
                *123*1*50#
              </p>
            </div>

            <div className="flex justify-center py-2">
              <ArrowDown className="text-gray-500" size={20} />
            </div>

            <div className="bg-[#0F172B] border border-[#1D293D] rounded-xl p-4 mb-2">
              <p className="text-gray-400 text-sm mb-1">Sent to</p>
              <p className="text-white font-bold text-lg md:text-xl">
                +234 234 234 8900
              </p>
            </div>

            <div className="flex justify-center py-2">
              <ArrowDown className="text-gray-500" size={20} />
            </div>

            <div className="bg-[#00C9501A] rounded-xl p-4 flex items-center gap-2 border border-[#00C95033]">
              <Check className="text-[#05DF72]" size={20} />
              <p className="text-[#05DF72] font-semibold">$50 USDC Sent</p>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col justify-center order-3 md:order-2 lg:order-0">
          <div className="flex flex-col gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="relative z-10 p-4 md:p-5 rounded-lg bg-[#2B7FFF1A] flex items-center justify-center shrink-0">
                  <feature.icon className="text-[#51A2FF]" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base md:text-lg mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden h-64 md:h-80 lg:h-full min-h-64 md:min-h-80 lg:min-h-100 order-2 md:order-3 lg:order-0 md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto md:w-full">
          <Image
            src="/images/person-with-phone.jpg"
            alt="Person using phone"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
