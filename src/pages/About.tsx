import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              About
            </h1>
            <p className="font-sans text-sm text-muted-foreground tracking-wide">
              The creator behind these words
            </p>
          </div>

          {/* Content */}
          <article className="prose prose-lg mx-auto animate-fade-in" style={{ animationDelay: "150ms" }}>
            <div className="space-y-6 font-serif text-foreground leading-relaxed">
              <p>
                <strong className="text-accent">Copilot Scripts</strong> is a personal digital space 
                created by <em>Celestial Copilot</em>, a creator who believes that stories are not 
                meant to be rushed.
              </p>

              <p>
                This website is designed as a quiet place—where words, scripts, and reflections 
                can be read slowly, like opening a physical book page by page.
              </p>

              <div className="border-l-2 border-accent pl-6 my-8">
                <p className="italic text-muted-foreground">
                  "The works shared here are not meant to impress, but to accompany."
                </p>
              </div>

              <p>
                Writing under the pen name <strong className="text-gold">Lumi</strong>—derived from 
                the word <em>lumen</em>, meaning a gentle light—the focus is on subtle emotions, 
                grounded thoughts, and moments that often go unnoticed.
              </p>

              <p>
                <em>Celestial Copilot</em> represents the role of a guide—not the center of the story, 
                but a companion on the journey. These writings don't seek to dazzle; they seek to 
                illuminate softly, like a lamp by a bedside.
              </p>
            </div>

            {/* Signature */}
              <div className="mt-12 pt-8 border-t border-border text-center">
              <p className="font-serif text-lg text-muted-foreground italic">
                — Ojan
              </p>
              <p className="font-sans text-xs text-muted-foreground mt-2 tracking-wider uppercase">
                Celestial Copilot
              </p>
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default About;