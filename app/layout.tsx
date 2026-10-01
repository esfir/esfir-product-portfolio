import { assetPath } from "@/data/asset-path";
import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: { default: "Есфирь — AI Product Developer", template: "%s | Есфирь" },
  description:
    "Разрабатываю веб-продукты и MVP: от идеи и архитектуры до интерфейса, базы данных, тестирования и деплоя. Портфолио AI Product / Full-stack Developer.",
  openGraph: {
    title: "Есфирь — AI Product Developer",
    description:
      "Продуктовый подход. Полный цикл разработки. Реальные приложения.",
    type: "website",
    locale: "ru_RU",
  },
  twitter: { card: "summary" },
  icons: { icon: assetPath("/favicon.svg") },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <a className="skip-link" href="#main">
          Перейти к содержимому
        </a>
        {children}
      </body>
    </html>
  );
}
