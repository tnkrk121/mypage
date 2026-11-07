import type { ReactNode } from "react";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import MovieIcon from "@mui/icons-material/Movie";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DescriptionIcon from "@mui/icons-material/Description";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import networkBackground from "../assets/network-background.webp";

type Profile = {
  name: string;
  url: string;
  icon: ReactNode;
};

export const profiles: Profile[] = [
  { name: "X", url: "https://x.com/tnkrk121", icon: <XIcon /> },
  { name: "Instagram", url: "https://www.instagram.com/tnkrk.121", icon: <InstagramIcon /> },
  { name: "Filmarks", url: "https://filmarks.com/users/tnkrk121", icon: <MovieIcon /> },
  { name: "Apple Music", url: "https://music.apple.com/profile/tnkrk121", icon: <MusicNoteIcon /> },
  { name: "食べログ", url: "https://tabelog.com/rvwr/tnkrk121", icon: <RestaurantIcon /> },
  { name: "ブクログ", url: "https://booklog.jp/users/tnkrk121", icon: <MenuBookIcon /> },
  { name: "note", url: "https://note.com/tnkrk121", icon: <DescriptionIcon /> },
  { name: "Threads", url: "https://www.threads.net/@tnkrk.121", icon: <AlternateEmailIcon /> },
  { name: "YouTube", url: "https://www.youtube.com/@tnkrk121", icon: <YouTubeIcon /> },
  { name: "ChatGPT", url: "https://chatgpt.com/u/tnkrk121", icon: <ChatBubbleOutlineIcon /> },
  { name: "GitHub", url: "https://github.com/tnkrk121", icon: <GitHubIcon /> },
  { name: "Credly", url: "https://credly.com/users/tnkrk121", icon: <WorkspacePremiumIcon /> },
];

export default function App() {
  return (
    <div className="site-shell">
      <div
        className="network-backdrop"
        aria-hidden="true"
        style={{ backgroundImage: "url(" + networkBackground + ")" }}
      />
      <a className="skip-link" href="#profiles">プロフィールへ</a>

      <header className="sitebar">
        <a className="domain" href="/" aria-label="tnkrk121.com ホーム">tnkrk121.com</a>
        <span>PERSONAL ID / {profiles.length} PROFILES</span>
      </header>

      <main>
        <section className="identity" aria-labelledby="site-title">
          <p className="eyebrow">PERSONAL DIGITAL ID</p>
          <h1 id="site-title">TNKRK121</h1>
          <p className="tagline">One identity. Many places.</p>
          <p className="side-note">{profiles.length} PROFILES<br />ONE IDENTITY</p>
        </section>

        <nav
          id="profiles"
          className="shelf-grid"
          aria-label={profiles.length + "のプロフィール"}
          tabIndex={-1}
        >
          {profiles.map((profile) => (
            <a
              className="shelf-item"
              href={profile.url}
              key={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={profile.name + "のプロフィールを新しいタブで開く"}
            >
              <span className="profile-icon" aria-hidden="true">{profile.icon}</span>
              <span className="profile-name">{profile.name}</span>
            </a>
          ))}
        </nav>
      </main>

      <footer className="site-footer">
        <strong>TNKRK121</strong>
        <span>ONE ID / {profiles.length} PLACES</span>
        <span>© TNKRK121</span>
      </footer>
    </div>
  );
}
