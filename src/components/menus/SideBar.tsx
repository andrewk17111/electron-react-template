import React from "react";
import { Link } from "react-router-dom";
import { HomeIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

interface SideBarProps {
}

interface MenuIconProps {
  icon: ({ className }: { className: string }) => JSX.Element;
  text: string;
  path: string;
  selected: boolean;
}

export default function SideBar({ }: SideBarProps) {
  return (
    <aside className="fixed top-8 bottom-0 left-0 z-10 hidden w-14 flex-col border-r bg-menu sm:flex">
      <nav className="flex flex-col items-center gap-4 p-0">
        <TooltipProvider>
          <MenuIcon icon={({ className }) => <HomeIcon className={className} />} text="Home" path="" selected />
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
