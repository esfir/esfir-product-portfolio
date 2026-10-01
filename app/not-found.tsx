import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="wrap section">
      <p className="eyebrow blue">404</p>
      <h1 style={{ fontSize: 48, margin: "20px 0" }}>Страница не найдена</h1>
      <p style={{ marginBottom: 30 }}>Перейдите к проектам портфолио.</p>
      <Link href="/" className="button primary">
        На главную
      </Link>
    </main>
  );
}
