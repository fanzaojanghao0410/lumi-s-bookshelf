import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  googleDocsUrl: string;
  description?: string;
  status?: string;
}

interface BookCardProps {
  book: Book;
  index?: number;
}

const BookCard = ({ book, index = 0 }: BookCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link to={`/reader/${book.id}`} className="block">
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[2/3] overflow-hidden rounded-[3px] book-shadow group-hover:book-shadow-hover transition-shadow duration-500"
        >
          <img
            src={book.coverUrl}
            alt={book.title}
            className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
          />
          {/* soft warm glaze */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent opacity-60" />
          {/* thin inner border */}
          <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5" />
        </motion.div>

        <div className="mt-4 space-y-1">
          <h3 className="font-serif text-[15px] leading-snug text-foreground line-clamp-2">
            {book.title}
          </h3>
          <div className="flex items-center gap-2 text-[12px] font-serif italic text-muted-foreground">
            <span>by {book.author}</span>
            {book.status && (
              <>
                <span className="h-[3px] w-[3px] rounded-full bg-muted-foreground/60" />
                <span className="text-accent/80">{book.status}</span>
              </>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BookCard;
