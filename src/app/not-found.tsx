import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found container">
      <p className="eyebrow">404 / not_found</p>
      <h1>Esta ruta no existe.</h1>
      <p>Puede que el contenido se haya movido o todavía no esté publicado.</p>
      <Link className="button button--primary" href="/">Volver al inicio</Link>
    </div>
  );
}
