import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { updateAppLanguage } from "./helpers/language_helpers";
import { syncThemeWithLocal } from "./helpers/theme_helpers";
import WindowLayout from "./layouts/WindowLayout";
import "./localization/i18n";
import HomePage from "./pages/HomePage";
import { HomeIcon } from "lucide-react";

export interface PageDefinition {
  element: JSX.Element;
  icon: ({ className }: { className: string }) => JSX.Element;
  title: string;
}

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    syncThemeWithLocal();
    updateAppLanguage(i18n);
  }, []);

  const pages: { [key: string]: PageDefinition } = {
    index: {
      element: <HomePage />,
      icon: ({ className }) => <HomeIcon className={className} />,
      title: "Home",
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WindowLayout pages={pages} />}>
          {Object.keys(pages).map((key) => {
            if (key === "index") {
              return [
                <Route key={key} index element={pages[key].element} />,
                <Route key="*" path="*" element={pages[key].element} />
              ];
            }

            return <Route key={key} path={key} element={pages[key].element} />;
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById("app")!);
root.render(<App />);
