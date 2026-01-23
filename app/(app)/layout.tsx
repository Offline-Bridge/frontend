"use client";

import { useState } from "react";
import Sidebar from "../Components/common/Sidebar";
import AppNav from "../Components/common/AppNav";


export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <main className="font-sfPro bg-[#0A0A0F] flex h-screen xl:overflow-hidden">
      <Sidebar
        isMobileSidebarOpen={isMobileSidebarOpen}
        onCloseMobileSidebar={() => setIsMobileSidebarOpen(false)}
      />

      <div className="flex flex-col flex-1">
        <AppNav onOpenMobileSidebar={() => setIsMobileSidebarOpen(true)} />

        <div className="flex-1 overflow-y-auto px-6 py-5">{children}</div>
      </div>

      {isMobileSidebarOpen && (
        <div
          className="xl:hidden fixed inset-0 bg-black/40 z-10"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}
    </main>
  );
}
