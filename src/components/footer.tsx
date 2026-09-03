import Link from "next/link";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>Diseñado y construido por {profile.shortName}.</p>
        <p className="footer-meta">
          <span className="status-dot" aria-hidden="true" />
          Backend · Cloud · AI
        </p>
        <Link href="/#inicio">Volver arriba ↑</Link>
      </div>
    </footer>
  );
}
