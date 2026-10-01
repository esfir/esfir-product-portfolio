import Link from "next/link";
import { Header, Footer, ProjectCard, Tags, Flow } from "@/components/site";
import { projects, skills } from "@/data/projects";
import { Layers, Braces, Database, Check } from "lucide-react";
export default function Home() {
  return (
    <div id="top">
      <Header />
      <main id="main">
        <section className="hero wrap">
          <div className="hero-main">
            <p className="eyebrow hero-kicker">
              ЕСФИРЬ / PRODUCT & ENGINEERING
            </p>
            <h1>
              AI Product Developer<span className="slash"> /</span>
              <br />
              <span className="muted">Full-stack Developer</span>
            </h1>
            <p className="hero-subtitle">
              I turn product ideas into
              <br className="desktop-break" /> working web applications.
            </p>
            <p className="hero-description">
              Разрабатываю веб-продукты и MVP от идеи и архитектуры
              <br className="desktop-break" /> до интерфейса, базы данных,
              тестирования и деплоя.
            </p>
            <div className="hero-actions">
              <Link href="#projects" className="button primary">
                View projects
              </Link>
              <Link href="#contact" className="button secondary">
                Contact me
              </Link>
            </div>
            <p className="hero-stack">
              TypeScript <b>·</b> React <b>·</b> Next.js <b>·</b> Node.js{" "}
              <b>·</b> PostgreSQL
            </p>
          </div>
          <div
            className="system-art"
            aria-label="Продукт: от идеи к работающему приложению"
          >
            <div className="system-top">
              <span>FROM IDEA TO PRODUCT</span>
              <span>01—04</span>
            </div>
            <div className="system-node idea">
              <span className="node-icon">
                <Layers size={20} />
              </span>
              <div>
                <strong>Product idea</strong>
                <small>Задача → решение</small>
              </div>
              <span className="node-index">01</span>
            </div>
            <div className="system-connector" />
            <div className="system-pair">
              <div className="system-node">
                <Braces size={20} />
                <strong>Interface</strong>
                <small>React / Next.js</small>
              </div>
              <div className="system-node">
                <Database size={20} />
                <strong>Architecture</strong>
                <small>API / PostgreSQL</small>
              </div>
            </div>
            <div className="system-connector" />
            <div className="system-node shipped">
              <span className="node-icon">
                <Check size={20} />
              </span>
              <div>
                <strong>Working product</strong>
                <small>Проверено. Готово к запуску.</small>
              </div>
            </div>
            <p className="system-note">
              Product thinking. Engineering ownership.
            </p>
          </div>
        </section>
        <div className="principles wrap">
          <span>Software Engineering background</span>
          <span>Product thinking</span>
          <span>AI-assisted workflow</span>
          <span className="principles-end">
            От замысла до работающего продукта
          </span>
        </div>
        <section id="projects" className="section wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / SELECTED WORK</p>
              <h2>
                Идеи, которые
                <br />
                стали продуктами<span className="blue">.</span>
              </h2>
            </div>
            <p>
              Образовательные платформы, инструменты
              <br />
              для разработчиков и интерактивные приложения.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} featured={i === 0} />
            ))}
          </div>
          <div className="other-work">
            <div>
              <p className="eyebrow">OTHER WORK</p>
              <h3>Booking Platform MVP</h3>
              <p>
                Онлайн-запись, профили мастеров, портфолио и расписание.
                Авторизация мастеров и клиентов, история записей, фильтры и
                SMS-напоминания.
              </p>
            </div>
            <Tags
              items={["Next.js 16", "React 19", "PostgreSQL", "ProntoSMS"]}
            />
          </div>
        </section>
        <section id="approach" className="approach">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">02 / HOW I WORK</p>
                <h2>
                  AI-assisted.
                  <br />
                  Human-directed.
                </h2>
              </div>
              <div className="approach-intro">
                <p>
                  I use AI coding agents as part of my engineering workflow —
                  not as a replacement for understanding the product.
                </p>
                <p className="muted">
                  AI ускоряет реализацию. Продуктовые решения, структура данных
                  и ответственность за результат остаются за мной.
                </p>
              </div>
            </div>
            <Flow
              items={[
                "Product idea",
                "Architecture",
                "Implementation with Codex",
                "Code review & verification",
                "Testing",
                "Debugging",
                "Deployment",
              ]}
            />
            <div className="approach-columns">
              <div>
                <span>01</span>
                <h3>Сначала — задача</h3>
                <p>
                  Продумываю сценарии, роли, ограничения и структуру данных до
                  реализации интерфейса.
                </p>
              </div>
              <div>
                <span>02</span>
                <h3>AI в рабочем процессе</h3>
                <p>
                  Использую Codex и ChatGPT для функций, SQL и миграций,
                  рефакторинга, анализа кода и документации.
                </p>
              </div>
              <div>
                <span>03</span>
                <h3>Результат под контролем</h3>
                <p>
                  Читаю и проверяю изменения, тестирую сценарии, исправляю
                  ошибки и довожу продукт до рабочего состояния.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section wrap" id="skills">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / TOOLKIT</p>
              <h2>
                Полный цикл.
                <br />
                Нужные инструменты.
              </h2>
            </div>
            <p>
              От пользовательского интерфейса
              <br />
              до данных, интеграций и проверки кода.
            </p>
          </div>
          <div className="skills-grid">
            {Object.entries(skills).map(([title, items]) => (
              <div key={title}>
                <h3>{title}</h3>
                <ul>
                  {items.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <section id="about" className="about wrap">
          <div>
            <p className="eyebrow">04 / BACKGROUND</p>
            <h2>
              Инженерная база.
              <br />
              Продуктовое мышление.
            </h2>
          </div>
          <div>
            <p className="degree">Software Engineering degree</p>
            <p>
              Соединяю опыт веб-разработки и работы с образовательными
              продуктами: понимаю и техническую систему, и людей, которые ею
              пользуются.
            </p>
            <ol className="career">
              <li>Commercial Web Developer</li>
              <li>EdTech Product & Team Lead</li>
              <li>AI-assisted Product Development</li>
            </ol>
          </div>
        </section>
        <section className="contact wrap" id="contact">
          <p className="eyebrow">05 / LET’S BUILD SOMETHING</p>
          <h2>
            Есть идея?
            <br />
            Давайте сделаем её
            <br />
            <span>работающим продуктом.</span>
          </h2>
          <div className="contact-bottom">
            <p>Продуктовая разработка · Full-stack · EdTech</p>
            <div className="contact-links">
              <a className="button primary" href="mailto:esfirpr@gmail.com">
                esfirpr@gmail.com
              </a>
              <a className="button secondary" href="https://t.me/EsfirPr" target="_blank" rel="noreferrer">
                Telegram / @EsfirPr
              </a>
              <a className="button secondary" href="https://github.com/esfirpr" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
      <div className="wrap">
        <Footer />
      </div>
    </div>
  );
}
