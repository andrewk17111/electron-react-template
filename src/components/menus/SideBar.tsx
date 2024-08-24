import React from "react";
import {
  Link,
  useLocation,
} from "react-router-dom";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { PageDefinition } from "@/App";

interface SideBarProps {
  pages: { [key: string]: PageDefinition };
}

interface MenuIconProps {
  icon: ({ className }: { className: string }) => JSX.Element;
  text: string;
  path: string;
  selected: boolean;
}

export default function SideBar({ pages }: SideBarProps) {
  const pageName = useLocation().pathname.substring(1);
  console.log(`pageName: '${pageName}'`);

  return (
    <aside className="fixed top-8 bottom-0 left-0 z-10 hidden w-14 flex-col border-r bg-menu sm:flex">
      <nav className="flex flex-col items-center gap-4 p-0">
        <TooltipProvider>
          {Object.keys(pages).map((key) => {
            const page = pages[key];
            const selected = pageName === key || (!Object.keys(pages).includes(pageName) && key === "index");

            return <MenuIcon key={key} icon={page.icon} text={page.title} path={key} selected={selected} />;
          })}
        </TooltipProvider>
      </nav>
    </aside>
  );
}

function MenuIcon({ icon, text, path, selected }: MenuIconProps) {
  const selectedStyle = selected
    ? "border-l-2 border-primary text-menu-foreground"
    : "text-muted-foreground";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          to={path}
          className={`flex h-14 w-14 items-center justify-center transition-colors
            hover:text-foreground ${selectedStyle}`}
        >
          {React.createElement(icon, { className: "h-7 w-7 rounded-lg" })}
          <span className="sr-only">{text}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">{text}</TooltipContent>
    </Tooltip>
  );
}
