import { useEffect, useRef, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getBookById, books } from "@/data/books";
import BrandMark from "@/components/BrandMark";

const Reader = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const navigate = useNavigate();
  const book = bookId ? getBookById(bookId) : null;

  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  // Track reading progress against the reader container scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const max = el.scrollHeight - el.clientHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, el.scrollTop / max)) : 0;
      setProgress(p);
      if (book) {
        try {
          localStorage.setItem(`onable:progress:${book.id}`, String(p));
        } catch {}
      }
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    // restore last position on mount
    if (book) {
      try {
        const saved = parseFloat(localStorage.getItem(`onable:progress:${book.id}`) || "0");
        if (saved > 0) {
          requestAnimationFrame(() => {
            const max = el.scrollHeight - el.clientHeight;
            el.scrollTop = max * saved;
            setProgress(saved);
          });
        }
      } catch {}
    }
    return () => el.removeEventListener("scroll", onScroll);
  }, [book]);

  if (!book) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-lg text-muted-foreground mb-4">Book not found</p>
          <Link
            to="/library"
            className="font-sans text-sm text-accent hover:text-foreground transition-colors"
          >
            ← Back to Library
          </Link>
        </div>
      </div>
    );
  }

  // Prev/Next in shelf order
  const idx = books.findIndex((b) => b.id === book.id);
  const prev = idx > 0 ? books[idx - 1] : null;
  const next = idx < books.length - 1 ? books[idx + 1] : null;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Reader Header */}
      <header className="sticky top-0 z-20 bg-background/90 backdrop-blur-md border-b border-border/70">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-secondary rounded-full transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Go back"
            >
              <ArrowLeft size={18} />
            </button>
            <BrandMark size={20} className="text-accent hidden sm:inline shrink-0" />
            <div className="min-w-0">
              <h1 className="font-serif text-[15px] text-foreground truncate">{book.title}</h1>
              <p className="font-sans text-[11px] tracking-[0.16em] uppercase text-muted-foreground truncate">
                by {book.author}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            <a
              href={book.googleDocsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 text-xs font-sans text-muted-foreground hover:text-foreground hover:bg-secondary rounded-sm transition-colors"
            >
              <ExternalLink size={14} /> Open in Docs
            </a>
            <Link
              to="/library"
              className="p-2 hover:bg-secondary rounded-full transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Close reader"
            >
              <X size={18} />
            </Link>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-[2px] bg-border/60 relative">
          <motion.div
            className="absolute inset-y-0 left-0 bg-accent"
            style={{ width: `${progress * 100}%` }}
            transition={{ ease: "linear" }}
          />
        </div>
      </header>

      {/* Reader body */}
      <AnimatePresence mode="wait">
        <motion.main
          key={book.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 flex flex-col"
        >
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto"
          >
            <div className="max-w-5xl mx-auto w-full px-3 md:px-6 py-6">
              {/* Chapter opener */}
              <div className="flex items-center justify-center gap-3 py-6 text-muted-foreground">
                <span className="h-px w-16 bg-border" />
                <BrandMark size={18} className="text-accent" />
                <span className="h-px w-16 bg-border" />
              </div>

              <div className="bg-card rounded-sm book-shadow overflow-hidden">
                <iframe
                  src={book.googleDocsUrl}
                  title={book.title}
                  className="w-full border-0 block"
                  style={{ height: "78vh" }}
                  allow="autoplay"
                />
              </div>

              {/* Closing mark */}
              <div className="flex items-center justify-center gap-3 py-10 text-muted-foreground">
                <span className="h-px w-16 bg-border" />
                <BrandMark size={18} className="text-accent" />
                <span className="h-px w-16 bg-border" />
              </div>

              {/* Prev / Next navigation */}
              <nav className="grid sm:grid-cols-2 gap-4 pb-16">
                {prev ? (
                  <Link
                    to={`/reader/${prev.id}`}
                    className="group border border-border rounded-sm p-5 hover:border-accent transition-colors"
                  >
                    <p className="font-sans text-[10px] tracking-[0.24em] uppercase text-muted-foreground mb-2">
                      ← Previous
                    </p>
                    <p className="font-serif text-base text-foreground group-hover:text-accent transition-colors">
                      {prev.title}
                    </p>
                  </Link>
                ) : <div />}
                {next ? (
                  <Link
                    to={`/reader/${next.id}`}
                    className="group border border-border rounded-sm p-5 text-right hover:border-accent transition-colors"
                  >
                    <p className="font-sans text-[10px] tracking-[0.24em] uppercase text-muted-foreground mb-2">
                      Next →
                    </p>
                    <p className="font-serif text-base text-foreground group-hover:text-accent transition-colors">
                      {next.title}
                    </p>
                  </Link>
                ) : <div />}
              </nav>
            </div>
          </div>
        </motion.main>
      </AnimatePresence>
    </div>
  );
};

export default Reader;
