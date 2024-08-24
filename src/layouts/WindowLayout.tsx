import React from "react";
import SideBar from "@/components/menus/SideBar";
import TitleBar from "@/components/menus/TitleBar";
import { Outlet } from "react-router-dom";

export default function WindowLayout() {
  return (
    <>
      <TitleBar title="Electron + React + Vite + TypeScript" />
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <SideBar />
        <main className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <Outlet />
        </main>
      </div>
    </>
  );
}
