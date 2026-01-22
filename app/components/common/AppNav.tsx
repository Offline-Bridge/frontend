"use client";

import { useState } from "react";
import { Home, ChevronDown, Copy, Check, Menu } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AppNavProps {
  onOpenMobileSidebar: () => void;
}

export default function AppNav({ onOpenMobileSidebar }: AppNavProps) {
  const [copied, setCopied] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const walletAddress = "0x742d...bEb4";

  const handleCopy = async () => {
    await navigator.clipboard.writeText("0x742d...bEb4");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="flex justify-between items-center w-full px-4 md:px-6 py-2.5 bg-[#0A0A0F] border-b border-gray-800">
      <div className="flex items-center gap-2 text-sm">
        <Home className="text-gray-400 max-lg:hidden w-4 h-4" />
        <Menu
          className="text-gray-400 xl:hidden w-5 h-5 cursor-pointer"
          onClick={onOpenMobileSidebar}
        />
        <span className="text-gray-400 hidden sm:inline">Overview</span>
        <span className="text-gray-600 hidden sm:inline">/</span>
        <span className="text-white font-medium">Dashboard</span>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <div className="flex items-center gap-2">
          <span className="text-gray-300 text-sm font-mono">
            {walletAddress}
          </span>
          <button
            onClick={handleCopy}
            className="text-gray-400 hover:text-white transition-colors bg-[#1E203080] p-1.5 rounded-lg focus:outline-none border"
            aria-label="Copy wallet address"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>

        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 md:gap-3 hover:bg-gray-800/50 rounded-lg px-2 md:px-3 py-2 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-gray-600 overflow-hidden shrink-0">
              <Image
                src="/images/avatar.jpg"
                alt="User avatar"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left hidden lg:block">
              <p className="text-white text-sm font-medium">Agbal Tobechukwu</p>
              <p className="text-gray-400 text-xs">+254 712 345 678</p>
            </div>

            <div className="text-left hidden sm:block lg:hidden">
              <p className="text-white text-sm font-medium">Agbal T.</p>
            </div>
            <ChevronDown
              className={cn(
                "w-4 h-4 text-gray-400 transition-transform hidden sm:block",
                isDropdownOpen && "rotate-180",
              )}
            />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-[#1E2030] border border-gray-800 rounded-lg shadow-lg py-2 z-50">
              <button className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 transition-colors">
                View Profile
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 transition-colors">
                Account Settings
              </button>
              <hr className="border-gray-800 my-2" />
              <button className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-800 transition-colors">
                Disconnect Wallet
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
