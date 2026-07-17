import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import BrandMark from "@/components/BrandMark";
import authorPhoto from "@/assets/author-lumi.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

const About = () => {
  return (
    <Layout>
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="font-serif italic text-sm text-muted-foreground mb-4">
              About
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-3">
              The creator behind these words
            </h1>
            <div className="flex items-center justify-center gap-3 mt-6 text-muted-foreground">
              <span className="h-px w-10 bg-border" />
              <BrandMark size={16} className="text-accent" />
              <span className="h-px w-10 bg-border" />
            </div>
          </motion.div>

          {/* Photo + Intro grid */}
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            {/* Photo column */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.9 }}
              className="md:col-span-4 mx-auto md:mx-0 w-full max-w-[240px] md:max-w-none"
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-accent/10 rounded-sm rotate-[-1.5deg]" aria-hidden="true" />
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm book-shadow">
                  <img
                    src={authorPhoto}
                    alt="lumi — Celestial Copilot"
                    className="w-full h-full object-cover"
                  />
                  {/* soft warm veil so the photo blends with the page */}
                  <div className="absolute inset-0 bg-[hsl(var(--background))]/25 mix-blend-multiply pointer-events-none" aria-hidden="true" />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/15 via-transparent to-background/10 pointer-events-none" aria-hidden="true" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-foreground/10 pointer-events-none" aria-hidden="true" />
                </div>
                <p className="mt-4 font-serif italic text-[13px] text-muted-foreground text-center">
                  lumi — pen name of Celestial Copilot
                </p>
              </div>
            </motion.div>

            {/* Text column */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="md:col-span-8 space-y-6 font-serif text-[1.05rem] md:text-[1.15rem] leading-[1.75] text-foreground"
            >
              <p className="first-letter:text-5xl first-letter:font-medium first-letter:text-accent first-letter:mr-2 first-letter:float-left first-letter:leading-[0.9]">
                Hello. I write under the name <em className="text-accent not-italic">lumi</em>, a
                pen name chosen to make room for quiet, thoughtful words. Behind this
                space stands <strong className="font-medium">Onable Scripts</strong> — a
                companion to stories, believing that the best writing does not need to rush.
              </p>

              <p className="text-muted-foreground">
                Onable Scripts was created as a personal shelf: a place to keep
                poems, notes, scripts, and fragments of life that feel too easily
                forgotten.
              </p>

              <p>
                I am deeply interested in <span className="text-accent">psychology</span> and
                in the many forms of <span className="text-accent">acting</span>. I am drawn
                to stories that explore emotion, character, silence, and the small
                details that reveal who we are.
              </p>
            </motion.div>
          </div>

          {/* Continued prose — full width, tidy */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-20 max-w-2xl mx-auto space-y-8"
          >
            <div className="border-l-2 border-accent/60 pl-6">
              <p className="font-serif italic text-lg md:text-xl leading-relaxed text-muted-foreground">
                “Onable Scripts exists simply because I had nothing better to
                do — and because sometimes the quietest ideas deserve a home.”
              </p>
            </div>

            <p className="font-serif text-[1.1rem] leading-[1.75] text-foreground">
              If you choose to open one of these books, take it as an invitation,
              not a performance. Read slowly. Let the pages stay with you for a
              moment. Return whenever you wish.
            </p>

            <div className="pt-10 border-t border-border/60 flex flex-col items-center gap-2">
              <BrandMark size={22} className="text-accent" />
              <p className="font-serif italic text-lg text-foreground">— lumi</p>
              <p className="font-serif italic text-xs text-muted-foreground">
                Celestial Copilot
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
