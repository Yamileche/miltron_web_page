import type { Metadata, Viewport } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LanguageProvider } from "@/components/language-provider";
import { profile, siteConfig } from "@/data/profile";
import "highlight.js/styles/github-dark.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${profile.shortName}`,
  },
  description: siteConfig.description,
  applicationName: `${profile.shortName} Portfolio`,
  authors: [{ name: profile.name }],
  creator: profile.name,
  keywords: ["Backend Developer", "Python", "Cloud", "AI Engineering", "LangGraph", "Rust", "México"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: profile.shortName,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

const themeScript = `
  try {
    const saved = localStorage.getItem('theme');
    const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.dataset.theme = saved || system;
  } catch (_) {}
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>
        <LanguageProvider>
          <a className="skip-link" href="#contenido">Saltar al contenido</a>
          <Navbar />
          <main id="contenido">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
