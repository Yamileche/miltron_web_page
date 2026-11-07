"use client";

import Link from "next/link";
import { profile } from "@/data/profile";
import { useLanguage } from "@/components/language-provider";

export function Footer() {
  const { language } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>{language === "en" ? "Designed and built by" : "Diseñado y construido por"} {profile.shortName}.</p>
        <p className="footer-meta">
          <span className="status-dot" aria-hidden="true" />
          Backend · Cloud · AI
        </p>
        <Link href="/#inicio">{language === "en" ? "Back to top" : "Volver arriba"} ↑</Link>
      </div>
    </footer>
  );
}
