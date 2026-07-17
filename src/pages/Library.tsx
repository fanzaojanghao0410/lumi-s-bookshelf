import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import BookCard from "@/components/BookCard";
import BrandMark from "@/components/BrandMark";
import { books } from "@/data/books";

const Library = () => {
  return (
    <Layout>
      <section className="container mx-auto px-6 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="font-sans text-[11px] tracking-[0.24em] uppercase text-muted-foreground mb-4">
              The Library
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              A quiet shelf of stories
            </h1>
            <p className="font-sans text-[15px] leading-relaxed text-muted-foreground max-w-md mx-auto">
              Choose a book to open its pages. Each one is kept here for slow
              reading, not for hurry.
            </p>
            <div className="flex items-center justify-center gap-3 mt-8 text-muted-foreground">
              <span className="h-px w-10 bg-border" />
              <BrandMark size={16} className="text-accent" />
              <span className="h-px w-10 bg-border" />
            </div>
          </motion.div>

          {/* Shelf */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-14 md:gap-x-10">
            {books.map((book, i) => (
              <BookCard key={book.id} book={book} index={i} />
            ))}
          </div>

          {books.length === 0 && (
            <div className="text-center py-16">
              <p className="font-serif italic text-muted-foreground">
                The shelves are empty for now. Stories are being written…
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Library;
