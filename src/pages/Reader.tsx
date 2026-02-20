import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, X } from "lucide-react";
import { getBookById } from "@/data/books";

const Reader = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const navigate = useNavigate();
  const book = bookId ? getBookById(bookId) : null;

  if (!book) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-lg text-muted-foreground mb-4">
            Book not found
          </p>
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

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Reader Header */}
      <header className="bg-card border-b border-border px-4 py-3">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-secondary rounded-full transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Go back"
            >
              <ArrowLeft size={18} />
            </button>
            <div>
              <h1 className="font-serif text-base font-medium text-foreground">
                {book.title}
              </h1>
              <p className="font-sans text-xs text-muted-foreground">
                by {book.author}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={book.googleDocsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-sans text-muted-foreground hover:text-foreground hover:bg-secondary rounded-sm transition-colors"
            >
              <ExternalLink size={14} />
              Open in new tab
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
      </header>

      {/* Embedded Reader */}
      <main className="flex-1 bg-card">
        <iframe
          src={book.googleDocsUrl}
          title={book.title}
          className="w-full h-full min-h-[calc(100vh-60px)] border-0"
          allow="autoplay"
        />
      </main>
    </div>
  );
};

export default Reader;