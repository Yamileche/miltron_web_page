"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navigation, profile } from "@/data/profile";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="wordmark" href="/#inicio" aria-label="Ir al inicio">
          <span aria-hidden="true">~/</span>
          milton
        </Link>

        <nav className={open ? "nav-links nav-links--open" : "nav-links"} aria-label="Navegación principal">
          {navigation.map((item) => (
            <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          {profile.cvPath ? (
            <a className="nav-cv" href={profile.cvPath} download>
              Descargar CV
            </a>
          ) : null}
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <button
            className="icon-button menu-button"
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
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
