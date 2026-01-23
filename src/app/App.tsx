import { Twitter, Instagram, UtensilsCrossed, Github, Mail, Music, BookOpen, AtSign, Film } from "lucide-react";
import logo from "../logo.png";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  color: string;
}

export default function App() {
  const socialLinks: SocialLink[] = [
    {
      name: "X",
      url: "https://x.com/tnkrk121",
      icon: <Twitter className="size-6" />,
      color: "hover:bg-black",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/tnkrk.121",
      icon: <Instagram className="size-6" />,
      color: "hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCAF45]",
    },
    {
      name: "Filmarks",
      url: "https://filmarks.com/users/tnkrk121",
      icon: <Film className="size-6" />,
      color: "hover:bg-[#FF6B6B]",
    },
    {
      name: "Apple Music",
      url: "https://music.apple.com/profile/tnkrk121",
      icon: <Music className="size-6" />,
      color: "hover:bg-[#FA243C]",
    },
    {
      name: "食べログ",
      url: "https://tabelog.com/rvwr/tnkrk121",
      icon: <UtensilsCrossed className="size-6" />,
      color: "hover:bg-[#D2691E]",
    },
    {
      name: "ブクログ",
      url: "https://booklog.jp/users/tnkrk121",
      icon: <BookOpen className="size-6" />,
      color: "hover:bg-[#6B4423]",
    },
    {
      name: "Threads",
      url: "https://www.threads.net/@tnkrk.121",
      icon: <AtSign className="size-6" />,
      color: "hover:bg-black",
    },
    // {
    //   name: "GitHub",
    //   url: "https://github.com",
    //   icon: <Github className="size-6" />,
    //   color: "hover:bg-[#333]",
    // },
    // {
    //   name: "Email",
    //   url: "mailto:your.email@example.com",
    //   icon: <Mail className="size-6" />,
    //   color: "hover:bg-[#EA4335]",
    // },
  ];

  return (
    <div className="h-[100dvh] bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
      <div className="h-full overflow-hidden">
        <div className="h-full overflow-y-auto overscroll-contain px-4 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
          <div className="min-h-full flex items-center justify-center py-4">
            <div className="w-full max-w-sm">
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 space-y-6 border border-gray-700/50">
                {/* Profile Image */}
                <div className="flex justify-center">
                  <div className="relative">
                    <img
                      src={logo}
                      alt="プロフィール画像"
                      className="size-24 rounded-full object-cover border-4 border-gray-700 shadow-xl"
                    />
                  </div>
                </div>

                {/* Profile Info */}
                <div className="text-center space-y-2">
                  <h1 className="text-3xl text-white">tnkrk121</h1>
                  <p className="text-gray-300 text-base">
                    備忘録
                  </p>
                </div>

                {/* Social Links */}
                <div className="space-y-2.5 pt-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        flex items-center justify-center gap-3 
                        w-full py-3.5 px-5 
                        bg-gray-700/50 rounded-xl 
                        transition-all duration-300 
                        hover:scale-[1.02] hover:shadow-lg hover:text-white
                        text-gray-100 border border-gray-600/30
                        ${link.color}
                        group
                      `}
                    >
                      <span className="transition-transform group-hover:scale-110">
                        {link.icon}
                      </span>
                      <span className="text-base">{link.name}</span>
                    </a>
                  ))}
                </div>

                {/* Footer */}
                <div className="text-center pt-2">
                  <p className="text-sm text-gray-500">
                    © 2026 All rights reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
