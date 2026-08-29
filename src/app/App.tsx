import type { ReactNode } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  AtSign,
  BadgeCheck,
  BookOpen,
  Film,
  Headphones,
  Instagram,
  NotebookPen,
  UtensilsCrossed,
} from "lucide-react";

type LinkItem = {
  name: string;
  url: string;
  icon: ReactNode;
};

const links: LinkItem[] = [
  { name: "X", url: "https://x.com/tnkrk121", icon: <XMark /> },
  {
    name: "Instagram",
    url: "https://www.instagram.com/tnkrk.121",
    icon: <Instagram aria-hidden="true" />,
  },
  {
    name: "Filmarks",
    url: "https://filmarks.com/users/tnkrk121",
    icon: <Film aria-hidden="true" />,
  },
  {
    name: "Apple Music",
    url: "https://music.apple.com/profile/tnkrk121",
    icon: <Headphones aria-hidden="true" />,
  },
  {
    name: "食べログ",
    url: "https://tabelog.com/rvwr/tnkrk121",
    icon: <UtensilsCrossed aria-hidden="true" />,
  },
  {
    name: "ブクログ",
    url: "https://booklog.jp/users/tnkrk121",
    icon: <BookOpen aria-hidden="true" />,
  },
  {
    name: "note",
    url: "https://note.com/tnkrk121",
    icon: <NotebookPen aria-hidden="true" />,
  },
  {
    name: "Threads",
    url: "https://www.threads.net/@tnkrk.121",
    icon: <AtSign aria-hidden="true" />,
  },
  {
    name: "Credly",
    url: "https://credly.com/users/tnkrk121",
    icon: <BadgeCheck aria-hidden="true" />,
  },
];

function XMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M4.75 3.75 19.25 20.25M19.25 3.75 4.75 20.25"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BotanicalDrawing({ className }: { className: string }) {
  return (
    <svg
      className={`drawing ${className}`}
      viewBox="0 0 260 430"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <g stroke="currentColor" strokeWidth="0.9" vectorEffect="non-scaling-stroke">
        <path d="M36 438C43 333 88 278 98 202c8-62-12-112 48-196" />
        <path d="M83 287C32 271 10 232 14 188c48 9 76 47 69 99Z" />
        <path d="M96 224c61-21 91-61 89-111-54 4-88 42-89 111Z" />
        <path d="M109 158C77 135 67 99 82 67c39 19 50 55 27 91Z" />
        <path d="M127 92c43-9 69-34 73-66-40 3-65 27-73 66Z" />
        <path d="M70 337c66-4 108 25 126 70-58 15-107-11-126-70Z" />
        <path d="M61 349c-37-3-62 12-74 38 32 12 61-1 74-38Z" />
        <path d="M89 273c24 8 44 22 59 43M99 206c21-2 40-10 57-24M109 151c-12-12-19-27-22-46M127 91c18-8 33-20 44-36M71 337c33 12 62 31 86 57" />
      </g>
    </svg>
  );
}

function DecorativeLayer() {
  return (
    <div className="decorative-layer" aria-hidden="true">
      <div className="grid-fragment grid-fragment--hero" />
      <div className="grid-fragment grid-fragment--index" />

      <svg
        className="drawing drawing--architecture"
        viewBox="0 0 420 620"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <g stroke="currentColor" strokeWidth="0.85" vectorEffect="non-scaling-stroke">
          <path d="M58 612V172C58 84 129 13 217 13s159 71 159 159v440" />
          <path d="M92 612V181c0-69 56-125 125-125s125 56 125 125v431" />
          <path d="M126 612V191c0-50 41-91 91-91s91 41 91 91v421" />
          <path d="M11 235h160M91 278h264M187 12v131M217 100v119" />
          <path d="M14 330h116M217 235h178" strokeDasharray="2 7" />
          <path className="accent-stroke" d="M217 224v22M206 235h22" />
        </g>
      </svg>

      <BotanicalDrawing className="drawing--plant-hero" />

      <svg
        className="drawing drawing--steps"
        viewBox="0 0 360 460"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <g stroke="currentColor" strokeWidth="0.85" vectorEffect="non-scaling-stroke">
          <path d="M12 430h42v-43h43v-43h43v-43h43v-43h43v-43h43v-43h79" />
          <path d="M12 430h335M54 387V46M97 344V46M140 301V46" />
          <path d="M140 301c0-90 73-163 163-163h45" />
          <path d="M183 258V73h165M226 215V30h122" />
          <path d="M12 386h128M12 343h85" strokeDasharray="2 7" />
          <path className="accent-stroke" d="M290 138h24" />
        </g>
      </svg>

      <BotanicalDrawing className="drawing--plant-footer" />

      <div className="tech-dots tech-dots--hero">
        <span />
        <span />
        <span />
      </div>
      <div className="tech-dots tech-dots--index">
        <span />
        <span />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="app-viewport">
      <div className="site-scroll">
        <main className="site-shell">
          <DecorativeLayer />

          <section className="hero page-frame" aria-labelledby="site-title">
            <div className="hero-copy">
              <p className="hero-eyebrow">
                <span className="eyebrow-dot" aria-hidden="true" />
                Personal Index
              </p>
              <h1 id="site-title" className="site-title">
                TNKRK121
              </h1>
              <div className="hero-rule" aria-hidden="true">
                <span />
                <i />
              </div>
            </div>

            <a className="scroll-cue" href="#index" aria-label="INDEXへスクロール">
              <span className="scroll-cue__icon">
                <ArrowDown aria-hidden="true" />
              </span>
              <span>Scroll</span>
            </a>
          </section>

          <section id="index" className="index-section page-frame" aria-labelledby="index-title">
            <div className="index-inner">
              <header className="index-header">
                <h2 id="index-title">Index</h2>
                <span className="index-count" aria-label="9 links">
                  09
                </span>
              </header>

              <nav className="link-index" aria-label="外部サービス">
                {links.map((link, index) => (
                  <a
                    className="link-row"
                    href={link.url}
                    key={link.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${link.name}を新しいタブで開く`}
                  >
                    <span className="link-number">
                      <i aria-hidden="true" />
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="link-icon">{link.icon}</span>
                    <span className="link-name">{link.name}</span>
                    <ArrowUpRight className="link-arrow" aria-hidden="true" />
                  </a>
                ))}
              </nav>
            </div>
          </section>

          <footer className="site-footer page-frame">
            <span>tnkrk121.com</span>
            <span>© TNKRK121</span>
          </footer>
        </main>
      </div>
    </div>
  );
}
