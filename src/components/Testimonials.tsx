import { motion } from "framer-motion";
import { Star } from "lucide-react";
import patient1 from "../assets/Cliente1.png";
import patient2 from "../assets/Cliente2.png";
import patient3 from "../assets/Cliente3.png";

const testimonials = [
  {
    name: "Maria Silva",
    location: "São Paulo, SP",
    text: "Excelente atendimento! A equipe é super atenciosa e o resultado do meu tratamento superou todas as expectativas. Recomendo de olhos fechados!",
    image: patient1,
    rating: 5,
  },
  {
    name: "Carlos Mendes",
    location: "Campinas, SP",
    text: "Profissionais extremamente qualificados. Fiz um implante e o processo foi muito tranquilo. A clínica é moderna e o ambiente é muito agradável.",
    image: patient2,
    rating: 5,
  },
  {
    name: "Ana Costa",
    location: "Santos, SP",
    text: "Depois de anos com medo de dentista, finalmente encontrei uma clínica onde me sinto acolhida. O tratamento foi indolor e o resultado ficou perfeito!",
    image: patient3,
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#F5F2F0]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-4">
            O Que Dizem Nossos Pacientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de transformação e satisfação
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-secondary">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
