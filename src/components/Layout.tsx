import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">{children}</main>
      <footer className="border-t border-border py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
              aria-label="Instagram"
            >
              {/* Replace /social/instagram.png with your PNG from Freepik (public/social) */}
              <img
                src="/social/instagram.png"
                alt="Instagram"
                className="w-8 h-8 object-contain"
              />
            </a>
            <a
              href="https://wattpad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
              aria-label="Wattpad"
            >
              {/* Replace /social/wattpad.png with your PNG from Freepik (public/social) */}
              <img
                src="/social/wattpad.png"
                alt="Wattpad"
                className="w-8 h-8 object-contain"
              />
            </a>
          </div>

          <p className="font-serif text-sm text-muted-foreground italic">
            Stories guided by silence, written between worlds.
          </p>
          <p className="font-sans text-xs text-muted-foreground mt-2">
            © 2025 Copilot Scripts · by Ojan
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;