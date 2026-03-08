import { motion } from "framer-motion";
import { Smile, Baby, Sparkles, Activity, Wrench, User, Heart, Zap } from "lucide-react";

const specialties = [
  {
    icon: Smile,
    title: "Ortodontia",
    description: "Alinhamento e correção dentária com aparelhos modernos.",
  },
  {
    icon: Baby,
    title: "Odontopediatria",
    description: "Cuidado especializado para os pequenos.",
  },
  {
    icon: Sparkles,
    title: "Clareamento",
    description: "Dentes mais brancos e sorriso radiante.",
  },
  {
    icon: Activity,
    title: "Limpeza Profissional",
    description: "Higienização completa e prevenção.",
  },
  {
    icon: Wrench,
    title: "Implantes",
    description: "Substituição de dentes com implantes de qualidade.",
  },
  {
    icon: User,
    title: "Estética Facial",
    description: "Harmonização e procedimentos estéticos.",
  },
  {
    icon: Heart,
    title: "Restaurações",
    description: "Recuperação e fortalecimento dental.",
  },
  {
    icon: Zap,
    title: "Endodontia",
    description: "Tratamento de canal com precisão.",
  },
];

export const SpecializedServices = () => {
  return (
    <section className="py-24 bg-ice-gray">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-secundary mb-4">
            Especialidades
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tratamentos especializados para cada necessidade
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon;
            return (
              <motion.div
                key={specialty.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-secondary mb-2">
                  {specialty.title}
                </h3>
                <p className="text-sm text-muted-foreground">{specialty.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
