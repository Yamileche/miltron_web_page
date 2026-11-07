"use client";

import { useLanguage } from "@/components/language-provider";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const nextLanguage = language === "es" ? "en" : "es";

  return (
    <button
      className="language-toggle"
      type="button"
      onClick={() => setLanguage(nextLanguage)}
      aria-label={language === "es" ? "Switch site language to English" : "Cambiar idioma del sitio a español"}
      title={language === "es" ? "Switch to English" : "Cambiar a español"}
    >
      <span className={language === "es" ? "language-toggle__active" : undefined} aria-hidden="true">ES</span>
      <span className="language-toggle__separator" aria-hidden="true">/</span>
      <span className={language === "en" ? "language-toggle__active" : undefined} aria-hidden="true">EN</span>
    </button>
  );
}
