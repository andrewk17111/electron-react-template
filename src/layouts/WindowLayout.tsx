import React from "react";
import SideBar from "@/components/menus/SideBar";
import TitleBar from "@/components/menus/TitleBar";
import { Outlet } from "react-router-dom";
import { PageDefinition } from "@/App";

interface WindowLayoutProps {
  pages: { [key: string]: PageDefinition };
}

export default function WindowLayout({ pages }: WindowLayoutProps) {
  return (
    <>
      <TitleBar title="Electron + React + Vite + TypeScript" />
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <SideBar pages={pages} />
        <main className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <Outlet />
        </main>
      </div>
    </>
  );
}
