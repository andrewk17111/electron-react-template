import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { updateAppLanguage } from "./helpers/language_helpers";
import { syncThemeWithLocal } from "./helpers/theme_helpers";
import WindowLayout from "./layouts/WindowLayout";
import "./localization/i18n";
import HomePage from "./pages/HomePage";

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    syncThemeWithLocal();
    updateAppLanguage(i18n);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WindowLayout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById("app")!);
root.render(<App />);
