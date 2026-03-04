import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import beforeAfter1 from "../assets/Clinica.png";
import beforeAfter2 from "../assets/Porcelana.png";
import beforeAfter3 from "../assets/Clareamento.png";
import beforeAfter4 from "../assets/Implate.png";

const cases = [
  {
    id: 1,
    title: "Clareamento Dental",
    description: "Paciente realizou clareamento a laser com resultado visível em apenas 2 sessões.",
    image: beforeAfter3,
    treatment: "Clareamento a Laser",
    duration: "2 sessões",
  },
  {
    id: 2,
    title: "Lentes de Contato Dental",
    description: "Transformação completa do sorriso com lentes de porcelana ultrafinas.",
    image: beforeAfter2,
    treatment: "Lentes de Contato",
    duration: "3 sessões",
  },
  {
    id: 3,
    title: "Ortodontia Invisível",
    description: "Alinhamento dental perfeito com alinhadores transparentes em 12 meses.",
    image: beforeAfter1,
    treatment: "Alinhadores Invisíveis",
    duration: "12 meses",
  },
  {
    id: 4,
    title: "Implante Dentário",
    description: "Reabilitação completa com implante de titânio e prótese de porcelana.",
    image: beforeAfter4,
    treatment: "Implante + Prótese",
    duration: "4 meses",
  },
];

export const Gallery = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? cases.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === cases.length - 1 ? 0 : c + 1));

  return (
    <section id="gallery" className="py-24 bg-[#F3F5F7]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#d2efe8] px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">Resultados Reais</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-4">
            Galeria de <span className="text-primary">Transformações</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos resultados alcançados por nossos pacientes com tratamentos personalizados.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.35 }}
                className="bg-card rounded-3xl overflow-hidden shadow-lg border-none"
              >
                <div className="grid md:grid-cols-2">
                  <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                    <img
                      src={cases[current].image}
                      alt={cases[current].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className=" bg-white p-8 md:p-10 flex flex-col justify-center space-y-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Caso {current + 1} de {cases.length}
                    </span>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-secondary">
                      {cases[current].title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {cases[current].description}
                    </p>
                    <div className="flex gap-6 pt-2">
                      <div>
                        <div className="text-xs text-secondary uppercase tracking-wider mb-1">Tratamento</div>
                        <div className="font-medium text-foreground text-sm">{cases[current].treatment}</div>
                      </div>
                      <div>
                        <div className="text-xs text-secondary uppercase tracking-wider mb-1">Duração</div>
                        <div className="font-medium text-foreground text-sm">{cases[current].duration}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav buttons */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 rounded-full bg-white cursor-pointer text-secondary border border-none shadow-md flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 rounded-full bg-white cursor-pointer text-secondary border border-none shadow-md flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {cases.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === current ? "w-8 bg-primary" : "w-2.5 bg-foreground hover:bg-primary/40"
                }`}
                aria-label={`Caso ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
