import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import BookCard from "@/components/BookCard";
import BrandMark from "@/components/BrandMark";
import { books } from "@/data/books";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const Index = () => {
  const featuredBooks = books.slice(0, 4);

  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center paper-grain overflow-hidden">
        {/* soft ambient shapes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute top-1/4 -left-24 w-[380px] h-[380px] rounded-full bg-accent/8 blur-3xl" />
          <div className="absolute bottom-10 right-0 w-[440px] h-[440px] rounded-full bg-gold/10 blur-3xl" />
        </motion.div>

        <div className="container mx-auto px-6 py-24 relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 mb-8 text-muted-foreground"
            >
              <span className="h-px w-8 bg-border" />
              <BrandMark size={16} className="text-accent" />
              <span className="font-sans text-[11px] tracking-[0.22em] uppercase">A personal library</span>
              <BrandMark size={16} className="text-accent" />
              <span className="h-px w-8 bg-border" />
            </motion.div>

            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight text-foreground mb-8"
            >
              Onable<br className="md:hidden" />
              <span className="italic text-accent"> Scripts</span>
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="font-serif italic text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-6"
            >
              Stories guided by silence, written between worlds.
            </motion.p>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="font-sans text-[15px] leading-relaxed text-muted-foreground max-w-md mx-auto mb-10"
            >
              A quiet space for stories, scripts, and reflections. These words
              are here to accompany, not to impress.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5"
            >
              <Link
                to="/library"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-sm font-sans text-sm tracking-wide hover:bg-accent transition-colors duration-300"
              >
                Browse the Library
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-sm font-sans text-sm tracking-wide text-foreground hover:border-accent hover:text-accent transition-colors duration-300"
              >
                Meet the Author
              </Link>
            </motion.div>
          </div>

          {/* scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/70"
          >
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase">Turn the page</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="h-8 w-px bg-border"
            />
          </motion.div>
        </div>
      </section>

      {/* STORY INTRO — book preface */}
      <section className="container mx-auto px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8 text-muted-foreground">
            <span className="h-px flex-1 bg-border" />
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase">Preface</span>
            <span className="h-px flex-1 bg-border" />
          </div>

          <p className="font-serif text-2xl md:text-[1.7rem] leading-[1.5] text-foreground first-letter:text-5xl first-letter:font-medium first-letter:text-accent first-letter:mr-1 first-letter:float-left first-letter:leading-[0.9] first-letter:mt-1">
            This is a shelf, not a storefront. A slow place where poems, notes,
            and scripts are kept the way one keeps letters — with a little care,
            and no hurry.
          </p>

          <p className="font-sans text-[15px] leading-relaxed text-muted-foreground mt-6">
            Written by lumi. Kept by Onable Scripts.
          </p>
        </motion.div>
      </section>

      {/* VISUAL TRANSITION — floating pages */}
      <section className="relative py-16 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="relative h-40 md:h-52 flex items-center justify-center">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, rotate: 0 }}
                whileInView={{
                  opacity: [0, 1, 1],
                  y: [-2, -14, -2],
                  rotate: [-6 + i * 6, -4 + i * 4, -6 + i * 6],
                }}
                viewport={{ once: false, margin: "-20%" }}
                transition={{
                  duration: 6 + i,
                  delay: i * 0.3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                style={{
                  left: `calc(50% + ${(i - 1) * 44}px)`,
                }}
                className="absolute w-24 h-32 md:w-28 md:h-36 bg-card border border-border rounded-[2px] book-shadow -translate-x-1/2"
              >
                <div className="p-3 space-y-1.5">
                  <div className="h-[2px] bg-muted-foreground/25 w-3/4" />
                  <div className="h-[2px] bg-muted-foreground/20 w-full" />
                  <div className="h-[2px] bg-muted-foreground/20 w-5/6" />
                  <div className="h-[2px] bg-muted-foreground/15 w-2/3" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORKS */}
      <section className="container mx-auto px-6 py-20 border-t border-border/60">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-end justify-between mb-12"
          >
            <div>
              <p className="font-sans text-[11px] tracking-[0.22em] uppercase text-muted-foreground mb-3">
                On the shelf
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">Recent works</h2>
            </div>
            <Link
              to="/library"
              className="hidden sm:inline-flex items-center gap-1 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View library <ArrowRight size={14} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {featuredBooks.map((book, i) => (
              <BookCard key={book.id} book={book} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY / QUOTE */}
      <section className="container mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto text-center"
        >
          <BrandMark size={26} className="text-accent mx-auto mb-8 opacity-80" />
          <blockquote className="font-serif text-2xl md:text-3xl leading-[1.4] text-foreground italic">
            “The best writing does not need to rush.
            <br className="hidden md:block" /> It waits with you, page by page.”
          </blockquote>
          <p className="mt-8 font-sans text-[11px] tracking-[0.24em] uppercase text-muted-foreground">
            — lumi
          </p>
        </motion.div>
      </section>

      {/* FINAL INVITATION */}
      <section className="container mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-xl mx-auto text-center border-t border-border/60 pt-16"
        >
          <p className="font-serif text-xl md:text-2xl text-foreground mb-3">
            Take your time.
          </p>
          <p className="font-serif italic text-muted-foreground mb-8">
            The pages will wait.
          </p>
          <Link
            to="/library"
            className="inline-flex items-center gap-2 font-sans text-sm text-accent hover:text-foreground transition-colors"
          >
            Begin reading <ArrowRight size={14} />
          </Link>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Index;
