import { ReactNode } from "react";
import { Icon } from "@iconify/react";
import Header from "./Header";
import BrandMark from "./BrandMark";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="pt-20 flex-1">{children}</main>
      <footer className="border-t border-border/70 mt-24">
        <div className="container mx-auto px-6 py-10">
          <div className="flex flex-col items-center gap-5 text-center">
            <BrandMark size={20} className="text-accent" />

            <p className="font-serif italic text-sm text-muted-foreground max-w-sm">
              Stories guided by silence, written between worlds.
            </p>

            <div className="flex items-center gap-5">
              <a
                href="https://www.instagram.com/0jan.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
                aria-label="Instagram"
              >
                <Icon icon="mdi:instagram" width="20" height="20" />
              </a>
              <span className="h-3 w-px bg-border" aria-hidden="true" />
              <a
                href="https://wattpad.com/thecopilotmaverick"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
                aria-label="Wattpad"
              >
                <Icon icon="simple-icons:wattpad" width="18" height="18" />
              </a>
            </div>

            <p className="font-sans text-[11px] tracking-[0.18em] uppercase text-muted-foreground/80">
              By Ojan · Onable Scripts
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
