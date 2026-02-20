import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  googleDocsUrl: string;
  description?: string;
}

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className="group relative">
      <Link to={`/reader/${book.id}`} className="block">
        <div className="relative aspect-[2/3] overflow-hidden rounded-sm book-shadow transition-all duration-300 group-hover:book-shadow-hover group-hover:-translate-y-2">
          <img
            src={book.coverUrl}
            alt={book.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
        </div>
      </Link>

      <div className="mt-4 space-y-1">
        <h3 className="font-serif text-base font-medium text-foreground leading-tight line-clamp-2">
          {book.title}
        </h3>
        <p className="font-sans text-xs text-muted-foreground tracking-wide">
          by {book.author}
        </p>
      </div>

      {/* Quick action to open in new tab */}
      <a
        href={book.googleDocsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-2 right-2 p-2 bg-background/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-accent hover:text-accent-foreground"
        aria-label="Open in new tab"
        onClick={(e) => e.stopPropagation()}
      >
        <ExternalLink size={14} />
      </a>
    </div>
  );
};

export default BookCard;