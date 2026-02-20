import Layout from "@/components/Layout";
import BookCard from "@/components/BookCard";
import { books } from "@/data/books";

const Library = () => {
  return (
    <Layout>
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              The Library
            </h1>
            <p className="font-sans text-muted-foreground max-w-md mx-auto">
              A collection of writings, scripts, and quiet thoughts. 
              Click any book to begin reading.
            </p>
          </div>

          {/* Bookshelf Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
            {books.map((book, index) => (
              <div
                key={book.id}
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <BookCard book={book} />
              </div>
            ))}
          </div>

          {/* Empty state message if no books */}
          {books.length === 0 && (
            <div className="text-center py-16">
              <p className="font-serif text-muted-foreground italic">
                The shelves are empty for now. Stories are being written...
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Library;