import { closeWindow, maximizeWindow, minimizeWindow } from "@/helpers/window_helpers";
import React, { type ReactNode } from "react";

interface TitleBarProps {
  title?: ReactNode;
}

interface WindowButtonProps {
  text: string;
  className: string;
  onClick: () => Promise<void>;
  children: JSX.Element | JSX.Element[];
}

export default function TitleBar({ title }: TitleBarProps) {
  return (
    <div className="flex w-screen items-stretch justify-between">
      <div className="draglayer w-full">
        {title && (
          <div className="flex flex-1 select-none whitespace-nowrap p-2 h-8 text-xs text-menu-foreground">
            {title}
          </div>
        )}
      </div>
      <WindowButtons />
    </div>
  );
}

function WindowButtons() {
  return (
    <div className="flex bg-menu">
      <WindowButton text="Minimize" className="hover:bg-muted" onClick={minimizeWindow}>
        <MinimizeIcon />
      </WindowButton>
      <WindowButton text="Maximize" className="hover:bg-muted" onClick={maximizeWindow}>
        <MaximizeIcon />
      </WindowButton>
      <WindowButton text="Close" className="hover:bg-red-500" onClick={closeWindow} >
        <CloseIcon />
      </WindowButton>
    </div>
  );
}

function WindowButton({ text, className, onClick, children }: WindowButtonProps) {
  return (
    <button
      title={text}
      type="button"
      className={`p-2 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function MinimizeIcon() {
  return (
    <svg aria-hidden="true" role="img" width="12" height="12" viewBox="0 0 12 12">
      <rect className="fill-menu-foreground" width="10" height="1" x="1" y="6"></rect>
    </svg>
  );
}

function MaximizeIcon() {
  return (
    <svg aria-hidden="true" role="img" width="12" height="12" viewBox="0 0 12 12">
      <rect width="9" height="9" x="1.5" y="1.5" fill="none" className="stroke-menu-foreground"></rect>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" role="img" width="12" height="12" viewBox="0 0 12 12">
      <polygon
        className="fill-menu-foreground"
        fillRule="evenodd"
        points="11 1.576 6.583 6 11 10.424 10.424 11 6 6.583 1.576 11 1 10.424 5.417 6 1 1.576 1.576 1 6 5.417 10.424 1"
      ></polygon>
    </svg>
  );
}
