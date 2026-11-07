"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navigation, profile } from "@/data/profile";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/components/language-provider";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();
  const labels = language === "en"
    ? ["Home", "About", "Experience", "Projects", "Skills", "Learning", "Blog", "Contact"]
    : navigation.map((item) => item.label);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="wordmark" href="/#inicio" aria-label="Ir al inicio">
          <span aria-hidden="true">~/</span>
          miltron
        </Link>

        <nav className={open ? "nav-links nav-links--open" : "nav-links"} aria-label="Navegación principal">
          {navigation.map((item, index) => (
            <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>
              {labels[index]}
            </Link>
          ))}
          {profile.cvPath ? (
            <a className="nav-cv" href={profile.cvPath} download>
              {language === "en" ? "Download CV" : "Descargar CV"}
            </a>
          ) : null}
        </nav>

        <div className="nav-actions">
          <LanguageToggle />
          <ThemeToggle />
          <button
            className="icon-button menu-button"
            type="button"
            aria-label={open ? (language === "en" ? "Close menu" : "Cerrar menú") : (language === "en" ? "Open menu" : "Abrir menú")}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}
