import React from "react";
import TitleBar from "@/components/TitleBar";

export default function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TitleBar title="Electron + React + Vite + TypeScript" />
      <main>{children}</main>
    </>
  );
}
