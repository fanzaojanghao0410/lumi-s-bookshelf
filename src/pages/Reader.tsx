import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getBookById } from "@/data/books";
import BrandMark from "@/components/BrandMark";

const Reader = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const navigate = useNavigate();
  const book = bookId ? getBookById(bookId) : null;

  if (!book) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="text-center">
          <p className="font-serif text-lg text-muted-foreground mb-4">Book not found</p>
          <Link
            to="/library"
            className="font-serif italic text-sm text-accent hover:text-foreground transition-colors"
          >
            ← Back to the library
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Reader Header */}
      <header className="sticky top-0 z-20 bg-background/90 backdrop-blur-md border-b border-border/70">
        <div className="max-w-5xl mx-auto px-3 sm:px-6 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-secondary rounded-full transition-colors text-muted-foreground hover:text-foreground shrink-0"
              aria-label="Go back"
            >
              <ArrowLeft size={18} />
            </button>
            <BrandMark size={22} className="hidden sm:inline shrink-0" />
            <div className="min-w-0">
              <h1 className="font-serif text-[15px] sm:text-base text-foreground truncate leading-tight">
                {book.title}
              </h1>
              <p className="font-serif italic text-[12px] text-muted-foreground truncate">
                by {book.author}
              </p>
            </div>
          </div>

          <a
            href={book.googleDocsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-serif italic text-muted-foreground hover:text-accent hover:bg-secondary rounded-sm transition-colors shrink-0"
            aria-label="Open in Google Docs"
          >
            <ExternalLink size={14} />
            <span className="hidden sm:inline">Open in Docs</span>
            <span className="sm:hidden">Docs</span>
          </a>
        </div>
      </header>

      {/* Reader body */}
      <main className="flex-1">
        <div className="max-w-4xl mx-auto w-full px-2 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center justify-center gap-3 py-4 text-muted-foreground">
            <span className="h-px w-12 bg-border" />
            <BrandMark size={16} />
            <span className="h-px w-12 bg-border" />
          </div>

          <div className="bg-card rounded-sm book-shadow overflow-hidden">
            <iframe
              src={book.googleDocsUrl}
              title={book.title}
              className="w-full border-0 block"
              style={{ height: "82vh" }}
              allow="autoplay"
            />
          </div>

          <div className="flex flex-col items-center gap-4 py-10 text-muted-foreground">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-border" />
              <BrandMark size={16} />
              <span className="h-px w-12 bg-border" />
            </div>
            <Link
              to="/library"
              className="font-serif italic text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              ← Back to the library
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Reader;
