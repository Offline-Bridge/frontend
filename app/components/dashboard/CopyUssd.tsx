"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

const steps = [
  "Dial *384*96# from your linked phone number on any device",
  "Enter the amount and recipient",
  "Select your transaction type",
  "Confirm with your PIN",
];

export default function CopyUssd() {
  const [copied, setCopied] = useState(false);
  const ussdCode = "*384*96#";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(ussdCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-linear-to-br from-[#1D293D1A] from-15% via-[#0F1018] via-10% to-[#155DFC1A] to-50% rounded-2xl p-6 md:p-8 border border-[#1D293D33]">
      <div className="bg-[#0a0a0f]/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 mb-8 flex items-center justify-between">
        <div>
          <h3 className="bg-linear-to-b from-[#155DFC] to-[#827AF2] bg-clip-text text-transparent text-xl md:text-2xl font-bold mb-2">
            {ussdCode}
          </h3>
          <p className="text-gray-400 text-lg">USSD Code</p>
        </div>
        <button
          onClick={handleCopy}
          className="text-gray-400 hover:text-white transition-colors bg-[#1a1b23] p-3 rounded-lg border border-gray-800"
          aria-label="Copy USSD code"
        >
          {copied ? (
            <Check className="w-6 h-6 text-green-500" />
          ) : (
            <Copy className="w-6 h-6" />
          )}
        </button>
      </div>

      <div>
        <h4 className="text-white text-2xl font-semibold mb-6">
          How it works:
        </h4>
        <ol className="space-y-4">
          {steps.map((step, index) => (
            <li key={index} className="flex gap-4 text-gray-400">
              <span className="text-gray-500 font-semibold text-lg shrink-0">
                {index + 1}.
              </span>
              <span className="text-lg leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
