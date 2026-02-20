import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import Layout from "@/components/Layout";
import BookCard from "@/components/BookCard";
import { books } from "@/data/books";

const Index = () => {
  const featuredBooks = books.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-6">
            <BookOpen size={16} className="text-accent" />
            <span className="font-sans text-xs tracking-wider text-muted-foreground uppercase">
              Book Shelf
            </span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight mb-6">
            Copilot Scripts
          </h1>
          
          <p className="font-serif text-lg md:text-xl text-muted-foreground italic mb-8 leading-relaxed">
            Stories guided by silence, written between worlds.
          </p>
          
          <p className="font-sans text-base text-muted-foreground leading-relaxed max-w-lg mx-auto mb-10">
            A quiet space for stories, scripts, and reflections. 
            These words are not meant to impress—they are here to accompany.
          </p>
          
          <Link
            to="/library"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-sm font-sans text-sm tracking-wide hover:bg-accent transition-colors duration-200"
          >
            Browse the Library
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Featured Books */}
      <section className="container mx-auto px-6 py-16 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-serif text-2xl text-foreground">Recent Works</h2>
            <Link
              to="/library"
              className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              View all <ArrowRight size={14} />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {featuredBooks.map((book, index) => (
              <div
                key={book.id}
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <BookCard book={book} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="container mx-auto px-6 py-16 border-t border-border">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-serif text-lg text-muted-foreground italic leading-relaxed mb-6">
            "Writing under the pen name 'Lumi', the focus is on subtle emotions, 
            grounded thoughts, and moments that often go unnoticed."
          </p>
          <Link
            to="/about"
            className="font-sans text-sm text-accent hover:text-foreground transition-colors"
          >
            About the Author →
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
