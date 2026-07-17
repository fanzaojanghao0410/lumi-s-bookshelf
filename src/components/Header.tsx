import { Link, useLocation } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import BrandMark from "./BrandMark";

const Header = () => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/library", label: "Library" },
    { path: "/about", label: "About" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/70">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <nav className="flex items-center justify-between gap-3">
          <Link
            to="/"
            className="flex items-center gap-2 text-foreground hover:text-accent transition-colors min-w-0"
          >
            <BrandMark size={24} className="shrink-0" />
            <span className="font-serif text-base sm:text-lg tracking-tight truncate">Onable Scripts</span>
          </Link>

          <div className="flex items-center gap-3 sm:gap-8">
            <ul className="flex items-center gap-3 sm:gap-7">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`font-sans text-[13px] sm:text-sm tracking-wide transition-colors ${
                      isActive(link.path)
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
