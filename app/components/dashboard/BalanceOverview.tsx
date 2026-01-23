"use client";

import { useState } from "react";
import {
  Wallet,
  Eye,
  EyeOff,
  TrendingUp,
  ArrowUpRight,
  Download,
} from "lucide-react";
import Link from "next/link";

export default function BalanceOverview() {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  const balance = 1847.5;
  const percentageChange = 12.5;

  return (
    <div className="bg-[#0F121E] border border-[#1D293D] rounded-2xl p-6 md:p-8 h-full flex flex-col">
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#1E203080] border border-white/10 rounded-xl flex items-center justify-center">
            <Wallet className="w-6 h-6 text-[#155DFC]" />
          </div>
          <div>
            <p className="text-gray-400 text-sm">Total Balance</p>
            <h3 className="text-white text-lg font-semibold">
              Wallet Overview
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-3 py-1.5">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-green-500 text-sm font-medium">Active</span>
        </div>
      </div>

      <div className="xl:mt-6">
        <div className="flex items-center gap-4 mb-2">
          <h2 className="bg-linear-to-r from-[#D6DEED] from-50% to-[#646B71] bg-clip-text text-transparent text-5xl md:text-6xl font-bold">
            {isBalanceVisible
              ? `$${balance.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
              : "••••••"}
          </h2>
          <button
            onClick={() => setIsBalanceVisible(!isBalanceVisible)}
            className="text-gray-400 hover:text-white transition-colors p-2"
            aria-label={isBalanceVisible ? "Hide balance" : "Show balance"}
          >
            {isBalanceVisible ? (
              <Eye className="w-6 h-6" />
            ) : (
              <EyeOff className="w-6 h-6" />
            )}
          </button>
        </div>
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-green-500" />
          <span className="text-green-500 font-medium text-sm">
            +{percentageChange}%
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-auto">
        <Link
          href="/send-money"
          className="bg-linear-to-b from-[#155DFC] to-[#827AF2] hover:bg-blue-700 transition-colors rounded-xl p-6 flex items-center justify-center group gap-6"
        >
          <ArrowUpRight className="w-6 h-6 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          <div>
            <h4 className="text-white font-semibold text-lg mb-1">
              Send Money
            </h4>
            <p className="text-blue-200 text-sm">Send funds instantly</p>
          </div>
        </Link>

        <Link
          href="/receive-money"
          className="bg-[#1D293D59] hover:bg-[#202128] border border-white/10 transition-colors rounded-xl p-6 flex items-center justify-center group gap-6"
        >
          <Download className="w-6 h-6 text-white group-hover:translate-y-0.5 transition-transform" />
          <div>
            <h4 className="text-white font-semibold text-lg mb-1">
              Receive Money
            </h4>
            <p className="text-gray-400 text-sm">Generate receive link</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
