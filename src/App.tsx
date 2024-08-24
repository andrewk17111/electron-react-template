import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./pages/HomePage";
import WindowLayout from "./layouts/WindowLayout";
import { syncThemeWithLocal } from "./helpers/theme_helpers";
import { useTranslation } from "react-i18next";
import "./localization/i18n";
import { updateAppLanguage } from "./helpers/language_helpers";

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    syncThemeWithLocal();
    updateAppLanguage(i18n);
  }, []);

  return (
    <WindowLayout>
      <HomePage />
    </WindowLayout>
  );
}

const root = createRoot(document.getElementById("app")!);
root.render(<App />);
