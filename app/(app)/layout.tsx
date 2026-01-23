"use client";

import { useState } from "react";
import Sidebar from "../components/common/Sidebar";
import AppNav from "../components/common/AppNav";
import SendMoneyModal from "../components/dashboard/SendMoneyModal";
import { usePathname } from "next/navigation";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <main className="font-sfPro bg-[#0A0A0F] flex h-screen xl:overflow-hidden relative ">
      <Sidebar
        isMobileSidebarOpen={isMobileSidebarOpen}
        onCloseMobileSidebar={() => setIsMobileSidebarOpen(false)}
      />

      <div className="flex flex-col flex-1">
        <AppNav onOpenMobileSidebar={() => setIsMobileSidebarOpen(true)} />

        <div className="flex-1 overflow-y-auto px-6 py-5">{children}</div>
      </div>

      {pathname === "/send-money" && <SendMoneyModal />}

      {isMobileSidebarOpen && (
        <div
          className="xl:hidden fixed inset-0 bg-black/40 z-10"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}
    </main>
  );
}
