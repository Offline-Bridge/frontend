"use client";

import { useState } from "react";
import {
  Wallet,
  MoreVertical,
  LucideIcon,
  ArrowDownLeft,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

type TimePeriod = "1D" | "1W" | "1M" | "1Y";

interface MetricCard {
  id: string;
  label: string;
  value: string;
  transactions: number;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
}

const metrics: MetricCard[] = [
  {
    id: "wallet",
    label: "USSD Wallet",
    value: "Active",
    transactions: 12,
    icon: Wallet,
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-500",
  },
  {
    id: "sent",
    label: "Total Sent",
    value: "$525.50",
    transactions: 12,
    icon: ArrowUpRight,
    iconBg: "bg-red-500/20",
    iconColor: "text-red-500",
  },
  {
    id: "received",
    label: "Total Recieved",
    value: "$1,773.32",
    transactions: 8,
    icon: ArrowDownLeft,
    iconBg: "bg-green-500/20",
    iconColor: "text-green-500",
  },
];

export default function Metrics() {
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>("1W");

  const periods: TimePeriod[] = ["1D", "1W", "1M", "1Y"];

  return (
    <div className="space-y-6 bg-[#0F172B80] p-5 border border-[#1D293D] rounded-xl">
      <div className="flex items-center justify-between">
        <h2 className="text-[#D6DEED] text-2xl font-semibold">Metrics</h2>
        <div className="flex gap-2">
          {periods.map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-sm font-medium transition-colors",
                selectedPeriod === period
                  ? "bg-linear-to-b from-[#1E2030] to-[#155DFC] text-white"
                  : "bg-[#1a1b23] text-gray-400 hover:text-white hover:bg-gray-800",
              )}
              style={
                selectedPeriod === period
                  ? { boxShadow: "inset 0 2px 8px 2px #827AF240" }
                  : undefined
              }
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {metrics.map((metric) => (
          <div
            key={metric.id}
            className="bg-[#0F172B80] border border-[#1D293D] rounded-xl p-5"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    metric.iconBg,
                    metric.iconColor,
                    "p-2.5 rounded-lg",
                  )}
                >
                  <metric.icon className="w-5 h-5" />
                </div>
                <p className="text-gray-400 text-sm">{metric.label}</p>
              </div>
              <button className="bg-[#1E203080] border border-white/10 text-gray-400 hover:text-white p-2 rounded-lg cursor-pointer transition-colors">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-1">
              <h3 className="bg-linear-to-r from-[#D6DEED] to-[#646B71] to-60% bg-clip-text text-transparent text-3xl font-bold">
                {metric.value}
              </h3>
              <p className="text-gray-500 text-sm">
                {metric.transactions} transactions
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
