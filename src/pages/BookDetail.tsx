import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import BrandMark from "@/components/BrandMark";
import { getBookById } from "@/data/books";

const BookDetail = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const book = bookId ? getBookById(bookId) : null;

  if (!book) {
    return (
      <Layout>
        <section className="container mx-auto px-6 py-24 text-center">
          <p className="font-serif text-lg text-muted-foreground mb-4">Book not found</p>
          <Link
            to="/library"
            className="font-serif italic text-sm text-accent hover:text-foreground transition-colors"
          >
            ← Back to the library
          </Link>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="container mx-auto px-6 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            {/* Cover */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-4 mx-auto md:mx-0 w-full max-w-[200px] md:max-w-none"
            >
              <div className="relative aspect-[2/3] overflow-hidden rounded-[3px] book-shadow">
                <img src={book.coverUrl} alt={book.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5" />
              </div>
            </motion.div>

            {/* Meta */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-8"
            >
              <p className="font-serif italic text-sm text-muted-foreground mb-3">About this book</p>
              <h1 className="font-serif text-3xl md:text-4xl leading-tight text-foreground mb-3">
                {book.title}
              </h1>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-serif italic text-[13px] text-muted-foreground">
                <span>by {book.author}</span>
                {book.genre && (
                  <>
                    <span className="h-[3px] w-[3px] rounded-full bg-muted-foreground/60" />
                    <span className="text-accent/80">{book.genre}</span>
                  </>
                )}
                {book.releaseDate && (
                  <>
                    <span className="h-[3px] w-[3px] rounded-full bg-muted-foreground/60" />
                    <span>{book.releaseDate}</span>
                  </>
                )}
                {book.status && (
                  <>
                    <span className="h-[3px] w-[3px] rounded-full bg-muted-foreground/60" />
                    <span>{book.status}</span>
                  </>
                )}
              </div>

              <div className="flex items-center gap-3 my-7 text-muted-foreground">
                <span className="h-px w-10 bg-border" />
                <BrandMark size={16} className="text-accent" />
                <span className="h-px w-10 bg-border" />
              </div>

              {(book.synopsis || book.description) && (
                <p className="font-serif text-[1.05rem] md:text-[1.12rem] leading-[1.75] text-foreground whitespace-pre-line">
                  {book.synopsis || book.description}
                </p>
              )}

              <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-3">
                <Link
                  to={`/reader/${book.id}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-sm bg-accent/90 hover:bg-accent text-accent-foreground font-serif text-[15px] transition-colors"
                >
                  Continue to reading
                  <ArrowRight size={16} />
                </Link>
                {book.googleDocsUrl && (
                  <a
                    href={book.googleDocsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 font-serif italic text-sm text-muted-foreground hover:text-accent hover:bg-secondary rounded-sm transition-colors"
                  >
                    <ExternalLink size={14} />
                    Open in Docs
                  </a>
                )}
              </div>

              <div className="mt-10">
                <Link
                  to="/library"
                  className="font-serif italic text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  ← Back to the library
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BookDetail;
