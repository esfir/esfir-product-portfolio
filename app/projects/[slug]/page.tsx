import { assetPath } from "@/data/asset-path";
import { mediaSize } from "@/components/site";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Header,
  Footer,
  Tags,
  Flow,
  Games,
  AppArtwork,
} from "@/components/site";
import { projects, database } from "@/data/projects";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return p
    ? {
        title: p.title,
        description: p.description,
        openGraph: {
          title: p.title,
          description: p.description,
          type: "article",
          locale: "ru_RU",
        },
      }
    : { title: "Проект не найден" };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) notFound();
  const next = projects[(projects.indexOf(p) + 1) % projects.length];
  return (
    <div id="top">
      <Header />
      <main id="main">
        <section className="case-hero wrap">
          <Link className="back-link" href="/#projects">
            Все проекты / {p.number}
          </Link>
          <p className="eyebrow">{p.category}</p>
          <h1>{p.title}</h1>
          <p className="case-lead">{p.description}</p>
          <Tags items={p.stack} />
          {p.image ? (
            <Image
              className="case-main-image"
              src={assetPath(p.image)}
              alt={`Интерфейс ${p.title}`}
              {...mediaSize(p.image)}
              sizes="(max-width: 760px) 100vw, 1180px"
              priority
            />
          ) : (
            <div
              className="case-main-image"
              style={{ maxWidth: 600, marginInline: "auto" }}
            >
              <AppArtwork />
            </div>
          )}
        </section>
        <div className="wrap case-content">
          <div className="role">
            <strong>MY ROLE</strong>
            {p.role}
          </div>
          <section className="case-section case-columns">
            <div>
              <p className="eyebrow muted" style={{ marginBottom: 14 }}>
                01 / PROBLEM
              </p>
              <h3>Задача</h3>
              <p>{p.problem}</p>
            </div>
            <div>
              <p className="eyebrow muted" style={{ marginBottom: 14 }}>
                02 / SOLUTION
              </p>
              <h3>Решение</h3>
              <p>{p.solution}</p>
            </div>
          </section>
          <section className="case-section">
            <p className="eyebrow muted" style={{ marginBottom: 16 }}>
              03 / PRODUCT DECISIONS
            </p>
            <h2>Как устроен продукт</h2>
            <div className="decisions">
              {p.decisions.map((d, i) => (
                <div key={d.title}>
                  <span>0{i + 1}</span>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="case-section">
            <p className="eyebrow muted" style={{ marginBottom: 16 }}>
              04 / ARCHITECTURE & LOGIC
            </p>
            <h2>
              {slug === "visual-scripter" ? "Access flow" : "Связи и сценарии"}
            </h2>
            <Flow items={p.flow} />
            {slug === "education-platform" && (
              <>
                <h3 style={{ fontSize: 21 }}>Логика прохождения урока</h3>
                <Flow
                  items={[
                    "Модули урока",
                    "Очередь",
                    "Текущий прогресс",
                    "Автоматическая цель",
                  ]}
                />
                <h3 style={{ fontSize: 21, marginTop: 35 }}>
                  Структура данных
                </h3>
                <table className="db-table">
                  <caption className="sr-only">
                    Основные блоки базы данных платформы
                  </caption>
                  <tbody>
                    {database.map(([title, text]) => (
                      <tr key={title}>
                        <th scope="row">{title}</th>
                        <td>{text}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <details className="db-details">
                  <summary>Посмотреть полную схему базы данных</summary>
                  <a
                    href={assetPath("/projects/education-platform/database.png")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src={assetPath("/projects/education-platform/database.png")}
                      alt="ER-диаграмма: школы, пользователи, курсы, уроки, занятия, ответы и игровая экономика"
                      width={3674}
                      height={2486}
                      sizes="100vw"
                    />
                  </a>
                </details>
              </>
            )}
          </section>
          <section className="case-section">
            <p className="eyebrow muted" style={{ marginBottom: 16 }}>
              05 / FEATURES
            </p>
            <h2>Ключевые возможности</h2>
            <ul className="feature-list">
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </section>
          {p.video && (
            <section className="case-section">
              <p className="eyebrow muted" style={{ marginBottom: 16 }}>
                06 / PRODUCT IN ACTION
              </p>
              <h2>Короткая демонстрация</h2>
              <video
                controls
                playsInline
                preload="none"
                poster={p.image ? assetPath(p.image) : undefined}
                className="case-video"
                aria-label={`Демонстрация ${p.title}`}
              >
                <source src={assetPath(p.video)} type="video/mp4" />
                Ваш браузер не поддерживает видео.{" "}
                <a href={assetPath(p.video)}>Скачать демонстрацию</a>
              </video>
            </section>
          )}
          {p.gallery.length > 0 && (
            <section className="case-section">
              <h2>Продукт в деталях</h2>
              <div className="gallery">
                {p.gallery.map((img) => (
                  <figure key={img.src}>
                    <a
                      href={assetPath(`/projects/${slug}/${img.src}`)}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${img.caption} — открыть в полном размере`}
                    >
                      <Image
                        src={assetPath(`/projects/${slug}/${img.src}`)}
                        alt={img.caption}
                        {...mediaSize(`/projects/${slug}/${img.src}`)}
                        sizes="(max-width: 760px) 100vw, 900px"
                      />
                    </a>
                    <figcaption>{img.caption}</figcaption>
                  </figure>
                ))}
              </div>

            </section>
          )}
          {slug === "learning-apps" && (
            <section className="case-section">
              <h2>Открыть и попробовать</h2>
              <Games />
            </section>
          )}
          <section className="case-section">
            <p className="eyebrow muted" style={{ marginBottom: 16 }}>
              RESULT
            </p>
            <h2>Результат</h2>
            <p>{p.result}</p>
          </section>
          <div className="next-project">
            <div>
              <p>СЛЕДУЮЩИЙ ПРОЕКТ</p>
              <h3>
                <Link href={`/projects/${next.slug}`}>{next.title}</Link>
              </h3>
            </div>
            <Link className="button secondary" href="/#contact">
              Обсудить проект
            </Link>
          </div>
        </div>
      </main>
      <div className="wrap">
        <Footer />
      </div>
    </div>
  );
}
