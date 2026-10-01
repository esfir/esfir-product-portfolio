import { assetPath } from "@/data/asset-path";
import Link from "next/link";
import Image from "next/image";
import imageSizes from "@/data/image-sizes.json";
const sizes: Record<string, { width: number; height: number }> = imageSizes;
export function mediaSize(src: string) {
  return sizes[src] ?? { width: 1920, height: 1080 };
}
import {
  Cpu,
  Monitor,
  Keyboard,
  Folder,
  Globe,
  Layers,
  Code2,
  Boxes,
} from "lucide-react";
import { games, type Project } from "@/data/projects";
export function Header() {
  return (
    <header className="header">
      <Link className="brand" href="/" aria-label="Есфирь — главная">
        <span className="brand-icon">e.</span>
        <span>
          esfir<span className="muted"> / developer</span>
        </span>
      </Link>
      <nav aria-label="Основная навигация">
        <Link href="/#projects">Проекты</Link>
        <Link href="/#approach">Подход</Link>
        <Link href="/#about">Обо мне</Link>
      </nav>
      <Link className="header-contact" href="/#contact">
        Связаться <span aria-hidden="true">＋</span>
      </Link>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Есфирь</span>
      <span>
        Designed & built with Next.js, TypeScript and AI-assisted development.
      </span>
      <a href="#top">Наверх</a>
    </footer>
  );
}
export function Tags({ items }: { items: string[] }) {
  return (
    <div className="tags">
      {items.map((x) => (
        <span key={x}>{x}</span>
      ))}
    </div>
  );
}
export function AppArtwork() {
  return (
    <div
      className="app-art"
      aria-label="Учебные приложения: компьютер, клавиатура и логика"
    >
      <div className="art-window">
        <div className="window-top">
          <i />
          <i />
          <i />
          <span>learning by doing</span>
        </div>
        <div className="art-grid">
          <span>
            <Cpu />
          </span>
          <span>
            <Keyboard />
          </span>
          <span>
            <Folder />
          </span>
          <span>
            <Globe />
          </span>
          <span>
            <Code2 />
          </span>
          <span>
            <Layers />
          </span>
        </div>
        <div className="art-caption">
          Маленькие игры.
          <br />
          <strong>Большие открытия.</strong>
        </div>
      </div>
    </div>
  );
}
export function ProjectCard({
  project: p,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <article className={`project-card ${featured ? "featured" : ""}`}>
      <Link
        className={`project-cover ${p.slug}`}
        href={`/projects/${p.slug}`}
        aria-label={`Кейс ${p.title}`}
      >
        {p.image ? (
          <Image
            src={assetPath(p.image)}
            alt={
              p.title === "Вектор роста"
                ? "Отчёт о развитии ученика"
                : `Интерфейс ${p.title}`
            }
            {...mediaSize(p.image)}
            sizes={
              featured
                ? "(max-width: 760px) 100vw, 80vw"
                : "(max-width: 760px) 100vw, 45vw"
            }
            priority={featured}
          />
        ) : (
          <AppArtwork />
        )}
        <span className="cover-label">
          {p.slug === "vector-growth"
            ? "120+ пользователей"
            : featured
              ? "Флагманский проект"
              : "Посмотреть кейс"}
        </span>
      </Link>
      <div className="project-info">
        <div>
          <p className="eyebrow">
            <span>{p.number}</span> {p.category}
          </p>
          <h3>
            <Link href={`/projects/${p.slug}`}>{p.title}</Link>
          </h3>
          <p className="project-description">{p.description}</p>
        </div>
        <div className="project-bottom">
          <Tags items={p.stack.slice(0, 4)} />
          <Link className="case-link" href={`/projects/${p.slug}`}>
            Смотреть кейс <span aria-hidden="true">＋</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
const icons: Record<string, typeof Cpu> = {
  cpu: Cpu,
  monitor: Monitor,
  keyboard: Keyboard,
  folder: Folder,
  globe: Globe,
  layers: Layers,
  code: Code2,
};
export function Games() {
  return (
    <div className="games-grid">
      {games.map((g) => {
        const Icon = icons[g.icon] || Boxes;
        return (
          <article className="game-card" key={g.path}>
            <Icon size={30} />
            <p className="eyebrow">{g.topic}</p>
            <h3>{g.title}</h3>
            <div className="game-links">
              <a
                href={`https://${g.owner}.github.io/${g.path}/`}
                target="_blank"
                rel="noreferrer"
              >
                Live demo
              </a>
              <a
                href={`https://github.com/${g.owner}/${g.path}`}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
}
export function Flow({ items }: { items: string[] }) {
  return (
    <ol className="flow">
      {items.map((s, i) => (
        <li key={s}>
          <span>{String(i + 1).padStart(2, "0")}</span>
          {s}
        </li>
      ))}
    </ol>
  );
}
