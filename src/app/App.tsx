import { Twitter, Instagram, UtensilsCrossed, Github, Mail, Music, BookOpen, AtSign, Film } from "lucide-react";

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
      url: "https://x.com",
      icon: <Twitter className="size-5" />,
      color: "hover:bg-black",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/tnkrk.121",
      icon: <Instagram className="size-5" />,
      color: "hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCAF45]",
    },
    {
      name: "Threads",
      url: "https://www.threads.net/@tnkrk.121",
      icon: <AtSign className="size-5" />,
      color: "hover:bg-black",
    },
    {
      name: "Apple Music",
      url: "https://music.apple.com",
      icon: <Music className="size-5" />,
      color: "hover:bg-[#FA243C]",
    },
    {
      name: "食べログ",
      url: "https://tabelog.com",
      icon: <UtensilsCrossed className="size-5" />,
      color: "hover:bg-[#D2691E]",
    },
    {
      name: "booklog",
      url: "https://booklog.jp",
      icon: <BookOpen className="size-5" />,
      color: "hover:bg-[#6B4423]",
    },
    {
      name: "Filmarks",
      url: "https://filmarks.com",
      icon: <Film className="size-5" />,
      color: "hover:bg-[#FF6B6B]",
    },
    {
      name: "GitHub",
      url: "https://github.com",
      icon: <Github className="size-5" />,
      color: "hover:bg-[#333]",
    },
    {
      name: "Email",
      url: "mailto:your.email@example.com",
      icon: <Mail className="size-5" />,
      color: "hover:bg-[#EA4335]",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 space-y-6 border border-gray-700/50">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1613145997970-db84a7975fbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9maWxlJTIwcG9ydHJhaXQlMjBwZXJzb258ZW58MXx8fHwxNzY5MDg5MDM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="プロフィール画像"
                className="size-24 rounded-full object-cover border-4 border-gray-700 shadow-xl"
              />
            </div>
          </div>

          {/* Profile Info */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl text-white">あなたの名前</h1>
            <p className="text-gray-300 text-sm">
              自己紹介文がここに入ります。趣味や仕事、好きなことなどを簡単に書いてみましょう。
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
                <span className="text-sm">{link.name}</span>
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center pt-2">
            <p className="text-xs text-gray-500">
              © 2026 All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}