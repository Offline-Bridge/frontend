"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  Home,
  ArrowLeftRight,
  Send,
  Download,
  User,
  Settings,
  LucideIcon,
  X,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

interface SidebarProps {
  isMobileSidebarOpen: boolean;
  onCloseMobileSidebar: () => void;
}

const navItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    label: "Transactions",
    href: "/transactions",
    icon: ArrowLeftRight,
  },
  {
    label: "Send Money",
    href: "/send-money",
    icon: Send,
  },
  {
    label: "Receive Money",
    href: "/receive-money",
    icon: Download,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar({
  isMobileSidebarOpen,
  onCloseMobileSidebar,
}: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "bg-[#0F1018] h-screen border-r border-[#1D293D] transition-all duration-300 ease-in-out overflow-hidden fixed xl:static z-30",
        isCollapsed ? (!isMobileSidebarOpen ? "xl:w-25" : "xl:w-64") : "w-64",
        isMobileSidebarOpen
          ? "max-lg:translate-x-0"
          : "max-lg:-translate-x-full",
      )}
    >
      <div className="flex flex-col h-full">
        <div
          className={cn(
            "flex items-center justify-between py-4 border-b border-[#1D293D]",
            isCollapsed ? "px-1.5" : "px-4",
          )}
        >
          <div className="flex items-center gap-3">
            <div className=" size-10 bg-[linear-gradient(180deg,#155DFC_0%,#827AF2_135%)] rounded-[10px] md:rounded-[10px] flex items-center justify-center shadow-[0px_4px_7px_0px_#2B25AB40]  ">
              <Image
                src={"/images/logos/logo-white.svg"}
                alt="icon"
                height={30}
                width={30}
              />
            </div>
            {!isCollapsed && (
              <span className="text-gray-300 font-semibold text-base">
                Offline Bridge
              </span>
            )}
            <X
              className="absolute right-3 top-3 cursor-pointer xl:hidden"
              onClick={onCloseMobileSidebar}
            />
          </div>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-gray-400 hover:text-white transition-colors bg-[#1E203080] p-2 rounded-md focus:outline-none self-end max-lg:hidden"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <ChevronLeft
              className={cn(
                "w-5 h-5 transition-transform duration-300",
                isCollapsed && "rotate-180",
              )}
            />
          </button>
        </div>

        {!isCollapsed && (
          <div className="p-4">
            <h2
              className="text-white text-xl font-semibold mb-1"
              style={{ textShadow: "0 4px 10px #2B25AB40" }}
            >
              Welcome Back, Agba
            </h2>
            <p className="text-gray-500 text-xs">Last login: 22 Jan 2025</p>
          </div>
        )}

        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-3 rounded-lg text-gray-400 hover:bg-gray-800/50 hover:text-white transition-all group"
              title={isCollapsed ? item.label : undefined}
            >
              <span className="shrink-0">
                <item.icon className="w-5 h-5" />
              </span>
              {!isCollapsed && (
                <span className="text-sm font-medium">{item.label}</span>
              )}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
